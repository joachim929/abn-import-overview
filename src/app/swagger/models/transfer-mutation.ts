/* tslint:disable */
import { Category } from './category';
import { Transfer } from './transfer';
export interface TransferMutation {
  active: boolean;
  amount: number;
  category: Category;
  children: Array<TransferMutation>;
  comment?: string;
  createdAt: string;
  description: string;
  editedAt: string;
  id: string;
  parent: TransferMutation;
  transfer: Transfer;
}
