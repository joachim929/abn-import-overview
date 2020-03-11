import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {InvoiceDto} from '../../../../swagger/models/invoice-dto';
import {TransferDataService} from '../../../services/transfer-data.service';

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
    private invoiceDataService: TransferDataService
  ) {
    this.invoices$ = this.invoiceDataService.transfers;
    this.selectedInvoice$ = this.invoiceDataService.selectedTransfer;
    this.recordCount$ = this.invoiceDataService.recordCount;
  }

  ngOnInit() {
  }

  loadMore() {
    this.invoiceDataService.loadMore();
  }

}
