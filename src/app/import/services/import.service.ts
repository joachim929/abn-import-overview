import {Injectable} from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ImportService {

  constructor() {
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
      console.log(XLSX.utils.sheet_to_json(worksheet, {raw: true}));
    };
    fileReader.readAsArrayBuffer(file);
  }

}
