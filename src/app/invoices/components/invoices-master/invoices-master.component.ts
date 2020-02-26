import {Component, OnInit} from '@angular/core';
import {InvoiceDto} from '../../../swagger/models/invoice-dto';
import {BehaviorSubject} from 'rxjs';
import {InvoiceDataService} from '../../services/invoice-data.service';

@Component({
  selector: 'app-invoices-master',
  templateUrl: './invoices-master.component.html',
  styleUrls: ['./invoices-master.component.scss']
})
export class InvoicesMasterComponent implements OnInit {
  file: File;
  _invoices$ = new BehaviorSubject<InvoiceDto[]>([]);
  dataStore: { invoices$: InvoiceDto[] } = {invoices$: []};
  invoices$ = this._invoices$.asObservable();

  splitItem: InvoiceDto;

  constructor(
    private invoiceDataService: InvoiceDataService
  ) {
    this.invoices$ = this.invoiceDataService.invoices$;
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
    console.log('upload');
    this.invoiceDataService.multiUploadExcel(this.file);
    // this.invoicesService.xlsToJson(this.file).subscribe((next) => {
    //   console.log(next); // todo implement adding reponse to obserable
    // });
  }

  remove(invoiceId: number) {
    this.invoiceDataService.removeInvoice(invoiceId);
  }
}
