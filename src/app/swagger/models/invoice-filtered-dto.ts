/* tslint:disable */
import { InvoiceDto } from './invoice-dto';
export interface InvoiceFilteredDto {
  endDate?: string;
  limit?: number;
  maxAmount?: number;
  records?: Array<InvoiceDto>;
  skip?: number;
  start?: number;
  startDate?: string;
}
