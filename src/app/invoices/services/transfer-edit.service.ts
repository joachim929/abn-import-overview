import {Injectable} from '@angular/core';
import {TransferEditDetailModalComponent} from '../card/components/transfer-edit-detail-modal/transfer-edit-detail-modal.component';
import {filter} from 'rxjs/operators';
import {TransferDataService} from './transfer-data.service';
import {MatDialog} from '@angular/material/dialog';
import {TransferSplitDetailModalComponent} from '../card/components/transfer-split-detail-modal/transfer-split-detail-modal.component';
import {TransferMutationDto} from '../../swagger/models/transfer-mutation-dto';

@Injectable()
export class TransferEditService {

  constructor(
    // private invoiceApiService: InvoiceApiService,
    private transferDataService: TransferDataService,
    private dialog: MatDialog
  ) {
  }

  openEditDialog(transferMutation: TransferMutationDto) {
    const dialog = this.dialog.open(TransferEditDetailModalComponent, {
      width: '800px',
      maxWidth: '95vw',
      maxHeight: '95vh',
      data: {transferMutation}
    });

    dialog.afterClosed().pipe(
      filter(x => !!x)
      // switchMap(x => {
      // return this.invoiceApiService.patchInvoice({body: x});
      // })
    ).subscribe((editedTransferMutation: TransferMutationDto) => console.log(editedTransferMutation));
    // this.transferDataService.updateInvoice(editedInvoice));
  }

  openSplitDialog(transferMutation: TransferMutationDto) {

    const dialog = this.dialog.open(TransferSplitDetailModalComponent, {
      width: '800px',
      maxWidth: '95vw',
      maxHeight: '95vh',
      data: {transferMutation}
    });

    dialog.afterClosed().pipe(
      // filter(x => !!x),
      // switchMap(x => {
      //   return this.invoiceApiService.splitInvoice({body: x}).pipe(
      //     filter(y => !!y)
      //   );
      // })
    ).subscribe((editedTransfers) => console.log(editedTransfers));
    // this.transferDataService.updateAndAddInvoice(editedInvoices));
  }
}
