import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ExistingTransferDialogComponent} from '../components/existing-transfer-dialog/existing-transfer-dialog.component';
import {RawTransferSerializerDto} from '../../swagger/models/raw-transfer-serializer-dto';
import {take, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExistingTransferService {

  constructor(
    private dialog: MatDialog
  ) { }

  openDialog(existingTransfers: RawTransferSerializerDto[]): Observable<any> {
    const dialog = this.dialog.open(ExistingTransferDialogComponent, {
      width: '800px',
      maxWidth: '95vw',
      maxHeight: '95vh',
      data: existingTransfers
    });

    return dialog.afterClosed().pipe(
      take(1),
      tap(x => console.log(x))
    );
  }
}
