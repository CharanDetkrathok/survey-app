import { ConfirmDialogComponent, ConfirmDialogModel } from './../confirm-dialog/confirm-dialog.component';

import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { DateAdapter } from '@angular/material/core';

export enum Languages {
  en = 'en',
  th = 'th'
}

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

  isTH_EN: boolean = true;

  userLoginForm = this.formBuilder.group({
    std_code: [''],
    birth_date: ['']
  });

  userLoginFormEN = this.formBuilder.group({
    std_code_en: [''],
    birth_date_en: ['']
  });

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    public translate: TranslateService,
    private dateAdapter: DateAdapter<Date>) { }


  ngOnInit(): void {

    sessionStorage.clear();

    this.onChange_TH_EN();

    // reload page 1 time
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
    }

  }

  useLanguage(language: Languages): void {
    this.translate.use(language);
    this.dateAdapter.setLocale(language);
  }

  onChange_TH_EN() {

    if (this.isTH_EN === true) {

      // เปลี่ยนภาษาปฏิทิน
      this.useLanguage(Languages.th);

      this.userLoginForm.controls['std_code'].setValue('');
      this.userLoginForm.controls['std_code'].setValidators([Validators.required, Validators.minLength(10)]);
      this.userLoginForm.controls['std_code'].updateValueAndValidity();
      this.userLoginForm.controls['std_code'].enable();
      this.userLoginForm.controls['birth_date'].setValue('');
      this.userLoginForm.controls['birth_date'].setValidators([Validators.required]);
      this.userLoginForm.controls['birth_date'].updateValueAndValidity();
      this.userLoginForm.controls['birth_date'].enable();

      this.userLoginFormEN.controls['std_code_en'].setValue('');
      this.userLoginFormEN.controls['std_code_en'].setValidators([]);
      this.userLoginFormEN.controls['std_code_en'].updateValueAndValidity();
      this.userLoginFormEN.controls['std_code_en'].disable();
      this.userLoginFormEN.controls['birth_date_en'].setValue('');
      this.userLoginFormEN.controls['birth_date_en'].setValidators([]);
      this.userLoginFormEN.controls['birth_date_en'].updateValueAndValidity();
      this.userLoginFormEN.controls['birth_date_en'].disable();
      // this.isTH_EN = false;

    } else {

      // เปลี่ยนภาษาปฏิทิน
      this.useLanguage(Languages.en);

      this.userLoginForm.controls['std_code'].setValue('');
      this.userLoginForm.controls['std_code'].setValidators([]);
      this.userLoginForm.controls['std_code'].updateValueAndValidity();
      this.userLoginForm.controls['std_code'].disable();
      this.userLoginForm.controls['birth_date'].setValue('');
      this.userLoginForm.controls['birth_date'].setValidators([]);
      this.userLoginForm.controls['birth_date'].updateValueAndValidity();
      this.userLoginForm.controls['birth_date'].disable();

      this.userLoginFormEN.controls['std_code_en'].setValue('');
      this.userLoginFormEN.controls['std_code_en'].setValidators([Validators.required, Validators.minLength(10)]);
      this.userLoginFormEN.controls['std_code_en'].updateValueAndValidity();
      this.userLoginFormEN.controls['std_code_en'].enable();
      this.userLoginFormEN.controls['birth_date_en'].setValue('');
      this.userLoginFormEN.controls['birth_date_en'].setValidators([Validators.required]);
      this.userLoginFormEN.controls['birth_date_en'].updateValueAndValidity();
      this.userLoginFormEN.controls['birth_date_en'].enable();
      // this.isTH_EN = true;

    }

  }

  // ---- เอาไว้ Validate การกรอก นักศึกษา Bidding ค่าไป template----//
  get stdCode() { return this.userLoginForm.get('std_code'); }

  get birthDate() { return this.userLoginForm.get('birth_date'); }

  // ---- เอาไว้ Validate การกรอก นักศึกษา Bidding ค่าไป template----//
  get stdCodeEN() { return this.userLoginFormEN.get('std_code_en'); }

  get birthDateEN() { return this.userLoginFormEN.get('birth_date_en'); }

  onSubmit(): void {

    let tempNewDate = this.pipe.transform(this.userLoginForm.get('birth_date').value.toString(), 'MM/dd/yyyy').toString();

    this.userLoginForm.setValue({

      std_code: this.userLoginForm.get('std_code').value,
      birth_date: tempNewDate

    });

    this.STD_CODE = this.userLoginForm.get('std_code').value.toString();
    this.BIRTH_DATE = tempNewDate;

    // console.log(this.STD_CODE);
    // console.log(this.BIRTH_DATE);

    //ทำการ -- calling Login API service -- ///
    this.getCallingApiService();

  }

  onSubmitEN(): void {

    let tempNewDate = this.pipe.transform(this.userLoginFormEN.get('birth_date_en').value.toString(), 'MM/dd/yyyy').toString();

    this.userLoginFormEN.setValue({

      std_code_en: this.userLoginFormEN.get('std_code_en').value.toString(),
      birth_date_en: tempNewDate

    });

    this.STD_CODE = this.userLoginFormEN.get('std_code_en').value.toString();
    this.BIRTH_DATE = tempNewDate

    // console.log(this.STD_CODE);
    // console.log(this.BIRTH_DATE);

    //ทำการ -- calling Login API service -- ///
    this.getCallingApiService();

  }

  async getCallingApiService() {

    if (this.isTH_EN) {

      await this.loginService.httpLogin(this.STD_CODE, this.BIRTH_DATE).subscribe(response => {

        const title = 'ข้อตกลงและเงื่อนไขการใช้งาน';
        const message_insert = '';
        const message = '';
        const description = '';
        const descriptionDetail = 'มหาวิทยาลัยรามคำแหง ขอความร่วมมือผู้สำเร็จการศึกษาทุกท่านที่ขึ้นทะเบียนบัณฑิต  กรอกข้อมูลภาวะการมีงานทำของบัณฑิตระดับปริญญาตรี และระดับบัณฑิตศึกษา';
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

    } else {
      await this.loginService.httpLogin(this.STD_CODE, this.BIRTH_DATE).subscribe(response => {

        const title = 'Terms and Conditions of Use';
        const message_insert = '';
        const message = '';
        const description = '';
        const descriptionDetail = 'Ramkhamhaeng University request for cooperation with all graduates who register graduates to fill the information about employment status of undergraduate and graduate students ';
        const btnLeftDisable = false;
        const btnRightDisable = false;
        const txtBtnLeft = 'Not accept';
        const txtBtnRight = 'Accept';
        const message1 = `Terms and Conditions of Use`;
        const message2 = `Consent form for collection, use and disclosure of personal information`;
        const message3 = `I permit Ramkhamhaeng University, as the data controller of personal information, to collect, use and disclose personal information under the following conditions.`;
        const message4 = `1. Your personal information collected and used by Ramkhamhaeng University receiving when you fill the information in the application process, and during the study, which are complete, accurate, current and quality information will be used for the purposes set out in this announcement only in order to comply with the Personal Data Protection Act 2019.`;
        const message5 = `2. Purpose I permit Ramkhamhaeng University to collect, use and disclose my personal information to be used for internal educational quality assurance in Ramkhamhaeng University of the relevant faculties or departments Element 2 Production of graduates Indicator 2.2 Current working status of bachelor's degree graduates who have been employed or self-employed within 1 year and for preparing the employment status of graduates report and a follow-up for RU graduate students report.`;
        const message6 = ``;
        const message7 = `Notification of permission for collection, use and disclosure of personal information`;
        const message8 = `1. Ramkhamhaeng University will collect, use and disclose personal information for the stated purpose.`;
        const message9 = `2. Personal data’s owners have the following legal rights.`;
        const message10 = `2.1 Right to rectify or change own personal information to be correct, complete and up to date under the rules and regulations of Ramkhamhaeng University`;
        const message11 = `2.2 Right to access or request a certified copy of own personal data or request to disclose of the acquisition of personal information which is not permission.`;
        const message12 = `2.3 Right to acquire own personal information from Ramkhamhaeng University and also request Ramkhamhaeng University to send or transfer personal information to another data controller or ask for personal information that Ramkhamhaeng University sends or transfers to another data controller.`;
        const message13 = `2.4 Right to request Ramkhamhaeng University to disclose of the acquisition of personal information which is not permitted for collection, use or disclosure`;
        const message14 = `2.5 Personal data’s owners have the right to lodge a complaint in case of the company or the personal data processor or employees or contractors of Ramkhamhaeng University who violate the Personal Data Protection Act 2019`;
        const message15 = `I have been informed of the terms and conditions for the collection, use and disclosure of such personal information and agree to the aforementioned conditions in all respects.`;
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
                // this.router.navigate(['/question-naire']);

              } else {

                //-- ไปยังหน้า แบบสำรวจ ป.โท
                // this.router.navigate(['/question-naire-m']);

              }


            } else {

              const title = 'Login Fail';
              const message_insert = '';
              const message = 'Cant login !';
              const description = 'Because no information was found Please enter the information again.';
              const descriptionDetail = 'And check the correctness of the information Before logging in';
              const btnLeftDisable = true;
              const btnRightDisable = false;
              const txtBtnLeft = '';
              const txtBtnRight = 'close';
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

