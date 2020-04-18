import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryDataStore} from '../../../../core/services/category-data.store';
import {Observable} from 'rxjs';
import {CategoryGroupDto} from '../../../../swagger/models/category-group-dto';
import {filter} from 'rxjs/operators';
import {TransferMutationDto} from '../../../../swagger/models/transfer-mutation-dto';

@Component({
  selector: 'app-transfer-edit-detail-modal',
  templateUrl: './transfer-edit-detail-modal.component.html',
  styleUrls: [
    './transfer-edit-detail-modal.component.scss',
    '../../../card/shared/transfer-dialog.styles.scss'
  ]
})
export class TransferEditDetailModalComponent implements OnInit {
  form: FormGroup;
  categories$: Observable<CategoryGroupDto[]>;
  ocTransferMutation: TransferMutationDto;

  constructor(
    public dialogRef: MatDialogRef<TransferEditDetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { transferMutation: TransferMutationDto },
    private categoryDataService: CategoryDataStore
  ) {
    this.ocTransferMutation = {...data.transferMutation};
    this.form = new FormGroup({
      description: new FormControl(this.ocTransferMutation.description, [Validators.required]),
      comment: new FormControl(this.ocTransferMutation.comment || null),
      category: new FormControl(this.ocTransferMutation.categoryId || null)
    });

    this.form.get('description').valueChanges.pipe(
      filter(x => !!x && x.trim().length > 0)
    ).subscribe(next => this.ocTransferMutation.description = next);

    this.form.get('comment').valueChanges.subscribe(next => this.ocTransferMutation.comment = next);

    this.form.get('category').valueChanges.subscribe(next => this.ocTransferMutation.categoryId = next);
  }

  ngOnInit() {
    this.categories$ = this.categoryDataService.categories$;
  }

  save() {
    const patchObject: any = {};
    Object.keys(this.ocTransferMutation)
      .map(key => !!this.ocTransferMutation[key] ? patchObject[key] = this.ocTransferMutation[key] : null);

    this.dialogRef.close((this.form.valid && this.form.dirty && typeof patchObject.id !== 'undefined') ? patchObject : null);
  }

  cancel() {
    this.dialogRef.close();
  }
}
