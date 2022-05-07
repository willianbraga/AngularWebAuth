import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogComponent } from '../custom-components/shared/dialog/dialog.component';
import { DialogData } from '../interfaces/dialog-data';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: MatDialog) { }

  confirmDialog(data: DialogData): Observable<boolean> {
    return this.dialog
      .open(DialogComponent, {
        data,
        width: '400px',
        disableClose: true,
      })
      .afterClosed();
  }
}
