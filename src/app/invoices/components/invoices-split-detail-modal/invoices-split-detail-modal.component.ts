import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {InvoiceDto} from '../../../swagger/models/invoice-dto';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {filter, map} from 'rxjs/operators';
import {CategoryDataService} from '../../../core/services/category-data.service';
import {Observable} from 'rxjs';
import {CategoryGroupDto} from '../../../swagger/models/category-group-dto';

export interface InvoicesSplitDetail {
  ocInvoice: InvoiceDto;
  splitInvoice: InvoiceDto;
}

@Component({
  selector: 'app-invoices-split-detail-modal',
  templateUrl: './invoices-split-detail-modal.component.html',
  styleUrls: [
    './invoices-split-detail-modal.component.scss',
    '../../shared/invoices-dialog.styles.scss'
  ]
})
export class InvoicesSplitDetailModalComponent implements OnInit {
  form: FormGroup;
  ocInvoice: InvoiceDto;
  ocAmount: number;
  categories$: Observable<CategoryGroupDto[]>;

  constructor(
    public dialogRef: MatDialogRef<InvoicesSplitDetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { invoice: InvoiceDto },
    private categoryDataService: CategoryDataService
  ) {
    this.form = new FormGroup({
      id: new FormControl(),
      originalId: new FormControl(this.data.invoice.originalId),
      accountNumber: new FormControl(this.data.invoice.accountNumber),
      mutationCode: new FormControl(this.data.invoice.mutationCode),
      transactionDate: new FormControl(this.data.invoice.transactionDate),
      startBalance: new FormControl(this.data.invoice.startBalance),
      endBalance: new FormControl(this.data.invoice.endBalance),
      amount: new FormControl(0, [Validators.required]),
      description: new FormControl(this.data.invoice.description, [Validators.required]),
      comment: new FormControl(this.data.invoice.comment || null, [Validators.required]),
      categoryId: new FormControl(this.data.invoice.categoryId || null),
      userId: new FormControl(this.data.invoice.userId || null)
    });

    this.ocInvoice = {...data.invoice};
    this.ocAmount = data.invoice.amount;

    this.form.get('amount').valueChanges
      .pipe(map(x => Number(x)),
        filter(x => !!Number(x)))
      .subscribe((next) => {
        this.ocInvoice.amount = this.ocAmount - next;
      });
  }

  ngOnInit() {
    this.categories$ = this.categoryDataService.categories$;
  }

  save() {
    if (this.form.valid) {
      this.ocInvoice.amount = Number(this.ocInvoice.amount);
      const split = this.form.value;
      split.amount = Number(split.amount);

      this.dialogRef.close({
        patch: this.ocInvoice,
        split
      });
    } else {
      this.dialogRef.close();
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
