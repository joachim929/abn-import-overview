import {Component, OnInit} from '@angular/core';
import {InvoicesService} from '../../services/invoices.service';
import {InvoiceDto} from '../../../swagger/models/invoice-dto';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-invoices-master',
  templateUrl: './invoices-master.component.html',
  styleUrls: ['./invoices-master.component.scss']
})
export class InvoicesMasterComponent implements OnInit {
  _invoices$ = new BehaviorSubject<InvoiceDto[]>([]);
  dataStore: { invoices$: InvoiceDto[] } = {invoices$: []};
  invoices$ = this._invoices$.asObservable();

  splitItem: InvoiceDto;

  constructor(
    private invoicesService: InvoicesService
  ) {
  }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.invoicesService.loadInvoices().subscribe(
      data => {
        this.dataStore.invoices$ = data;
        this._invoices$.next(Object.assign({}, this.dataStore).invoices$);
      }
    );
  }

  patch(invoice: InvoiceDto) {

  }

  split(invoice: InvoiceDto) {
    if (!this.splitItem) {
      this.splitItem = {...invoice};
    } else {
      this.splitItem = undefined;
    }
  }

  remove(invoiceId: number) {
    this.invoicesService.deleteInvoice(invoiceId).subscribe(() => {
      this.dataStore.invoices$.map((invoice, index) => {
        if (invoice.id === invoiceId) {
          this.dataStore.invoices$.splice(index, 1);
        }
      });
      this._invoices$.next(Object.assign({}, this.dataStore).invoices$);
    }, () => console.warn('Could not delete invoice'));
  }
}
