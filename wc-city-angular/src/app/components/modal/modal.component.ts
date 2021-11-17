import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>) {

    }

  ngOnInit(): void {
  }

  cancelar() {
    const event = new CustomEvent('angular-rightbar', { detail: { name: 'Solange' } });
    window.dispatchEvent(event);
    this.dialogRef.close();
  }

}
