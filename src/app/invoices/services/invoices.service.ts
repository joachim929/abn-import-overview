import {Injectable} from '@angular/core';
import {InvoiceApiService} from '../../swagger/services/invoice-api.service';
import {Observable, of, Subscriber} from 'rxjs';
import {InvoiceDto} from '../../swagger/models';
import {map, tap} from 'rxjs/operators';
import * as XLSX from 'xlsx';

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

  xlsToJson(file) {
    return new Observable((observer: Subscriber<any[]>): void => {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const arrayBuffer: any = fileReader.result;
        const data = new Uint8Array(arrayBuffer);
        const arr = [];
        for (let i = 0; i !== data.length; ++i) {
          arr[i] = String.fromCharCode(data[i]);
        }
        const bstr = arr.join('');
        const workbook = XLSX.read(bstr, {type: 'binary'});
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const json = XLSX.utils.sheet_to_json(worksheet, {raw: true}) as string[];
        setTimeout(() => this.invoiceApiService.postInvoiceMultiExcel({body: json}).subscribe((next) => {
          observer.next(next);
          observer.complete();
        }));
      };
      fileReader.readAsArrayBuffer(file);
      fileReader.onerror = (error): void => {
        observer.error(error);
      };
    });
  }
}
