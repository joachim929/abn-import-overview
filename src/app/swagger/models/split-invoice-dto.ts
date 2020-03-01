/* tslint:disable */
import { InvoiceDto } from './invoice-dto';
export interface SplitInvoiceDto {
  patch: InvoiceDto;
  split: InvoiceDto;
}
