import {Injectable} from '@angular/core';
import {InvoiceDto} from '../../swagger/models/invoice-dto';
import {BehaviorSubject, Observable} from 'rxjs';
import {InvoiceApiService} from '../../swagger/services/invoice-api.service';
import * as XLSX from 'xlsx';
import {SplitInvoiceDto} from '../../swagger/models/split-invoice-dto';
import {InvoiceFilteredDto} from '../../swagger/models';

// https://coryrylan.com/blog/angular-observable-data-services
@Injectable()
export class InvoiceDataService {

  private invoices = new BehaviorSubject<InvoiceDto[]>([]);
  private selectedInvoice = new BehaviorSubject<InvoiceDto>(null);
  private minAmount = new BehaviorSubject<number>(null);
  private maxAmount = new BehaviorSubject<number>(null);
  private recordCount = new BehaviorSubject<number>(null);
  private skip = new BehaviorSubject<number>(null);
  // Initial value
  private dataStore: {
    invoices$: InvoiceDto[],
    selectedInvoice$: InvoiceDto,
    minAmount$: number,
    maxAmount$: number,
    recordCount$: number,
    skip$: number
  } = {
    invoices$: [],
    selectedInvoice$: null,
    minAmount$: 0,
    maxAmount$: 0,
    recordCount$: 0,
    skip$: null
  };

  get invoices$(): Observable<InvoiceDto[]> {
    return this.invoices.asObservable();
  }

  setInvoices$(input: InvoiceDto[]) {
    this.dataStore.invoices$ = input;
    this.invoices.next(Object.assign({}, this.dataStore).invoices$);
  }

  get selectedInvoice$(): Observable<InvoiceDto> {
    return this.selectedInvoice.asObservable();
  }

  setSelectedInvoice$(input: InvoiceDto) {
    this.dataStore.selectedInvoice$ = input;
    this.selectedInvoice.next(Object.assign({}, this.dataStore).selectedInvoice$);
  }

  get minAmount$(): Observable<number> {
    return this.minAmount.asObservable();
  }

  setMinAmount$(input: number) {
    this.dataStore.minAmount$ = input;
    this.minAmount.next(Object.assign({}, this.dataStore).minAmount$);
  }

  get maxAmount$(): Observable<number> {
    return this.maxAmount.asObservable();
  }

  setMaxAmount$(input: number) {
    this.dataStore.maxAmount$ = input;
    this.maxAmount.next(Object.assign({}, this.dataStore).maxAmount$);
  }

  get recordCount$(): Observable<number> {
    return this.recordCount.asObservable();
  }

  setRecordCount$(input: number) {
    this.dataStore.recordCount$ = input;
    this.recordCount.next(Object.assign({}, this.dataStore).recordCount$);
  }

  get skip$(): Observable<number> {
    return this.skip.asObservable();
  }

  setSkip$(input: number) {
    this.dataStore.skip$ = input;
    this.skip.next(Object.assign({}, this.dataStore).skip$);
  }

  constructor(
    private invoiceApiService: InvoiceApiService
  ) {
  }

  getFilteredInvoices(params: InvoiceFilteredDto) {
    params.limit = 20;
    this.invoiceApiService.filteredInvoices({body: params}
    ).subscribe(((data: InvoiceFilteredDto) => {
      this.setInvoices$(data.records);
      this.setMinAmount$(data.minAmount);
      this.setMaxAmount$(data.maxAmount);
      this.setRecordCount$(data.count);
      this.setSkip$(data.records.length + this.dataStore.skip$);
    }));
  }

  updateInvoice(updatedInvoice: InvoiceDto) {
    this.dataStore.invoices$.map((_invoice, index) => {
      if (_invoice.id === updatedInvoice.id) {
        this.dataStore.invoices$[index] = {...updatedInvoice};
      }
    });
  }

  updateAndAddInvoice(editedInvoices: SplitInvoiceDto) {
    this.dataStore.invoices$.map((_invoice, index) => {
      if (_invoice.id === editedInvoices.patch.id) {
        this.dataStore.invoices$[index] = {...editedInvoices.patch};
        this.dataStore.invoices$.splice(index + 1, 0, editedInvoices.split);
      }
    });
    this.invoices.next(Object.assign({}, this.dataStore).invoices$);
  }

  removeInvoice(id: number) {
    this.invoiceApiService.deleteInvoice({id}).subscribe(() => {
      this.dataStore.invoices$.map((invoice, index) => {
        if (invoice.id === id) {
          this.dataStore.invoices$.splice(index, 1);
        }
      });
      this.invoices.next(Object.assign({}, this.dataStore).invoices$);
    });
  }

  multiUploadExcel(file) {
    this.xlsToJson(file).then((json) => {
      this.invoiceApiService.postInvoiceMultiExcel({body: json})
        .subscribe((next) => {
          this.dataStore.invoices$ = this.dataStore.invoices$.concat(next);
          this.invoices.next(Object.assign({}, this.dataStore).invoices$);
        });
    });
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
