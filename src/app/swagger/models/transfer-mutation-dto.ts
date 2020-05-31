/* tslint:disable */
import { CategoryDto } from './category-dto';
export interface TransferMutationDto {
  accountNumber: number;
  amount: number;
  category: CategoryDto;
  categoryId?: number;
  comment?: string;
  currencyCode: string;
  description: string;
  endBalance: number;
  id: string;
  mutationId?: number;
  startBalance: number;
  transactionDate: string;
  valueDate: string;
}
