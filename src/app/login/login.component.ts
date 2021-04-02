import { ConfirmDialogComponent, ConfirmDialogModel } from './../confirm-dialog/confirm-dialog.component';

import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  // -- เอาไว้เปลี่ยน format เป็น 'MM/dd/yyyy' -- //
  pipe = new DatePipe('en-US');

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

        //-- ส่งไปยังหน้า แบบสำรวจ
        if (response.LEV_ID == '1') {

          //-- ไปยังหน้า แบบสำรวจ ป.ตรี
          this.router.navigate(['/question-naire']);

        } else {

          //-- ไปยังหน้า แบบสำรวจ ป.โท

        }


      } else {

        const title = 'Login Fail';
        const message = 'ไม่สามารถเข้า สู่ระบบได้ !';
        const description = 'เนื่องจากไม่พบข้อมูล กรุณากรอกข้อมูลใหม่อีกครั้ง';
        const descriptionDetail = 'และทำการตรวจสอบความถูกต้องของข้อมูล ก่อนเข้าสู่ระบบ';
        const btnLeftDisable = true;
        const btnRightDisable = false;
        const txtBtnLeft = '';
        const txtBtnRight = 'CLOSE';
        const dialogData = new ConfirmDialogModel(title, message, description, descriptionDetail, btnLeftDisable, btnRightDisable, txtBtnLeft, txtBtnRight);
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
          data: dialogData
        });

        dialogRef.afterClosed().subscribe(dialogResult => {

          this.dialog_confirm_result = dialogResult;
          if (this.dialog_confirm_result) {

            this.router.navigate(['/login']);

          }

        });

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

