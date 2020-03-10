import {Component, OnInit} from '@angular/core';
import {TransferDataService} from '../../services/transfer-data.service';
import {Observable} from 'rxjs';
import {Transfer} from '../../../swagger/models';

@Component({
  selector: 'app-transfers-master',
  templateUrl: './transfers-master.component.html',
  styleUrls: ['./transfers-master.component.scss']
})
export class TransfersMasterComponent implements OnInit {

  constructor(
    private transferDataService: TransferDataService
  ) {
  }

  get transfers$(): Observable<Transfer[]> {
    return this.transferDataService.transfers$;
  }

  ngOnInit(): void {
  }

}
