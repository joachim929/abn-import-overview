/* tslint:disable */
import { TransferMutation } from './transfer-mutation';
export interface Transfer {
  accountNumber: number;
  active: boolean;
  createdAt: string;
  currencyCode: string;
  endBalance: number;
  forced: boolean;
  hash: string;
  id: string;
  mutations: Array<TransferMutation>;
  startBalance: number;
  transactionDate: string;
  updatedAt: string;
  valueDate: string;
}
