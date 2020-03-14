import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {TransferDataService} from '../../services/transfer-data.service';
import {BreakpointService} from '../../../core/services/breakpoint.service';
import {TransferMutationDto} from '../../../swagger/models/transfer-mutation-dto';

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

  constructor(
    private invoiceDataService: TransferDataService,
    private breakpointService: BreakpointService
  ) {

    this.transferMutations$ = this.invoiceDataService.transfers;
    this.selectedTransferMutation$ = this.invoiceDataService.selectedTransfer;
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
    this.invoiceDataService.multiUploadExcel(this.file);
  }

  cancelUpload() {
    this.file = undefined;
  }

}
