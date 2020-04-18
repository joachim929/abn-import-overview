import {Component, Input} from '@angular/core';
import {TransferDataStore} from '../../../services/transfer-data.store';
import {TransferEditService} from '../../../services/transfer-edit.service';
import {CategoryDataStore} from '../../../../core/services/category-data.store';
import {BreakpointService} from '../../../../core/services/breakpoint.service';
import {TransferMutationDto} from '../../../../swagger/models/transfer-mutation-dto';

@Component({
  selector: 'app-transfer-detail',
  templateUrl: './transfer-detail.component.html',
  styleUrls: ['./transfer-detail.component.scss']
})
export class TransferDetailComponent {
  @Input() transferMutation: TransferMutationDto;

  constructor(
    private transferDataService: TransferDataStore,
    private transferEditService: TransferEditService,
    private categoryDataService: CategoryDataStore,
    private breakpointService: BreakpointService
  ) {
  }

  get isXSmall(): boolean {
    return this.breakpointService.isXSmall;
  }

  get categories$() {
    return this.categoryDataService.categories$;
  }

  patch(transferMutation: TransferMutationDto) {
    this.transferEditService.openEditDialog(transferMutation);
  }

  split(transferMutation: TransferMutationDto) {
    this.transferEditService.openSplitDialog(transferMutation);
  }

  remove(transferMutationId: number) {
    this.transferDataService.removeInvoice(transferMutationId);
  }
}
