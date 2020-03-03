import {Component, OnDestroy, OnInit} from '@angular/core';
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
  selectedInvoice$: Observable<InvoiceDto>;

  splitItem: InvoiceDto;

  constructor(
    private invoiceDataService: InvoiceDataService
  ) {
    this.invoices$ = this.invoiceDataService.invoices$.pipe(
      tap(result =>
        result.sort((a, b) =>
          (a.transactionDate > b.transactionDate) ? 1 : -1))
    );
    this.selectedInvoice$ = this.invoiceDataService.selectedInvoice$;
  }

  ngOnInit() {
    this.invoiceDataService.loadAll();
  }

  incomingFile(event) {
    this.file = event.target.files[0];
  }

  test() {
    this.invoiceDataService.filteredInvoicesTest().subscribe((next) => console.log(next));
  }

  upload() {
    this.invoiceDataService.multiUploadExcel(this.file);
  }
}
