/* tslint:disable */
export interface CreateInvoiceDto {
  accountNumber: number;
  amount: number;
  categoryId?: number;
  comment?: string;
  description: string;
  endBalance: number;
  mutationCode: string;
  originalId?: number;
  startBalance: number;
  transactionDate?: string;
  userId: number;
  valueDate?: string;
}
