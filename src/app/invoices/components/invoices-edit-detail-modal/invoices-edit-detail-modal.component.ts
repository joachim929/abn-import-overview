import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {InvoiceDto} from '../../../swagger/models/invoice-dto';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryDataService} from '../../../core/services/category-data.service';

@Component({
  selector: 'app-invoices-edit-detail-modal',
  templateUrl: './invoices-edit-detail-modal.component.html',
  styleUrls: ['./invoices-edit-detail-modal.component.scss']
})
export class InvoicesEditDetailModalComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<InvoicesEditDetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { invoice: InvoiceDto },
    private categoryDataService: CategoryDataService
  ) {
    this.form = new FormGroup({
      description: new FormControl(this.data.invoice.description, [Validators.required]),
      comment: new FormControl(this.data.invoice.comment || null),
      category: new FormControl(this.data.invoice.categoryId || null)
    });
  }

  onNoClick(): void {
    console.log(this.data);
    this.dialogRef.close();
  }
}
