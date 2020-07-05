import {Component, OnInit} from '@angular/core';
import {HistoryDataStore} from '../../services/history-data.store';
import {Transfer} from '../../../../swagger/models/transfer';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {filter, tap} from 'rxjs/operators';
import {TransferMutation} from '../../../../swagger/models';

@Component({
  selector: 'app-history-master',
  templateUrl: './history-master.component.html',
  styleUrls: ['./history-master.component.scss']
})
export class HistoryMasterComponent implements OnInit {
  transfer$: Observable<Transfer>;
  selectedMutation: TransferMutation;
  mutationId: number;

  constructor(
    private historyDataService: HistoryDataStore,
    private activatedRoute: ActivatedRoute
  ) {
  }

  /**
   * On click show difference between selected and selectedHistory
   */

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      filter((params) => !!params.has('id'))
    ).subscribe((params) => {
      this.mutationId = Number(params.get('id'));
      this.historyDataService.getTransfer(this.mutationId);
    });

    this.transfer$ = this.historyDataService.transfer$.pipe(
      filter(transfers => !!transfers),
      tap((transfers) => {
        transfers.mutations.map((mutation) => {
          if (mutation.id === this.mutationId) {
            this.selectedMutation = mutation;
          }
        });
      })
    );
  }
}
