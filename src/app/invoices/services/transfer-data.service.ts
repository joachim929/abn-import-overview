import {Injectable} from '@angular/core';
import {InvoiceDto} from '../../swagger/models/invoice-dto';
import {BehaviorSubject, Observable} from 'rxjs';
import * as XLSX from 'xlsx';
import {Invoice, Transfer, TransferMutationDto} from '../../swagger/models';
import {switchMap} from 'rxjs/operators';
import {TransferApiService} from '../../swagger/services/transfer-api.service';

// https://coryrylan.com/blog/angular-observable-data-services
@Injectable()
export class TransferDataService {

  private transfers$ = new BehaviorSubject<InvoiceDto[]>([]);
  private newTransfers$ = new BehaviorSubject<TransferMutationDto[]>([]);
  private selectedTransfer$ = new BehaviorSubject<InvoiceDto>(null);
  private minAmount$ = new BehaviorSubject<number>(null);
  private maxAmount$ = new BehaviorSubject<number>(null);
  private recordCount$ = new BehaviorSubject<number>(null);
  private skip$ = new BehaviorSubject<number>(null);
  // private filter$ = new BehaviorSubject<InvoiceFilteredDto>(null);
  // Initial value
  private dataStore: {
    transfer: InvoiceDto[],
    newTransfer: TransferMutationDto[],
    selectedTransfer: InvoiceDto,
    minAmount: number,
    maxAmount: number,
    recordCount: number,
    skip: number,
    // filter: InvoiceFilteredDto
  } = {
    transfer: [],
    newTransfer: [],
    selectedTransfer: null,
    minAmount: 0,
    maxAmount: 0,
    recordCount: 0,
    skip: null
    // filter: null
  };

  constructor(
    // private invoiceApiService: InvoiceApiService,
    private transferApiService: TransferApiService
  ) {
    this.loadNew();
  }

  // get filter(): Observable<InvoiceFilteredDto> {
  //   return this.filter$.asObservable();
  // }

  // adjustFilter(input: InvoiceFilteredDto) {
  // this.dataStore.filter = input;
  // this.filter$.next(Object.assign({}, this.dataStore).filter);
  // this.invoiceApiService.filteredInvoices({body: input}).subscribe((data: InvoiceFilteredDto) => {
  //   this.setTransfers(data.records);
  //   this.setMinAmount(data.minAmount);
  //   this.setMaxAmount(data.maxAmount);
  //   this.setRecordCount(data.count);
  //   this.setSkip(data.records.length + this.dataStore.skip);
  // });
  // }

  loadNew() {
    this.transferApiService.getTransfer().pipe().subscribe((next) => {
      this.dataStore.newTransfer = next;
      this.newTransfers$.next(Object.assign({}, this.dataStore).newTransfer);
    });
  }

  // loadMore() {
  //   const filter = {...this.dataStore.filter};
  //   filter.skip += 20;
  //   this.dataStore.filter = filter;
  //   this.filter$.next(Object.assign({}, this.dataStore).filter);
  //   this.invoiceApiService.filteredInvoices({body: filter}).subscribe((data: InvoiceFilteredDto) => {
  //     let accData = [...this.dataStore.transfer];
  //     accData = accData.concat(data.records);
  //     this.dataStore.transfer = accData;
  //     this.transfers$.next(Object.assign({}, this.dataStore).transfer);
  //     this.setMinAmount(data.minAmount);
  //     this.setMaxAmount(data.maxAmount);
  //     this.setRecordCount(data.count);
  //     this.setSkip(data.records.length + this.dataStore.skip);
  //   });
  // }

  get newTransfers(): Observable<TransferMutationDto[]> {
    return this.newTransfers$.asObservable();
  }

  get transfers(): Observable<InvoiceDto[]> {
    return this.transfers$.asObservable();
  }

  setTransfers(input: InvoiceDto[]) {
    this.dataStore.transfer = input;
    this.transfers$.next(Object.assign({}, this.dataStore).transfer);
  }

  get selectedTransfer(): Observable<InvoiceDto> {
    return this.selectedTransfer$.asObservable();
  }

  setSelectedTransfer(input: InvoiceDto) {
    this.dataStore.selectedTransfer = input;
    this.selectedTransfer$.next(Object.assign({}, this.dataStore).selectedTransfer);
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

  setSkip(input: number) {
    this.dataStore.skip = input;
    this.skip$.next(Object.assign({}, this.dataStore).skip);
  }

  updateInvoice(updatedInvoice: InvoiceDto) {
    this.dataStore.transfer.map((_invoice, index) => {
      if (_invoice.id === updatedInvoice.id) {
        this.dataStore.transfer[index] = {...updatedInvoice};
      }
    });
  }

  // updateAndAddInvoice(editedInvoices: SplitInvoiceDto) {
  //   this.dataStore.transfer.map((_invoice, index) => {
  //     if (_invoice.id === editedInvoices.patch.id) {
  //       this.dataStore.transfer[index] = {...editedInvoices.patch};
  //       this.dataStore.transfer.splice(index + 1, 0, editedInvoices.split);
  //     }
  //   });
  //   this.transfers$.next(Object.assign({}, this.dataStore).transfer);
  // }
  //
  // removeInvoice(id: number) {
  //   this.invoiceApiService.deleteInvoice({id}).subscribe(() => {
  //     this.dataStore.transfer.map((invoice, index) => {
  //       if (invoice.id === id) {
  //         this.dataStore.transfer.splice(index, 1);
  //       }
  //     });
  //     this.transfers$.next(Object.assign({}, this.dataStore).transfer);
  //   });
  // }
  //
  // multiUploadExcel(file) {
  //   this.xlsToJson(file).then((json) => {
  //     this.invoiceApiService.postInvoiceMultiExcel({body: json})
  //       .subscribe((next) => {
  //         this.dataStore.transfer = this.dataStore.transfer.concat(next);
  //         this.transfers$.next(Object.assign({}, this.dataStore).transfer);
  //       });
  //   });
  // }

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
