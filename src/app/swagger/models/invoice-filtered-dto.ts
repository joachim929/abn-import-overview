/* tslint:disable */
import { InvoiceDto } from './invoice-dto';
export interface InvoiceFilteredDto {
  endDate?: string;
  limit?: number;
  maxAmount?: number;
  minAmount?: number;
  order?: 'ASC' | 'DESC';
  records?: Array<InvoiceDto>;
  skip?: number;
  startDate?: string;
}
