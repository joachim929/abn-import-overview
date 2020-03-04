/* tslint:disable */
import { FilteredInvoiceDateDto } from './filtered-invoice-date-dto';
import { InvoiceDto } from './invoice-dto';
export interface FilteredInvoiceDto {
  date?: FilteredInvoiceDateDto;
  limit?: number;
  order?: 'Asc' | 'Desc';
  results?: Array<InvoiceDto>;
  start?: number;
  userId?: number;
}
