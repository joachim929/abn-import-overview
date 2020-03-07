import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {InvoiceDto} from '../../../../swagger/models/invoice-dto';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryDataService} from '../../../../core/services/category-data.service';
import {Observable} from 'rxjs';
import {CategoryGroupDto} from '../../../../swagger/models/category-group-dto';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-invoices-edit-detail-modal',
  templateUrl: './invoices-edit-detail-modal.component.html',
  styleUrls: [
    './invoices-edit-detail-modal.component.scss',
    '../../shared/invoices-dialog.styles.scss'
  ]
})
export class InvoicesEditDetailModalComponent implements OnInit {
  form: FormGroup;
  categories$: Observable<CategoryGroupDto[]>;
  ocInvoice: InvoiceDto;

  constructor(
    public dialogRef: MatDialogRef<InvoicesEditDetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { invoice: InvoiceDto },
    private categoryDataService: CategoryDataService
  ) {
    this.ocInvoice = {...data.invoice};
    this.form = new FormGroup({
      description: new FormControl(this.ocInvoice.description, [Validators.required]),
      comment: new FormControl(this.ocInvoice.comment || null),
      category: new FormControl(this.ocInvoice.categoryId || null)
    });

    this.form.get('description').valueChanges.pipe(
      filter(x => !!x && x.trim().length > 0)
    ).subscribe(next => this.ocInvoice.description = next);

    this.form.get('comment').valueChanges.subscribe(next => this.ocInvoice.comment = next);

    this.form.get('category').valueChanges.subscribe(next => this.ocInvoice.categoryId = next);
  }

  ngOnInit() {
    this.categories$ = this.categoryDataService.categories$;
  }

  save() {
    const patchObject: any = {};
    Object.keys(this.ocInvoice).map(key => !!this.ocInvoice[key] ? patchObject[key] = this.ocInvoice[key] : null);
    this.dialogRef.close((this.form.valid && this.form.dirty && typeof patchObject.id !== 'undefined') ? {
      patch: patchObject
    } : null);
  }

  cancel() {
    this.dialogRef.close();
  }
}
