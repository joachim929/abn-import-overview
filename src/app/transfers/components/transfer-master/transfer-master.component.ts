import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {TransferDataStore} from '../../services/transfer-data.store';
import {BreakpointService} from '../../../core/services/breakpoint.service';
import {TransferMutationDto} from '../../../swagger/models/transfer-mutation-dto';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-transfer-master',
  templateUrl: './transfer-master.component.html',
  styleUrls: ['./transfer-master.component.scss']
})
export class TransferMasterComponent implements OnInit {
  file: File;
  transferMutations$: Observable<TransferMutationDto[]>;
  recordCount$: Observable<number>;
  selectedTransferMutation$: Observable<TransferMutationDto>;
  showFilter = true;
  events: string[] = [];
  opened: boolean;

  constructor(
    private invoiceDataService: TransferDataStore,
    private breakpointService: BreakpointService,
    private breakpointObserver: BreakpointObserver
  ) {

    this.transferMutations$ = this.invoiceDataService.transfers;
    this.selectedTransferMutation$ = this.invoiceDataService.selectedTransfer;
    this.recordCount$ = this.invoiceDataService.recordCount;
  }

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.XSmall
    ]).subscribe((result) => {
      if (!this.breakpointObserver.isMatched('(max-width: 599.99px)')) {
        this.opened = true;
      }
    });
  }

  get isSmall(): boolean {
    return this.breakpointService.isXSmall || this.breakpointService.isSmall;
  }

  get sideNavMode() {
    return this.isSmall ? 'over' : 'side';
  }

  incomingFile(event) {
    this.file = event.target.files[0];
  }

  upload() {
    this.invoiceDataService.multiUploadExcel(this.file);
  }

  cancelUpload() {
    this.file = undefined;
  }

  toggleFilter() {
    if (this.isSmall) {
      this.showFilter = !this.showFilter;
    }
  }

}
