import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {InvoiceDto} from '../../../swagger/models/invoice-dto';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-invoices-split-detail-modal',
  templateUrl: './invoices-split-detail-modal.component.html',
  styleUrls: ['./invoices-split-detail-modal.component.scss']
})
export class InvoicesSplitDetailModalComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<InvoicesSplitDetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { invoice: InvoiceDto }
  ) {
    this.form = new FormGroup({
      id: new FormControl(),
      originalId: new FormControl(this.data.invoice.originalId),
      accountNumber: new FormControl(this.data.invoice.accountNumber),
      mutationCode: new FormControl(this.data.invoice.mutationCode),
      transactionDate: new FormControl(this.data.invoice.transactionDate),
      startBalance: new FormControl(this.data.invoice.startBalance),
      endBalance: new FormControl(this.data.invoice.endBalance),
      amount: new FormControl(0),
      description: new FormControl(this.data.invoice.description),
      comment: new FormControl(this.data.invoice.comment || null),
      categoryId: new FormControl(this.data.invoice.categoryId || null),
      userId: new FormControl(this.data.invoice.userId || null)
    });
  }

}
