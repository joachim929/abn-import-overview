/* tslint:disable */
import { Transfer } from './transfer';
export interface TransferMutation {
  active: boolean;
  amount: number;
  children: Array<TransferMutation>;
  comment: string;
  createdAt: string;
  description: string;
  id: number;
  parent: TransferMutation;
  transfer: Transfer;
  updatedAt: string;
}
