import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {InvoiceDto} from '../../../../swagger/models/invoice-dto';
import {InvoiceDataService} from '../../../services/invoice-data.service';

@Component({
  selector: 'app-card-master',
  templateUrl: './card-master.component.html',
  styleUrls: ['./card-master.component.scss']
})
export class CardMasterComponent implements OnInit {
  invoices$: Observable<InvoiceDto[]>;
  recordCount$: Observable<number>;
  selectedInvoice$: Observable<InvoiceDto>;

  constructor(
    private invoiceDataService: InvoiceDataService
  ) {
    this.invoices$ = this.invoiceDataService.invoices$;
    this.selectedInvoice$ = this.invoiceDataService.selectedInvoice$;
    this.recordCount$ = this.invoiceDataService.recordCount$;
  }

  ngOnInit() {
  }

  loadMore() {
    this.invoiceDataService.loadMore();
  }

}
