import {Injectable} from '@angular/core';
import {TransferEditDetailModalComponent} from '../shared/components/transfer-edit-detail-modal/transfer-edit-detail-modal.component';
import {filter, switchMap, tap} from 'rxjs/operators';
import {TransferDataStore} from './transfer-data.store';
import {MatDialog} from '@angular/material/dialog';
import {TransferSplitDetailModalComponent} from '../shared/components/transfer-split-detail-modal/transfer-split-detail-modal.component';
import {TransferMutationDto} from '../../swagger/models/transfer-mutation-dto';
import {TransferApiService} from '../../swagger/services/transfer-api.service';
import {TransferMutationApiService} from '../../swagger/services/transfer-mutation-api.service';
import {SplitTransferMutationDto} from '../../swagger/models';

@Injectable()
export class TransferEditService {

  constructor(
    private transferDataService: TransferDataStore,
    private transferApiService: TransferApiService,
    private transferMutationApiService: TransferMutationApiService,
    private dialog: MatDialog
  ) {
  }

  openEditDialog(transferMutation: TransferMutationDto) {
    const dialog = this.dialog.open(TransferEditDetailModalComponent, {
      width: '800px',
      maxWidth: '95vw',
      maxHeight: '95vh',
      data: {transferMutation},
    });

    dialog.afterClosed().pipe(
      filter(x => !!x),
      switchMap(x => {
        return this.transferMutationApiService.patchTransferMutation({body: x});
      })).subscribe(
      (editedTransferMutation: TransferMutationDto) => this.transferDataService.updateTransferMutation(editedTransferMutation));
  }

  openSplitDialog(transferMutation: TransferMutationDto) {
    let transferMutationId: number;

    const dialog = this.dialog.open(TransferSplitDetailModalComponent, {
      width: '800px',
      maxWidth: '95vw',
      maxHeight: '95vh',
      data: {transferMutation}
    });

    dialog.afterClosed().pipe(
      filter(x => !!x),
      tap((x: SplitTransferMutationDto) => transferMutationId = x.patch.mutationId),
      switchMap((x: SplitTransferMutationDto) => {
        return this.transferMutationApiService.splitTransferMutation({body: x}).pipe(
          filter(y => !!y)
        );
      })
    ).subscribe((editedTransfers) =>
      this.transferDataService.updateAndAddInvoice(transferMutationId, editedTransfers));
  }
}
