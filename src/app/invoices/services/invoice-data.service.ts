import {Injectable} from '@angular/core';
import {InvoiceDto} from '../../swagger/models/invoice-dto';
import {BehaviorSubject, Observable, Subscriber} from 'rxjs';
import {InvoiceApiService} from '../../swagger/services/invoice-api.service';
import * as XLSX from 'xlsx';
import {map, tap} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {InvoicesEditDetailModalComponent} from '../components/invoices-edit-detail-modal/invoices-edit-detail-modal.component';

// https://coryrylan.com/blog/angular-observable-data-services
@Injectable()
export class InvoiceDataService {

  private invoices = new BehaviorSubject<InvoiceDto[]>([]);
  private selectedInvoice = new BehaviorSubject<InvoiceDto>(null);
  // Initial value
  private dataStore: { invoices$: InvoiceDto[], selectedInvoice$: InvoiceDto } = {invoices$: [], selectedInvoice$: null};
  invoices$ = this.invoices.asObservable();
  selectedInvoice$ = this.selectedInvoice.asObservable();

  constructor(
    private invoiceApiService: InvoiceApiService,
    private dialog: MatDialog
  ) {
    this.selectedInvoice$.subscribe((next) => console.log(next));
  }

  openEditDialog(invoice: InvoiceDto) {
    this.selectInvoice(invoice.id);
  }

  openSplitDialog(invoice: InvoiceDto) {
    this.selectInvoice(invoice.id);

    const dialog = this.dialog.open(InvoicesEditDetailModalComponent, {
      width: '400px',
      data: {name: 'test'}
    });

    dialog.afterClosed().subscribe(result => {
      this.dataStore.selectedInvoice$ = null;
      this.selectedInvoice.next(Object.assign({}, this.dataStore).selectedInvoice$);
    });
  }

  selectInvoice(id?: number) {
    let foundInvoice = null;
    this.dataStore.invoices$.map(invoice => {
      if (invoice.id === id) {
        foundInvoice = invoice;
      }
    });
    this.dataStore.selectedInvoice$ = foundInvoice;
    this.selectedInvoice.next(Object.assign({}, this.dataStore).selectedInvoice$);
  }

  loadAll() {
    this.loadInvoices().subscribe(
      data => {
        this.dataStore.invoices$ = data;
        this.invoices.next(Object.assign({}, this.dataStore).invoices$);
      }
    );
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

  private loadInvoices(): Observable<InvoiceDto[]> {
    return this.invoiceApiService.getInvoicesForUser({userId: 1});
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
