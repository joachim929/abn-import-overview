import {Component, Input, OnInit} from '@angular/core';
import {InvoiceDto} from '../../../swagger/models/invoice-dto';
import {InvoiceDataService} from '../../services/invoice-data.service';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss']
})
export class InvoiceDetailComponent implements OnInit {
  @Input() invoice: InvoiceDto;
  splitItem: InvoiceDto;
  editInProgress = false;

  constructor(
    private invoiceDataService: InvoiceDataService
  ) {
  }

  ngOnInit(): void {
  }

  patch(invoice: InvoiceDto) {
    this.editInProgress = !this.editInProgress;
  }

  split(invoice: InvoiceDto) {
    this.splitItem = !this.splitItem ? {...invoice} : undefined;
  }

  remove(invoiceId: number) {
    this.invoiceDataService.removeInvoice(invoiceId);
  }

}
