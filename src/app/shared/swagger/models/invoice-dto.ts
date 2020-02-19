/* tslint:disable */
export interface InvoiceDto {
  accountNumber: number;
  amount: number;
  categoryId?: number;
  description?: string;
  endBalance: number;
  id: number;
  mutationCode: string;
  originalId?: number;
  startBalance: number;
  transactionDate: string;
  userId: number;
}
