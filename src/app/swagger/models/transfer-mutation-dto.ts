/* tslint:disable */
import { CategoryDto } from './category-dto';
export interface TransferMutationDto {
  accountNumber: number;
  amount: number;
  category: CategoryDto;
  comment?: string;
  currencyCode: string;
  description: string;
  endBalance: number;
  id: string;
  mutationId?: string;
  startBalance: number;
  transactionDate: string;
  valueDate: string;
}
