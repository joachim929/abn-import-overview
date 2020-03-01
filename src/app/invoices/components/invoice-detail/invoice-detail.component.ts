import {Component, Input} from '@angular/core';
import {InvoiceDto} from '../../../swagger/models/invoice-dto';
import {InvoiceDataService} from '../../services/invoice-data.service';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss']
})
export class InvoiceDetailComponent {
  @Input() invoice: InvoiceDto;

  constructor(
    private invoiceDataService: InvoiceDataService
  ) {
  }

  patch(invoice: InvoiceDto) {
    this.invoiceDataService.openEditDialog(invoice);
  }

  split(invoice: InvoiceDto) {
    this.invoiceDataService.openSplitDialog(invoice);
  }

  remove(invoiceId: number) {
    this.invoiceDataService.removeInvoice(invoiceId);
  }

}
