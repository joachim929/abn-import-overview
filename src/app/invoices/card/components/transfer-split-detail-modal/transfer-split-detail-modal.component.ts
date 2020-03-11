import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {filter, map} from 'rxjs/operators';
import {CategoryDataService} from '../../../../core/services/category-data.service';
import {Observable} from 'rxjs';
import {CategoryGroupDto} from '../../../../swagger/models/category-group-dto';
import {TransferMutationDto} from '../../../../swagger/models/transfer-mutation-dto';

@Component({
  selector: 'app-transfer-split-detail-modal',
  templateUrl: './transfer-split-detail-modal.component.html',
  styleUrls: [
    './transfer-split-detail-modal.component.scss',
    '../../shared/transfer-dialog.styles.scss'
  ]
})
export class TransferSplitDetailModalComponent implements OnInit {
  form: FormGroup;
  ocInvoice: TransferMutationDto;
  ocAmount: number;
  categories$: Observable<CategoryGroupDto[]>;

  constructor(
    public dialogRef: MatDialogRef<TransferSplitDetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { transferMutation: TransferMutationDto },
    private categoryDataService: CategoryDataService
  ) {
    this.form = new FormGroup({
      id: new FormControl(),
      originalId: new FormControl(this.data.transferMutation.id),
      accountNumber: new FormControl(this.data.transferMutation.accountNumber),
      mutationCode: new FormControl(this.data.transferMutation.currencyCode),
      transactionDate: new FormControl(this.data.transferMutation.transactionDate),
      startBalance: new FormControl(this.data.transferMutation.startBalance),
      endBalance: new FormControl(this.data.transferMutation.endBalance),
      amount: new FormControl(0, [Validators.required]),
      description: new FormControl(this.data.transferMutation.description, [Validators.required]),
      comment: new FormControl(this.data.transferMutation.comment || null, [Validators.required]),
      categoryId: new FormControl(this.data.transferMutation.categoryId || null)
    });

    this.ocInvoice = {...data.transferMutation};
    this.ocAmount = data.transferMutation.amount;

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
