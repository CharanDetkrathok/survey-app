
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  // -- เอาไว้เปลี่ยน format เป็น 'MM/dd/yyyy' -- //
  pipe = new DatePipe('en-US');
  dateNewFormat = new Date();

  STD_CODE: string;
  BIRTH_DATE: string;
  dialog_confirm_result: string;

  userLoginForm = this.formBuilder.group({
    std_code: ['', [Validators.required, Validators.minLength(10)]],
    birth_date: ['', [Validators.required]]
  });

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void { sessionStorage.clear(); }

  // ---- เอาไว้ Validate การกรอก นักศึกษา Bidding ค่าไป template----//
  get stdCode() { return this.userLoginForm.get('std_code'); }

  get birthDate() { return this.userLoginForm.get('birth_date'); }

  onSubmit(): void {

    let tempNewDate = this.pipe.transform(this.userLoginForm.get('birth_date').value.toString(), 'MM/dd/yyyy').toString();

    this.userLoginForm.setValue({

      std_code: this.userLoginForm.get('std_code').value,
      birth_date: tempNewDate

    });

    this.STD_CODE = this.userLoginForm.get('std_code').value.toString();
    this.BIRTH_DATE = tempNewDate;

    //ทำการ -- calling Login API service -- ///
    this.getCallingApiService();

  }

  async getCallingApiService() {

    await this.loginService.httpLogin(this.STD_CODE, this.BIRTH_DATE).subscribe(response => {

      if (response.error_message_status == 1) {

        sessionStorage.setItem('userSessionStorage', JSON.stringify(response));
        sessionStorage.setItem('loginSuccessesSessionStorage', JSON.stringify(response.STD_CODE));

        this.router.navigate(['/question-naire']);

      } else {

        this.dialog.open(DialogAlert);

      }

    }, error => {

      sessionStorage.setItem('loginUnSuccessesSessionStorage', error.status);
      this.handlesErrors(error.status);

    });
  }

  public handlesErrors(_handle_error: any): void {

    if (_handle_error == 404) {

      this.router.navigate(['/errors-handles/error-not-found']);

    } else if (_handle_error == 500) {

      this.router.navigate(['/errors-handles/error-internal-server']);

    } else {

      this.router.navigate(['/errors-handles/error-another']);

    }

  }

}

@Component({
  selector: 'dialog-alert',
  templateUrl: 'dialog-alert.html',
})
export class DialogAlert {

  constructor(public dialogRef: MatDialogRef<LoginComponent>) { }

  close(): void {
    this.dialogRef.close(false);
  }
}
