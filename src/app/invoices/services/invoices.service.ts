import {Injectable} from '@angular/core';
import {InvoiceApiService} from '../../swagger/services/invoice-api.service';
import {Observable} from 'rxjs';
import {InvoiceDto} from '../../swagger/models';

@Injectable()
export class InvoicesService {

  constructor(
    private invoiceApiService: InvoiceApiService
  ) {
  }

  loadInvoices(): Observable<InvoiceDto[]> {
    return this.invoiceApiService.getInvoicesForUser({userId: 1});
  }
}
