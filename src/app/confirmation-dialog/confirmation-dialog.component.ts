import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {
  @Output()
  actionConfirmedEvent = new EventEmitter<boolean>()
  constructor(public dialogReference:MatDialogRef<ConfirmationDialogComponent>) {
  }
public confirm(){
    this.actionConfirmedEvent.emit(true);
}

}
