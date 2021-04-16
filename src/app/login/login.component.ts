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

      const title = 'ข้อตกลงและเงื่อนไขการใช้งาน';
      const message_insert = '';
      const message = '';
      const description = '';
      const descriptionDetail = '';
      const btnLeftDisable = false;
      const btnRightDisable = false;
      const txtBtnLeft = 'ไม่ยอมรับ';
      const txtBtnRight = 'ยอมรับ';
      const message1 = `ข้อตกลงและเงื่อนไขการใช้งาน`;
      const message2 = `แบบแสดงความยินยอมในการเก็บ ใช้ และเปิดเผยข้อมูลส่วนบุคคล`;
      const message3 = `ข้าพเจ้ายินยอมให้มหาวิทยาลัยรามคำแหง ในฐานะผู้ควบคุมข้อมูลส่วนบุคคลกระทำการเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคลภายใต้เงื่อนไขดังต่อไปนี้`;
      const message4 = `๑. ข้อมูลที่จัดเก็บและใช้โดยมหาวิทยาลัยรามคำแหงข้อมูลส่วนบุคคลของท่านที่มหาวิทยาลัยรามคำแหงได้รับมาจากการกรอกข้อมูลในขั้นตอนการสมัคร และในระหว่างศึกษา ที่เป็นข้อมูลที่มีความสมบูรณ์ ถูกต้อง เป็นปัจจุบันและมีคุณภาพ จะถูกนำไปใช้ให้เป็นไปตามวัตถุประสงค์ที่กำหนดไว้ตามหนังสือนี้เท่านั้น เพื่อให้เป็นไปตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ.๒๕๖๒`;
      const message5 = `๒. วัตถุประสงค์ข้าพเจ้ายินยอมให้มหาวิทยาลัยรามคำแหงทำการจัดเก็บ ใช้ และเปิดเผยข้อมูลส่วนบุคคลของข้าพเจ้า เพื่อใช้ประกอบการตรวจประกันคุณภาพการศึกษาภายใน มหาวิทยาลัยรามคำแหงของคณะหรือหน่วยงานที่เกี่ยวข้อง องค์ประกอบที่ ๒ การผลิตบัณฑิต ตัวบ่งชี้ที่ ๒.๒ สถานภาพการทำงานปัจจุบันของบัณฑิตปริญญาตรีที่ได้งานทำหรือประกอบอาชีพอิสระภายใน ๑ ปี และเพื่อจัดทำรายงานภาวะการมีงานทำของบัณฑิต และรายงานการติดตามผลผู้สำเร็จการศึกษาระดับบัณฑิตศึกษา มหาวิทยาลัยรามคำแหง`;
      const message6 = ``;
      const message7 = `คำชี้แจงเกี่ยวกับการแสดงความยินยอมในการเก็บ ใช้ และเปิดเผยข้อมูลส่วนบุคคล`;
      const message8 = `๑. มหาวิทยาลัยรามคําแหงจะเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคลภายใต้วัตถุประสงค์ที่ได้แจ้งไว้`;
      const message9 = `๒. เจ้าของข้อมูลส่วนบุคคลมีสิทธิตามกฎหมายดังต่อไปนี้`;
      const message10 = `๒.๑ สิทธิในการแก้ไขหรือเปลี่ยนแปลงข้อมูลส่วนบุคคลของตนเองให้ถูกต้องสมบูรณ์เป็นปัจจุบันภายใต้ข้อบังคับ และระเบียบของมหาวิทยาลัยรามคําแหง`;
      const message11 = `๒.๒ สิทธิในการเข้าถึงหรือขอรับรองสำเนาถูกต้องเกี่ยวกับข้อมูลส่วนบุคคลของตนหรือขอให้เปิดเผยถึงการได้มา ซึ่งข้อมูลส่วนบุคคลที่ตนไม่ได้ให้ความยินยอม`;
      const message12 = `๒.๓ สิทธิในการขอรับข้อมูลส่วนบุคคลที่เกี่ยวกับตนจากมหาวิทยาลัยรามคําแหง รวมทั้งขอให้มหาวิทยาลัยรามคําแหงส่งหรือโอนข้อมูลส่วนบุคคลไปยังผู้ควบคุมข้อมูลส่วนบุคคลอื่นหรือขอรับข้อมูลส่วนบุคคลที่มหาวิทยาลัยรามคําแหงส่งหรือโอนให้กับผู้ควบคุมข้อมูลส่วนบุคคลอื่น`;
      const message13 = `๒.๔ สิทธิในการขอให้มหาวิทยาลัยรามคําแหงเปิดเผยถึงการได้มาซึ่งข้อมูลส่วนบุคคลที่เกี่ยวกับตน ในขณะที่ตนไม่ได้ให้ความยินยอมในการเก็บรวบรวม ใช้ หรือเปิดเผย`;
      const message14 = `๒.๕ เจ้าของข้อมูลส่วนบุคคลมีสิทธิร้องเรียน ในกรณีที่บริษัทหรือผู้ประมวลผลข้อมูลส่วนบุคคล หรือลูกจ้าง หรือผู้รับจ้างของมหาวิทยาลัยรามคําแหงฝ่าฝืนไม่ปฏิบัติตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ.๒๕๖๒`;
      const message15 = `ข้าพเจ้าได้รับทราบถึงข้อตกลงและเงื่อนไขการเก็บ ใช้ และเปิดเผยข้อมูลส่วนบุคคล ดังกล่าว และยินยอมตามเงื่อนไขดังกล่าวทุกประการ`;
      const isHiddenDisabled = false;

      const dialogData = new ConfirmDialogModel(title, message, description, descriptionDetail, btnLeftDisable, btnRightDisable, txtBtnLeft, txtBtnRight, message_insert, message1,
        message2,
        message3,
        message4,
        message5,
        message6,
        message7,
        message8,
        message9,
        message10,
        message11,
        message12,
        message13,
        message14,
        message15,
        isHiddenDisabled);
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: dialogData
      });

      dialogRef.afterClosed().subscribe(dialogResult => {

        this.dialog_confirm_result = dialogResult;
        if (this.dialog_confirm_result) {

          if (response.error_message_status == 1) {

            sessionStorage.setItem('userSessionStorage', JSON.stringify(response));
            sessionStorage.setItem('loginSuccessesSessionStorage', JSON.stringify(response.STD_CODE));

            //-- ส่งไปยังหน้า แบบสำรวจ
            if (response.LEV_ID == '1') {

              //-- ไปยังหน้า แบบสำรวจ ป.ตรี
              this.router.navigate(['/question-naire']);

            } else {

              //-- ไปยังหน้า แบบสำรวจ ป.โท
              this.router.navigate(['/question-naire-m']);

            }


          } else {

            const title = 'Login Fail';
            const message_insert = '';
            const message = 'ไม่สามารถเข้า สู่ระบบได้ !';
            const description = 'เนื่องจากไม่พบข้อมูล กรุณากรอกข้อมูลใหม่อีกครั้ง';
            const descriptionDetail = 'และทำการตรวจสอบความถูกต้องของข้อมูล ก่อนเข้าสู่ระบบ';
            const btnLeftDisable = true;
            const btnRightDisable = false;
            const txtBtnLeft = '';
            const txtBtnRight = 'ปิด';
            const message1 = '';
            const message2 = '';
            const message3 = '';
            const message4 = '';
            const message5 = '';
            const message6 = '';
            const message7 = '';
            const message8 = '';
            const message9 = '';
            const message10 = '';
            const message11 = '';
            const message12 = '';
            const message13 = '';
            const message14 = '';
            const message15 = '';
            const isHiddenDisabled = true;
            const dialogData = new ConfirmDialogModel(title, message, description, descriptionDetail, btnLeftDisable, btnRightDisable, txtBtnLeft, txtBtnRight, message_insert, message1,
              message2,
              message3,
              message4,
              message5,
              message6,
              message7,
              message8,
              message9,
              message10,
              message11,
              message12,
              message13,
              message14,
              message15,
              isHiddenDisabled);
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

        }

      });



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

