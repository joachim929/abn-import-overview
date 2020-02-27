import {Component, Input, OnInit} from '@angular/core';
import {InvoiceDto} from '../../../swagger/models/invoice-dto';
import {InvoiceDataService} from '../../services/invoice-data.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss']
})
export class InvoiceDetailComponent implements OnInit {
  @Input() invoice: InvoiceDto;
  splitItem: InvoiceDto;
  editInProgress = false;
  form = new FormGroup({
    description: new FormControl(),
    comment: new FormControl()
  });

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
    this.invoiceDataService.openDialog();
  }

  remove(invoiceId: number) {
    this.invoiceDataService.removeInvoice(invoiceId);
  }

}
