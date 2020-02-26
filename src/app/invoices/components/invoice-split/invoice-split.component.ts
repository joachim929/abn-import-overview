import {Component, Input, OnInit} from '@angular/core';
import {InvoiceDto} from '../../../swagger/models/invoice-dto';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomCurrencyPipe} from '../../../shared/pipes/custom-currency.pipe';

@Component({
  selector: 'app-invoice-split',
  templateUrl: './invoice-split.component.html',
  styleUrls: ['./invoice-split.component.scss']
})
export class InvoiceSplitComponent implements OnInit {
  invoice: InvoiceDto;
  splitInvoice: InvoiceDto;
  form = new FormGroup({
    accountNumber: new FormControl(),
    amount: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    startBalance: new FormControl(null, [Validators.required]),
    endBalance: new FormControl(null, [Validators.required]),
    transactionDate: new FormControl(null, [Validators.required])
  });

  @Input() set ocInvoice(invoice: InvoiceDto) {
    this.invoice = invoice;
    this.splitInvoice = {...invoice};
    this.setFormValues();
  }

  constructor(private customCurrencyPipe: CustomCurrencyPipe) {
  }

  ngOnInit(): void {
  }

  private setFormValues() {
    this.form.get('accountNumber').setValue(this.splitInvoice.accountNumber);
    this.form.get('amount').setValue(this.splitInvoice.amount);
    this.form.get('description').setValue(this.splitInvoice.description);
    this.form.get('startBalance').setValue(this.splitInvoice.startBalance);
    this.form.get('endBalance').setValue(this.customCurrencyPipe.transform(this.splitInvoice.endBalance));
    this.form.get('transactionDate').setValue(this.splitInvoice.transactionDate);
  }

}
