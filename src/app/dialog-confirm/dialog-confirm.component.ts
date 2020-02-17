import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<DialogConfirmComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }


    // tslint:disable-next-line:typedef
    ngOnInit() {
  }

}
