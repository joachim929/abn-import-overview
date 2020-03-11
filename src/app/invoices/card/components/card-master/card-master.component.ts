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
    private transferDataService: TransferDataService
  ) {
    this.invoices$ = this.transferDataService.transfers;
    this.selectedInvoice$ = this.transferDataService.selectedTransfer;
    this.recordCount$ = this.transferDataService.recordCount;
  }

  ngOnInit() {
  }

  loadMore() {
    // this.transferDataService.loadMore();
  }

}
