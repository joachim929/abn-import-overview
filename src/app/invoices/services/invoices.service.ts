import {Injectable} from '@angular/core';
import {InvoiceApiService} from '../../swagger/services/invoice-api.service';
import {Observable} from 'rxjs';
import {InvoiceDto} from '../../swagger/models';
import {map} from 'rxjs/operators';

@Injectable()
export class InvoicesService {

  constructor(
    private invoiceApiService: InvoiceApiService
  ) {
  }

  loadInvoices(): Observable<InvoiceDto[]> {
    return this.invoiceApiService.getInvoicesForUser({userId: 1});
  }

  deleteInvoice(id: number): Observable<null> {
    return this.invoiceApiService.deleteInvoice({id}).pipe(map(x => null));
  }
}
