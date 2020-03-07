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
  recordCount$: Observable<number>;
  selectedInvoice$: Observable<InvoiceDto>;

  splitItem: InvoiceDto;

  constructor(
    private invoiceDataService: InvoiceDataService
  ) {
    this.invoices$ = this.invoiceDataService.invoices$;
    this.selectedInvoice$ = this.invoiceDataService.selectedInvoice$;
    this.recordCount$ = this.invoiceDataService.recordCount$;
  }

  ngOnInit() {
  }

  incomingFile(event) {
    this.file = event.target.files[0];
  }

  upload() {
    this.invoiceDataService.multiUploadExcel(this.file);
  }

  loadMore() {
    this.invoiceDataService.loadMore();
  }
}
