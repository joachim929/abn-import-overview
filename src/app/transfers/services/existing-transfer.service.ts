import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ExistingTransferDialogComponent} from '../components/existing-transfer-dialog/existing-transfer-dialog.component';
import {RawTransferSerializerDto} from '../../swagger/models/raw-transfer-serializer-dto';
import {filter, switchMap, take} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {TransferMutationDto} from '../../swagger/models/transfer-mutation-dto';
import {TransferApiService} from '../../swagger/services';

@Injectable({
  providedIn: 'root'
})
export class ExistingTransferService {

  constructor(
    private dialog: MatDialog,
    private transferApiService: TransferApiService
  ) {
  }

  openDialog(existingTransfers: RawTransferSerializerDto[]): Observable<TransferMutationDto[]> {
    const dialog = this.dialog.open(ExistingTransferDialogComponent, {
      width: '800px',
      maxWidth: '95vw',
      maxHeight: '95vh',
      data: existingTransfers
    });

    return dialog.afterClosed().pipe(
      take(1),
      filter((x => !!x)),
      switchMap((transfersToForce: RawTransferSerializerDto[]) =>
        this.transferApiService.transferControllerPostExisting({body: transfersToForce}))
    );
  }
}
