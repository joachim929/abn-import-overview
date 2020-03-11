import {Injectable} from '@angular/core';
import {InvoiceDto} from '../../swagger/models/invoice-dto';
import {InvoicesEditDetailModalComponent} from '../card/components/invoices-edit-detail-modal/invoices-edit-detail-modal.component';
import {filter, switchMap} from 'rxjs/operators';
import {InvoiceApiService} from '../../swagger/services/invoice-api.service';
import {TransferDataService} from './transfer-data.service';
import {MatDialog} from '@angular/material/dialog';
import {InvoicesSplitDetailModalComponent} from '../card/components/invoices-split-detail-modal/invoices-split-detail-modal.component';
import {SplitInvoiceDto} from '../../swagger/models/split-invoice-dto';

@Injectable()
export class TransferEditService {

  constructor(
    private invoiceApiService: InvoiceApiService,
    private invoiceDataService: TransferDataService,
    private dialog: MatDialog
  ) {
  }

  openEditDialog(invoice: InvoiceDto) {
    const dialog = this.dialog.open(InvoicesEditDetailModalComponent, {
      width: '800px',
      maxWidth: '95vw',
      maxHeight: '95vh',
      data: {invoice}
    });

    dialog.afterClosed().pipe(
      filter(x => !!x),
      switchMap(x => {
        return this.invoiceApiService.patchInvoice({body: x});
      })
    ).subscribe((editedInvoice: InvoiceDto) => this.invoiceDataService.updateInvoice(editedInvoice));
  }

  openSplitDialog(invoice: InvoiceDto) {

    const dialog = this.dialog.open(InvoicesSplitDetailModalComponent, {
      width: '800px',
      maxWidth: '95vw',
      maxHeight: '95vh',
      data: {invoice}
    });

    dialog.afterClosed().pipe(
      filter(x => !!x),
      switchMap(x => {
        return this.invoiceApiService.splitInvoice({body: x}).pipe(
          filter(y => !!y)
        );
      })
    ).subscribe((editedInvoices: SplitInvoiceDto) => this.invoiceDataService.updateAndAddInvoice(editedInvoices));
  }
}
