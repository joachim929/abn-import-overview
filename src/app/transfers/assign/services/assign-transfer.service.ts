import {Injectable} from '@angular/core';
import {TransferMutationApiService} from '../../../swagger/services';

@Injectable()
export class AssignTransferService {

  constructor(private apiService: TransferMutationApiService) {
  }

}
