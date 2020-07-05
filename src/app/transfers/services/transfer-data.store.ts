import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import * as XLSX from 'xlsx';
import {RawTransferSerializerDto, TransferBatchImportDto, TransferListParams, TransferMutationDto} from '../../swagger/models';
import {TransferApiService} from '../../swagger/services/transfer-api.service';
import {TransferMutationApiService} from '../../swagger/services/transfer-mutation-api.service';
import {map, filter, switchMap, take, tap} from 'rxjs/operators';
import {ExistingTransferService} from './existing-transfer.service';

// https://coryrylan.com/blog/angular-observable-data-services
@Injectable()
export class TransferDataStore {

  private transfers$ = new BehaviorSubject<TransferMutationDto[]>([]);
  private selectedTransfer$ = new BehaviorSubject<TransferMutationDto>(null);
  private minAmount$ = new BehaviorSubject<number>(null);
  private maxAmount$ = new BehaviorSubject<number>(null);
  private recordCount$ = new BehaviorSubject<number>(null);
  private skip$ = new BehaviorSubject<number>(null);
  private filter$ = new BehaviorSubject<TransferListParams>(null);

  // Initial value
  private dataStore: {
    transfer: TransferMutationDto[],
    selectedTransfer: TransferMutationDto,
    minAmount: number,
    maxAmount: number,
    recordCount: number,
    skip: number,
    filter: TransferListParams
  } = {
    transfer: [],
    selectedTransfer: null,
    minAmount: 0,
    maxAmount: 0,
    recordCount: 0,
    skip: null,
    filter: null
  };

  constructor(
    private transferApiService: TransferApiService,
    private transferMutationApiService: TransferMutationApiService,
    private existingTransferService: ExistingTransferService
  ) {
  }

  get filter(): Observable<TransferListParams> {
    return this.filter$.asObservable();
  }

  adjustFilter(input: TransferListParams) {
    this.dataStore.filter = input;
    this.filter$.next(Object.assign({}, this.dataStore).filter);
    this.transferApiService.transferControllerGetFilteredTransfers({body: input}).subscribe((data: TransferListParams) => {
      this.setTransfers(data.transferMutations);
      this.setMinAmount(data.minAmount);
      this.setMaxAmount(data.maxAmount);
      this.setRecordCount(data.count);
      this.setSkip(data.transferMutations.length + this.dataStore.skip);
    });
  }

  loadMore() {
    this.dataStore.filter = {...this.dataStore.filter, skip: this.dataStore.filter.skip += 20};
    this.filter$.next(Object.assign({}, this.dataStore).filter);
    this.transferApiService.transferControllerGetFilteredTransfers({body: this.dataStore.filter}).subscribe((data: TransferListParams) => {
      let accData = [...this.dataStore.transfer];
      accData = accData.concat(data.transferMutations);
      this.dataStore.transfer = accData;
      this.transfers$.next(Object.assign({}, this.dataStore).transfer);
      this.setMinAmount(data.minAmount);
      this.setMaxAmount(data.maxAmount);
      this.setRecordCount(data.count);
      this.setSkip(data.transferMutations.length + this.dataStore.skip);
    });
  }

  get transfers(): Observable<TransferMutationDto[]> {
    return this.transfers$.asObservable();
  }

  setTransfers(input: TransferMutationDto[]) {
    this.dataStore.transfer = input;
    this.transfers$.next(Object.assign({}, this.dataStore).transfer);
  }

  get selectedTransfer(): Observable<TransferMutationDto> {
    return this.selectedTransfer$.asObservable();
  }

  get minAmount(): Observable<number> {
    return this.minAmount$.asObservable();
  }

  setMinAmount(input: number) {
    this.dataStore.minAmount = input;
    this.minAmount$.next(Object.assign({}, this.dataStore).minAmount);
  }

  get maxAmount(): Observable<number> {
    return this.maxAmount$.asObservable();
  }

  setMaxAmount(input: number) {
    this.dataStore.maxAmount = input;
    this.maxAmount$.next(Object.assign({}, this.dataStore).maxAmount);
  }

  get recordCount(): Observable<number> {
    return this.recordCount$.asObservable();
  }

  setRecordCount(input: number) {
    this.dataStore.recordCount = input;
    this.recordCount$.next(Object.assign({}, this.dataStore).recordCount);
  }

  get skip(): Observable<number> {
    return this.skip$.asObservable();
  }

  setSkip(input: number): void {
    this.dataStore.skip = input;
    this.skip$.next(Object.assign({}, this.dataStore).skip);
  }

  updateTransferMutation(updateTransferMutation: TransferMutationDto): void {
    this.dataStore.transfer.map((_invoice, index) => {
      if (_invoice.id === updateTransferMutation.id) {
        this.dataStore.transfer[index] = updateTransferMutation;
        this.transfers$.next(Object.assign({}, this.dataStore).transfer);
      }
    });
  }

  updateAndAddInvoice(transferMutationId: number, splitTransferMutations: TransferMutationDto[]): void {
    this.dataStore.transfer.map((transfer, index) => {
      if (transfer.mutationId === transferMutationId) {
        this.dataStore.transfer[index] = {...splitTransferMutations[0]};
        this.dataStore.transfer.splice(index + 1, 0, splitTransferMutations[1]);
      }
    });
    this.transfers$.next(Object.assign({}, this.dataStore).transfer);
  }

  removeInvoice(id: number): void {
    this.transferMutationApiService.transferMutationControllerDelete({id}).subscribe(() => {
      this.dataStore.transfer.map((transferMutation, index) => {
        if (transferMutation.mutationId === id) {
          this.dataStore.transfer.splice(index, 1);
        }
      });
      this.transfers$.next(Object.assign({}, this.dataStore).transfer);
    });
  }

  multiUploadExcel(file) {
    this.xlsToJson(file).then((json) => {
      this.transferApiService.transferControllerPostExcelImport({body: json})
        .pipe(
          take(1),
          tap((next: TransferBatchImportDto) => this.addToTransfers(next.savedTransfers)),
          filter((response) => response?.existingTransfers.length > 0),
          map((response) => response.existingTransfers),
          switchMap((existingTransfers) => this.existingTransferService.openDialog(existingTransfers).pipe(
            filter((x => !!x)),
            switchMap((transfersToForce: RawTransferSerializerDto[]) => this.postExistingTransfers(transfersToForce))))
        ).subscribe();
    });
  }

  private addToTransfers(transfers) {
    this.dataStore.transfer = this.dataStore.transfer.concat(transfers).sort((a, b) =>
      (new Date(a.transactionDate) as any) - (new Date(b.transactionDate) as any));
    this.transfers$.next(Object.assign({}, this.dataStore).transfer);
  }

  private postExistingTransfers(transfers: RawTransferSerializerDto[]): Observable<TransferMutationDto[]> {
    return this.transferApiService.transferControllerPostExisting({body: transfers}).pipe(
      tap((response) => this.addToTransfers(response)));
  }

  private xlsToJson(file): Promise<any> {
    return new Promise((resolve) => {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const arrayBuffer: any = fileReader.result;
        const data = new Uint8Array(arrayBuffer);
        const arr = [];
        for (let i = 0; i !== data.length; ++i) {
          arr[i] = String.fromCharCode(data[i]);
        }
        const bstr = arr.join('');
        const workbook = XLSX.read(bstr, {type: 'binary'});
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const json = XLSX.utils.sheet_to_json(worksheet, {raw: true}) as string[];
        resolve(json);
      };
      fileReader.readAsArrayBuffer(file);
    });
  }
}
