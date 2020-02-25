import {Component, Input, OnInit} from '@angular/core';
import {InvoiceDto} from '../../../swagger/models/invoice-dto';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss']
})
export class InvoiceDetailComponent implements OnInit {
  @Input() invoice: InvoiceDto;

  constructor() { }

  ngOnInit(): void {
  }

}
