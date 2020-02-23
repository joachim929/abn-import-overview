import {Component, OnInit} from '@angular/core';
import {InvoicesService} from '../../services/invoices.service';
import {filter, tap} from 'rxjs/operators';
import {InvoiceDto} from '../../../swagger/models/invoice-dto';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-invoices-master',
  templateUrl: './invoices-master.component.html',
  styleUrls: ['./invoices-master.component.scss']
})
export class InvoicesMasterComponent implements OnInit {
  invoices: InvoiceDto[];
  test$: Observable<InvoiceDto[]>;

  constructor(
    private invoicesService: InvoicesService
  ) {
  }

  ngOnInit() {
    this.test$ = this.invoicesService.loadInvoices().pipe(
      filter(x => x && x.length > 0)
    );
  }
}
