import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  title: string;
  message_insert: string;
  message: string;
  description: string;
  descriptionDetail: string;
  btnLeftDisable: boolean;
  btn_LeftDisable: boolean;
  btnRightDisable: boolean;
  btn_RightDisable: boolean;
  txtBtnLeft: string;
  txtBtnRight: string;
  message1: string;
  message2: string;
  message3: string;
  message4: string;
  message5: string;
  message6: string;
  message7: string;
  message8: string;
  message9: string;
  message10: string;
  message11: string;
  message12: string;
  message13: string;
  message14: string;
  message15: string;

  disabled = false;
  isHiddenDisabled: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel) {

    // Update view with given values
    this.title = data.title;
    this.message_insert = data.message_insert;
    this.message = data.message;
    this.description = data.description;
    this.descriptionDetail = data.descriptionDetail;
    this.btnLeftDisable = data.btnLeftDisable;
    this.btnRightDisable = data.btnRightDisable;
    this.txtBtnLeft = data.txtBtnLeft;
    this.txtBtnRight = data.txtBtnRight;
    this.message1 = data.message1;
    this.message2 = data.message2;
    this.message3 = data.message3;
    this.message4 = data.message4;
    this.message5 = data.message5;
    this.message6 = data.message6;
    this.message7 = data.message7;
    this.message8 = data.message8;
    this.message9 = data.message9;
    this.message10 = data.message10;
    this.message11 = data.message11;
    this.message12 = data.message12;
    this.message13 = data.message13;
    this.message14 = data.message14;
    this.message15 = data.message15;
    this.isHiddenDisabled = data.isHiddenDisabled;


  }

  ngOnInit(): void { }

  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }

}

/**
 * Class to represent confirm dialog model.
 *
 * It has been kept here to keep it as part of shared component.
 **/
export class ConfirmDialogModel {

  constructor(
    public title: string,
    public message: string,
    public description: string,
    public descriptionDetail: string,
    public btnLeftDisable: boolean,
    public btnRightDisable: boolean,
    public txtBtnLeft: string,
    public txtBtnRight: string,
    public message_insert: string,
    public message1: string,
    public message2: string,
    public message3: string,
    public message4: string,
    public message5: string,
    public message6: string,
    public message7: string,
    public message8: string,
    public message9: string,
    public message10: string,
    public message11: string,
    public message12: string,
    public message13: string,
    public message14: string,
    public message15: string,
    public isHiddenDisabled: boolean) { }
}
