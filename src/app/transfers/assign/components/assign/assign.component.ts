import {Component, OnInit} from '@angular/core';
import {AssignTransferDataStore} from '../../services/assign-transfer-data.store';
import {TransferMutationDto} from '../../../../swagger/models/transfer-mutation-dto';
import {Observable} from 'rxjs';
import {CategoryGroupDto} from '../../../../swagger/models/category-group-dto';
import {CategoryDataStore} from '../../../../core/services/category-data.store';
import {CategoryDto} from '../../../../swagger/models/category-dto';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.scss']
})
export class AssignComponent implements OnInit {
  transferMutations$: Observable<TransferMutationDto[]>;
  categories$: Observable<CategoryGroupDto[]>;

  constructor(
    private assignTransferDataStore: AssignTransferDataStore,
    private categoryDataStore: CategoryDataStore
  ) {
  }

  ngOnInit(): void {
    this.assignTransferDataStore.loadInit();
    this.transferMutations$ = this.assignTransferDataStore.transferMutations$;
    this.categories$ = this.categoryDataStore.categories$;
  }

  assignCategory(category: CategoryDto, mutation: TransferMutationDto) {
  }

}
