import {Component, OnInit} from '@angular/core';
import {InvoiceDto} from '../../../swagger/models/invoice-dto';
import {Observable} from 'rxjs';
import {TransferDataService} from '../../services/transfer-data.service';
import {BreakpointService} from '../../../core/services/breakpoint.service';

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

  constructor(
    private invoiceDataService: TransferDataService,
    private breakpointService: BreakpointService
  ) {

    this.invoices$ = this.invoiceDataService.transfers;
    this.selectedInvoice$ = this.invoiceDataService.selectedTransfer;
    this.recordCount$ = this.invoiceDataService.recordCount;
  }

  ngOnInit() {
  }

  get isSmall(): boolean {
    return this.breakpointService.isXSmall || this.breakpointService.isSmall;
  }

  incomingFile(event) {
    this.file = event.target.files[0];
  }

  upload() {
    // this.invoiceDataService.multiUploadExcel(this.file);
  }

  cancelUpload() {
    this.file = undefined;
  }

}
