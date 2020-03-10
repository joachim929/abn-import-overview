/* tslint:disable */
import { Transfer } from './transfer';
export interface TransferMutation {
  active: boolean;
  amount: number;
  children: Array<TransferMutation>;
  comment: string;
  createdAt: string;
  description: string;
  endBalance: number;
  id: number;
  parent: TransferMutation;
  startBalance: number;
  transfer: Transfer;
  updatedAt: string;
}
