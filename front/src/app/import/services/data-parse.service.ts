import {Injectable} from '@angular/core';
import {DUMMYDATA} from '../dummy-data';
import {Category} from './category.service';

export interface RawData {
  accountNumber: string;
  mutationcode: string;
  transactiondate: string;
  startsaldo: string;
  endsaldo: string;
  amount: string;
  description: string;
}

export interface FormattedData {
  amount: number;
  category?: Category;
  startSaldo: number;
  endSaldo: number;
  description: string;
  transactionDate: Date,
  history?: any[];
}

@Injectable({
  providedIn: 'root'
})
export class DataParseService {
  dummyData = DUMMYDATA;
  formattedData: FormattedData[];

  constructor() {
    console.log('Data parse service constructor');
    this.formatData(this.dummyData);
  }

  formatData(data: RawData[]) {
    this.formattedData = [];

    for (const datum of data) {
      this.formattedData.push(this.formatVariables(datum));
    }
  }

  formatVariables(entry: RawData): FormattedData {
    const _entryDate = {
      year: Number(entry.transactiondate.slice(0, 4)),
      month: Number(entry.transactiondate.slice(4, 6)),
      date: Number(entry.transactiondate.slice(6, 8))
    };
    const entryDate = new Date;
    entryDate.setFullYear(_entryDate.year, _entryDate.month, _entryDate.date);
    return {
      amount: Number(entry.amount),
      description: entry.description,
      category: null,
      startSaldo: Number(entry.startsaldo),
      endSaldo: Number(entry.endsaldo),
      transactionDate: entryDate
    }
  }
}
