/* tslint:disable */
export interface TransferMutationDto {
  accountNumber: number;
  amount: number;
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
