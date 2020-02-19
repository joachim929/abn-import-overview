/* tslint:disable */
import { User } from './user';
export interface Invoice {
  accountNumber: number;
  amount: number;
  categoryId: number;
  comment: string;
  createdAt: string;
  description: string;
  editedAt: string;
  endBalance: number;
  id: number;
  mutationCode: string;
  originalId: number;
  startBalance: number;
  transactionDate: string;
  user: User;
  userId: number;
  valueDate: string;
}
