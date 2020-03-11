/* tslint:disable */
import { TransferMutationDto } from './transfer-mutation-dto';
export interface SplitTransferMutationDto {
  new: TransferMutationDto;
  patch: TransferMutationDto;
}
