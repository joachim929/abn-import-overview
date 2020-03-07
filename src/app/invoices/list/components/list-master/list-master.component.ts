import {Component, OnInit, ViewChild} from '@angular/core';
import {InvoiceDataService} from '../../../services/invoice-data.service';
import {Observable} from 'rxjs';
import {InvoiceDto} from '../../../../swagger/models/invoice-dto';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {InvoiceEditService} from '../../../services/invoice-edit.service';

@Component({
  selector: 'app-list-master',
  templateUrl: './list-master.component.html',
  styleUrls: ['./list-master.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListMasterComponent implements OnInit {
  recordCount$: Observable<number>;
  displayedColumns: string[] = ['transactionDate', 'amount', 'startBalance', 'endBalance', 'delete'];
  dataSource = new MatTableDataSource();
  expandedElement: InvoiceDto | null;
  headerColumns = {
    transactionDate: 'Transaction date',
    amount: 'Amount',
    startBalance: 'Start balance',
    endBalance: 'End balance',
    delete: ' '
  };

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private invoiceDataService: InvoiceDataService,
    private invoiceEditService: InvoiceEditService
  ) {
    this.invoiceDataService.invoices$.subscribe((invoices) => {
      this.dataSource.data = invoices;
      this.dataSource.sort = this.sort;
    });
    this.recordCount$ = this.invoiceDataService.recordCount$;
  }

  ngOnInit() {
  }

  loadMore() {
    this.invoiceDataService.loadMore();
  }

  patch(event, invoice: InvoiceDto) {
    event.stopPropagation();
    this.invoiceEditService.openEditDialog(invoice);
  }

  split(event, invoice: InvoiceDto) {
    event.stopPropagation();
    this.invoiceEditService.openSplitDialog(invoice);
  }

  remove(event, invoiceId: number) {
    event.stopPropagation();
    this.invoiceDataService.removeInvoice(invoiceId);
  }
}
