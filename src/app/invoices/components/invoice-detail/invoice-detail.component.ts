import {Component, Input} from '@angular/core';
import {InvoiceDto} from '../../../swagger/models/invoice-dto';
import {InvoiceDataService} from '../../services/invoice-data.service';
import {InvoiceEditService} from '../../services/invoice-edit.service';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss']
})
export class InvoiceDetailComponent {
  @Input() invoice: InvoiceDto;

  constructor(
    private invoiceDataService: InvoiceDataService,
    private invoiceEditService: InvoiceEditService
  ) {
  }

  patch(invoice: InvoiceDto) {
    this.invoiceEditService.openEditDialog(invoice);
  }

  split(invoice: InvoiceDto) {
    this.invoiceEditService.openSplitDialog(invoice);
  }

  remove(invoiceId: number) {
    this.invoiceDataService.removeInvoice(invoiceId);
  }

}
