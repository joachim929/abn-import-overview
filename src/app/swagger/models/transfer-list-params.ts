/* tslint:disable */
import { TransferMutationDto } from './transfer-mutation-dto';
export interface TransferListParams {
  active?: boolean;
  categoryId?: number;
  count?: number;
  endDate?: string;
  limit?: number;
  maxAmount?: number;
  minAmount?: number;
  orderBy?: string;
  orderDirection?: {  };
  skip?: number;
  startDate?: string;
  transferMutations?: Array<TransferMutationDto>;
}
