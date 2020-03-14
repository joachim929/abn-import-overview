import {Component, OnInit, ViewChild} from '@angular/core';
import {TransferDataService} from '../../../services/transfer-data.service';
import {Observable} from 'rxjs';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {TransferEditService} from '../../../services/transfer-edit.service';
import {BreakpointService} from '../../../../core/services/breakpoint.service';
import {TransferMutationDto} from '../../../../swagger/models/transfer-mutation-dto';

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
  expandedElement: TransferMutationDto | null;
  headerColumns = {
    transactionDate: 'Transaction date',
    amount: 'Amount',
    startBalance: 'Start balance',
    endBalance: 'End balance',
    delete: ' '
  };

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private transferDataService: TransferDataService,
    private transferEditService: TransferEditService,
    private breakpointService: BreakpointService
  ) {
    this.transferDataService.transfers.subscribe((transferMutations: TransferMutationDto[]) => {
      this.dataSource.data = transferMutations;
      this.dataSource.sort = this.sort;
    });
    this.recordCount$ = this.transferDataService.recordCount;
  }

  ngOnInit() {
  }

  get isXSmall(): boolean {
    return this.breakpointService.isXSmall;
  }

  loadMore() {
    this.transferDataService.loadMore();
  }

  patch(event, transferMutation: TransferMutationDto) {
    event.stopPropagation();
    this.transferEditService.openEditDialog(transferMutation);
  }

  split(event, transferMutation: TransferMutationDto) {
    event.stopPropagation();
    this.transferEditService.openSplitDialog(transferMutation);
  }

  remove(event, transferMutationId: number) {
    event.stopPropagation();
    this.transferDataService.removeInvoice(transferMutationId);
  }
}