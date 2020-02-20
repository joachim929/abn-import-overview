import {Injectable} from '@angular/core';
import * as XLSX from 'xlsx';
import {InvoiceService} from '../../swagger/services/invoice.service';

@Injectable({
  providedIn: 'root'
})
export class ImportService {

  constructor(
    private invoiceService: InvoiceService
  ) {
  }

  xlsToJson(file) {
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
      const json = XLSX.utils.sheet_to_json(worksheet, {raw: true});
      this.postJson(json);
    };
    fileReader.readAsArrayBuffer(file);
  }

  test() {
    this.invoiceService.getInvoicesForUser({userId: 1}).subscribe((next) => console.log(next));
  }

  postJson(json) {
    console.log(json);
    this.invoiceService.postInvoiceMultiExcel({body: json}).subscribe((next) => {
      console.log(next);
    });
  }

}
