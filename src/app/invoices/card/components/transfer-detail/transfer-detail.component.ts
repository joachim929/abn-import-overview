import {Component, Input} from '@angular/core';
import {InvoiceDto} from '../../../../swagger/models/invoice-dto';
import {TransferDataService} from '../../../services/transfer-data.service';
import {TransferEditService} from '../../../services/transfer-edit.service';
import {CategoryDataService} from '../../../../core/services/category-data.service';
import {BreakpointService} from '../../../../core/services/breakpoint.service';

@Component({
  selector: 'app-transfer-detail',
  templateUrl: './transfer-detail.component.html',
  styleUrls: ['./transfer-detail.component.scss']
})
export class TransferDetailComponent {
  @Input() invoice: InvoiceDto;

  constructor(
    private invoiceDataService: TransferDataService,
    private invoiceEditService: TransferEditService,
    private categoryDataService: CategoryDataService,
    private breakpointService: BreakpointService
  ) {
  }

  get isXSmall(): boolean {
    return this.breakpointService.isXSmall;
  }

  get categories$() {
    return this.categoryDataService.categories$;
  }

  patch(invoice: InvoiceDto) {
    // this.invoiceEditService.openEditDialog(invoice);
  }

  split(invoice: InvoiceDto) {
    // this.invoiceEditService.openSplitDialog(invoice);
  }

  remove(invoiceId: number) {
    // this.invoiceDataService.removeInvoice(invoiceId);
  }

}