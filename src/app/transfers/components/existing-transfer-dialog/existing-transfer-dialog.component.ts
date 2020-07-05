import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {RawTransferSerializerDto} from '../../../swagger/models/raw-transfer-serializer-dto';
import {CategoryDataStore} from '../../../core/services/category-data.store';
import {CategoryGroupDto} from '../../../swagger/models/category-group-dto';
import {Observable, Subject} from 'rxjs';
import {FormControl, Validators} from '@angular/forms';
import {filter, takeUntil, tap} from 'rxjs/operators';

@Component({
  selector: 'app-existing-transfer-dialog',
  templateUrl: './existing-transfer-dialog.component.html',
  styleUrls: ['./existing-transfer-dialog.component.scss']
})
export class ExistingTransferDialogComponent implements OnInit {
  control = new FormControl(null, [Validators.required]);
  selectAllControl = new FormControl();
  categories$: Observable<CategoryGroupDto[]>;
  showList = false;
  unSub = new Subject<void>();

  constructor(
    public dialogRef: MatDialogRef<ExistingTransferDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RawTransferSerializerDto[],
    private categoryDataStore: CategoryDataStore
  ) {
  }

  ngOnInit(): void {

    this.dialogRef.backdropClick().pipe(
      takeUntil(this.unSub)
    ).subscribe(() => this.unSub.next());

    this.selectAllControl.valueChanges.pipe(
      takeUntil(this.unSub),
      filter((value) => value !== null),
      tap((value) => value.length > 0 ? this.control.setValue(this.data, {emitEvent: false}) : this.control.reset(null, {emitEvent: false}))
    ).subscribe();

    this.categories$ = this.categoryDataStore.categories$;

    this.control.valueChanges.pipe(
      takeUntil(this.unSub),
      filter((value) => !!value && value.length > 0),
      tap((value) => this.selectAllControl.reset())
    ).subscribe();
  }

  cancel(): void {
    this.dialogRef.close();
    this.unSub.next();
  }

  compareFn(c1: RawTransferSerializerDto, c2: RawTransferSerializerDto): boolean {
    return c1 === c2;
  }

  toggleList(): void {
    this.showList = !this.showList;
  }

  uploadSelected(): void {
    this.dialogRef.close(this.control.value);
    this.unSub.next();
  }
}
