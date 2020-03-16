import {Component, OnInit} from '@angular/core';
import {HistoryDataService} from '../../services/history-data.service';
import {Transfer} from '../../../../swagger/models/transfer';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {filter, switchMap, tap} from 'rxjs/operators';
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
    private historyDataService: HistoryDataService,
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
