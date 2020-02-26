import {Component, OnInit} from '@angular/core';
import {InvoiceDto} from '../../../swagger/models/invoice-dto';
import {Observable} from 'rxjs';
import {InvoiceDataService} from '../../services/invoice-data.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-invoices-master',
  templateUrl: './invoices-master.component.html',
  styleUrls: ['./invoices-master.component.scss']
})
export class InvoicesMasterComponent implements OnInit {
  file: File;
  invoices$: Observable<InvoiceDto[]>;

  splitItem: InvoiceDto;

  constructor(
    private invoiceDataService: InvoiceDataService
  ) {
    this.invoices$ = this.invoiceDataService.invoices$.pipe(
      tap(result =>
        result.sort((a, b) =>
          (a.transactionDate > b.transactionDate) ? 1 : -1))
    );
  }

  ngOnInit() {
    this.invoiceDataService.loadAll();
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

  incomingFile(event) {
    this.file = event.target.files[0];
  }

  upload() {
    this.invoiceDataService.multiUploadExcel(this.file);
  }

  remove(invoiceId: number) {
    this.invoiceDataService.removeInvoice(invoiceId);
  }
}
