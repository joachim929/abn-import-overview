import {Component, OnInit} from '@angular/core';
import {AssignTransferDataStore} from '../../services/assign-transfer-data.store';
import {TransferMutationDto} from '../../../../swagger/models/transfer-mutation-dto';
import {Observable} from 'rxjs';
import {CategoryDataStore} from '../../../../core/services/category-data.store';
import {CategoryDto} from '../../../../swagger/models/category-dto';
import {share} from 'rxjs/operators';
import {Location} from '@angular/common';
import {CategoryGroupResource} from '../../../../swagger/models/category-group-resource';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.scss']
})
export class AssignComponent implements OnInit {
  transferMutations$: Observable<TransferMutationDto[]>;
  categories$: Observable<CategoryGroupResource[]>;
  isSaving$: Observable<boolean>;

  constructor(
    private assignTransferDataStore: AssignTransferDataStore,
    private categoryDataStore: CategoryDataStore,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.isSaving$ = this.assignTransferDataStore.getIsSaving$().pipe(share());
    this.transferMutations$ = this.assignTransferDataStore.transferMutations$;
    this.categories$ = this.categoryDataStore.categories$;
  }

  assignCategory(category: CategoryDto, mutation: TransferMutationDto) {
    this.assignTransferDataStore.assignCategory({...mutation, category});
  }

  goBack() {
    this.location.back();
  }
}
