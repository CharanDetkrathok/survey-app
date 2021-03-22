import { Router } from '@angular/router';
import { ConfirmDialogModel, ConfirmDialogComponent } from './../confirm-dialog/confirm-dialog.component';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { QuestionNaireService } from '../services/question-naire.service';
import { userResponseDataInterface } from './../login/user-response-data';
import { MatDialog } from '@angular/material/dialog';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-question-naire',
  templateUrl: './question-naire.component.html',
  styleUrls: ['./question-naire.component.css']
})
export class QuestionNaireComponent implements OnInit {

  preUserData: userResponseDataInterface;

  questionValueForm = this.formBuilder.group({
    STD_CODE: ['', [Validators.required, Validators.minLength(10)]],
    PRENAME_NO: [''],
    FIRST_NAME_THAI: [''],
    LAST_NAME_THAI: [''],
    AGE: [''],
    GENDER_NO: [''],
    FACULTY_NO: [''],
    MAJOR_NO: [''],
    STD_TYPE: [''],
    STD_STUDY_TIME: [''],
    STD_FUND: [''],
    BE_WORK_STATUS: [''],
    BE_WORK_STATUS_TXT: [''],
    QN_WORK_STATUS: [''],
    QN_WORK_STATUS_NO_TXT: [''],
    QN_WORK_STATUS_ED_TXT: [''],
    QN_OCCUP_TYPE: [''],
    QN_OCCUP_TYPE_TXT: [''],
    QN_SALARY: [''],
    QN_WORK_SALARY: [''],
    QN_WORK_NAME: [''],
    QN_WORK_NO: [''],
    QN_WORK_MOO: [''],
    QN_WORK_BUILDING: [''],
    QN_WORK_FLOOR: [''],
    QN_WORK_SOI: [''],
    QN_WORK_STREET: [''],
    QN_WORK_TAMBON: [''],
    QN_WORK_AMPHUR: [''],
    QN_WORK_PROVINCE_NO: [''],
    QN_WORK_ZIPCODE: [''],
    QN_WORK_TEL: [''],
    QN_WORK_FAX: [''],
    QN_WORK_URL: [''],
    AF_FIND_WORK: [''],
    QN_MATCH_EDU: [''],
    QN_WORK_APPLY: [''],
    QN_EMPLOYER: [''],
    QN_AWARD: [''],
    QN_AWARD_TXT: [''],
    QN_AWARD_INSTITUTE: [''],
    QN_AWARD_MMYYYY: [''],
    QN_ADDPROGRAM2: [''],
    QN_ADDPROGRAM1: [''],
    QN_ADDPROGRAM3: [''],
    QN_ADDPROGRAM4: [''],
    QN_ADDPROGRAM5: [''],
    QN_ADDPROGRAM6: [''],
    QN_COMMENT_PROGRAM: [''],
    QN_COMMENT_LEARN: [''],
    QN_COMMENT_SOCIAL: [''],
    QN_COMMENT_ACTIVITY: [''],
    QN_COMMENT_LOCATION: [''],
    QN_DATE_UPDATE: [''],
  });

  MAJOR_NAME_THAI: string;
  FACULTY_NAME_THAI: string;

  dialog_confirm_result: string = '';

  QUIZ_HEADER: string;

  SECTION_NAME_ID_1: string;
  SECTION_NAME_ID_2: string;
  SECTION_NAME_ID_3: string;

  QUESTION_DETAIL_ID_3: string;
  CHOICES_OF_QUESTION_ID_3_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_3_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_3_VALUE_3: string;

  QUESTION_DETAIL_ID_6: string;
  CHOICES_OF_QUESTION_ID_6_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_6_VALUE_1: string;

  QUESTION_DETAIL_ID_7: string;
  CHOICES_OF_QUESTION_ID_7_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_7_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_7_VALUE_3: string;

  QUESTION_DETAIL_ID_8: string;
  CHOICES_OF_QUESTION_ID_8_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_8_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_8_VALUE_3: string;

  QUESTION_DETAIL_ID_9: string;
  CHOICES_OF_QUESTION_ID_9_VALUE_1_1: string;
  CHOICES_OF_QUESTION_ID_9_VALUE_1_2: string;
  CHOICES_OF_QUESTION_ID_9_VALUE_1_3: string;
  CHOICES_OF_QUESTION_ID_9_VALUE_1_4: string;
  CHOICES_OF_QUESTION_ID_9_VALUE_2: string;

  QUESTION_DETAIL_ID_10: string;
  CHOICES_OF_QUESTION_ID_10_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_10_VALUE_3: string;
  CHOICES_OF_QUESTION_ID_10_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_10_VALUE_4_1: string;
  CHOICES_OF_QUESTION_ID_10_VALUE_4_2: string;
  CHOICES_OF_QUESTION_ID_10_VALUE_4_3: string;
  CHOICES_OF_QUESTION_ID_10_VALUE_4_4: string;
  CHOICES_OF_QUESTION_ID_10_VALUE_5_1: string;
  CHOICES_OF_QUESTION_ID_10_VALUE_5_2: string;
  CHOICES_OF_QUESTION_ID_10_VALUE_5_3: string;
  CHOICES_OF_QUESTION_ID_10_VALUE_5_4: string;
  CHOICES_OF_QUESTION_ID_10_VALUE_5_5: string;

  QUESTION_DETAIL_ID_11: string;
  CHOICES_OF_QUESTION_ID_11_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_11_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_11_VALUE_3: string;
  CHOICES_OF_QUESTION_ID_11_VALUE_4: string;
  CHOICES_OF_QUESTION_ID_11_VALUE_5: string;
  CHOICES_OF_QUESTION_ID_11_VALUE_6_1: string;
  CHOICES_OF_QUESTION_ID_11_VALUE_6_2: string;
  CHOICES_OF_QUESTION_ID_11_VALUE_6_3: string;
  CHOICES_OF_QUESTION_ID_11_VALUE_6_4: string;
  CHOICES_OF_QUESTION_ID_11_VALUE_6_5: string;



  QUESTION_DETAIL_ID_12: string;
  QUESTION_DETAIL_ID_13: string;
  QUESTION_DETAIL_ID_14: string;
  QUESTION_DETAIL_ID_15: string;
  QUESTION_DETAIL_ID_16: string;
  QUESTION_DETAIL_ID_17: string;
  QUESTION_DETAIL_ID_18: string;
  QUESTION_DETAIL_ID_19: string;
  QUESTION_DETAIL_ID_31: string
  QUESTION_DETAIL_ID_32: string;
  QUESTION_DETAIL_ID_33: string;
  QUESTION_DETAIL_ID_34: string;
  QUESTION_DETAIL_ID_35: string;


  checked = false;
  //--- ค่าที่ได้จากการเลือก ข้อ ต่างๆ
  selected_3: string;
  selected_9: string;
  selected_10: string;
  selected_11: string;

  //--- เลือกเพียงข้อเดียว ระหว่าง 9.1 หรือ 9.2 และที่การ Disable ข้อตรงข้าม
  selected_9_2_disabled_9_1 = false;
  selected_9_1_disabled_9_2 = false;

  selected_10_1_disabled_all = false;
  selected_10_2_disabled_all = false;
  selected_10_3_disabled_all = false;

  selected_11_1_disabled_all = false;
  selected_11_2_disabled_all = false;

  checkDisableChoice9_1() {
    this.selected_9_2_disabled_9_1 = true;
    this.selected_9_1_disabled_9_2 = false;
  }

  checkDisableChoice9_2() {
    this.selected_9_1_disabled_9_2 = true;
    this.selected_9_2_disabled_9_1 = false;
  }

  checkDisableChoice10_1() {
    this.selected_10_1_disabled_all = false;
    this.selected_10_2_disabled_all = true;
    this.selected_10_3_disabled_all = true;
  }

  checkDisableChoice10_2() {
    this.selected_10_1_disabled_all = true;
    this.selected_10_2_disabled_all = false;
    this.selected_10_3_disabled_all = true;
  }

  checkDisableChoice10_3() {
    this.selected_10_1_disabled_all = true;
    this.selected_10_2_disabled_all = true;
    this.selected_10_3_disabled_all = false;
  }

  checkDisableChoice11_1() {
    this.selected_11_1_disabled_all = false;
    this.selected_11_2_disabled_all = true;
  }

  checkDisableChoice11_2() {
    this.selected_11_1_disabled_all = true;
    this.selected_11_2_disabled_all = false;
  }

  constructor(
    private questionService: QuestionNaireService,
    public dialog: MatDialog,
    private router: Router,
    private formBuilder: FormBuilder) {

    this.getQuestionTocallApiService();

  }

  ngOnInit(): void { }

  async getQuestionTocallApiService() {

    this.preUserData = JSON.parse(sessionStorage.getItem('userSessionStorage'));

    await this.questionService.getHttpQuestions(this.preUserData.LEV_ID).subscribe(response => {

      if (response.question_error_message_status == 1) {

        this.questionValueForm.setValue({
          GENDER_NO: [''],
          PRENAME_NO: this.preUserData.PRENAME_NO,
          FIRST_NAME_THAI: this.preUserData.FIRST_NAME_THAI,
          LAST_NAME_THAI: this.preUserData.LAST_NAME_THAI,
          AGE: this.preUserData.AGE,
          STD_CODE: this.preUserData.STD_CODE,
          MAJOR_NO: this.preUserData.MAJOR_NO,
          FACULTY_NO: this.preUserData.FACUTY_NO,

          STD_TYPE: [''],
          STD_STUDY_TIME: [''],
          STD_FUND: [''],
          BE_WORK_STATUS: [''],
          BE_WORK_STATUS_TXT: [''],
          QN_WORK_STATUS: [''],
          QN_WORK_STATUS_NO_TXT: [''],
          QN_WORK_STATUS_ED_TXT: [''],
          QN_OCCUP_TYPE: [''],
          QN_OCCUP_TYPE_TXT: [''],
          QN_SALARY: [''],
          QN_WORK_SALARY: [''],
          QN_WORK_NAME: [''],
          QN_WORK_NO: [''],
          QN_WORK_MOO: [''],
          QN_WORK_BUILDING: [''],
          QN_WORK_FLOOR: [''],
          QN_WORK_SOI: [''],
          QN_WORK_STREET: [''],
          QN_WORK_TAMBON: [''],
          QN_WORK_AMPHUR: [''],
          QN_WORK_PROVINCE_NO: [''],
          QN_WORK_ZIPCODE: [''],
          QN_WORK_TEL: [''],
          QN_WORK_FAX: [''],
          QN_WORK_URL: [''],
          AF_FIND_WORK: [''],
          QN_MATCH_EDU: [''],
          QN_WORK_APPLY: [''],
          QN_EMPLOYER: [''],
          QN_AWARD: [''],
          QN_AWARD_TXT: [''],
          QN_AWARD_INSTITUTE: [''],
          QN_AWARD_MMYYYY: [''],
          QN_ADDPROGRAM2: [''],
          QN_ADDPROGRAM1: [''],
          QN_ADDPROGRAM3: [''],
          QN_ADDPROGRAM4: [''],
          QN_ADDPROGRAM5: [''],
          QN_ADDPROGRAM6: [''],
          QN_COMMENT_PROGRAM: [''],
          QN_COMMENT_LEARN: [''],
          QN_COMMENT_SOCIAL: [''],
          QN_COMMENT_ACTIVITY: [''],
          QN_COMMENT_LOCATION: [''],
          QN_DATE_UPDATE: [''],
        });

        this.MAJOR_NAME_THAI = this.preUserData.MAJOR_NAME_THAI;
        this.FACULTY_NAME_THAI = this.preUserData.FACULTY_NAME_THAI;

        this.QUIZ_HEADER = response.QUIZ_HEADER
        this.SECTION_NAME_ID_1 = response.SECTION_MAIN_HEADER.SECTION_NAME_ID_1;
        this.SECTION_NAME_ID_2 = response.SECTION_MAIN_HEADER.SECTION_NAME_ID_2;
        this.SECTION_NAME_ID_3 = response.SECTION_MAIN_HEADER.SECTION_NAME_ID_3;

        this.QUESTION_DETAIL_ID_3 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_3;
        this.CHOICES_OF_QUESTION_ID_3_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_3_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_3_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_3_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_3_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_3_VALUE_3;

        this.QUESTION_DETAIL_ID_6 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_6;
        this.CHOICES_OF_QUESTION_ID_6_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_6_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_6_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_6_VALUE_2;

        this.QUESTION_DETAIL_ID_7 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_7;
        this.CHOICES_OF_QUESTION_ID_7_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_7_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_7_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_7_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_7_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_7_VALUE_3;

        this.QUESTION_DETAIL_ID_8 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_8;
        this.CHOICES_OF_QUESTION_ID_8_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_8_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_8_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_8_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_8_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_8_VALUE_3;

        this.QUESTION_DETAIL_ID_9 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_9;
        this.CHOICES_OF_QUESTION_ID_9_VALUE_1_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_9_VALUE_1_1;
        this.CHOICES_OF_QUESTION_ID_9_VALUE_1_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_9_VALUE_1_2;
        this.CHOICES_OF_QUESTION_ID_9_VALUE_1_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_9_VALUE_1_3;
        this.CHOICES_OF_QUESTION_ID_9_VALUE_1_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_9_VALUE_1_4;
        this.CHOICES_OF_QUESTION_ID_9_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_9_VALUE_2;

        this.QUESTION_DETAIL_ID_10 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_10;
        this.CHOICES_OF_QUESTION_ID_10_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_10_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_10_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_10_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_10_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_10_VALUE_3;
        this.CHOICES_OF_QUESTION_ID_10_VALUE_4_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_10_VALUE_4_1;
        this.CHOICES_OF_QUESTION_ID_10_VALUE_4_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_10_VALUE_4_2;
        this.CHOICES_OF_QUESTION_ID_10_VALUE_4_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_10_VALUE_4_3;
        this.CHOICES_OF_QUESTION_ID_10_VALUE_4_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_10_VALUE_4_4;
        this.CHOICES_OF_QUESTION_ID_10_VALUE_5_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_10_VALUE_5_1;
        this.CHOICES_OF_QUESTION_ID_10_VALUE_5_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_10_VALUE_5_2;
        this.CHOICES_OF_QUESTION_ID_10_VALUE_5_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_10_VALUE_5_3;
        this.CHOICES_OF_QUESTION_ID_10_VALUE_5_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_10_VALUE_5_4;
        this.CHOICES_OF_QUESTION_ID_10_VALUE_5_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_10_VALUE_5_5;

        this.QUESTION_DETAIL_ID_11 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_11;
        this.CHOICES_OF_QUESTION_ID_11_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_11_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_11_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_11_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_11_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_11_VALUE_3;
        this.CHOICES_OF_QUESTION_ID_11_VALUE_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_11_VALUE_4;
        this.CHOICES_OF_QUESTION_ID_11_VALUE_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_11_VALUE_5;
        this.CHOICES_OF_QUESTION_ID_11_VALUE_6_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_11_VALUE_6_1;
        this.CHOICES_OF_QUESTION_ID_11_VALUE_6_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_11_VALUE_6_2;
        this.CHOICES_OF_QUESTION_ID_11_VALUE_6_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_11_VALUE_6_3;
        this.CHOICES_OF_QUESTION_ID_11_VALUE_6_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_11_VALUE_6_4;
        this.CHOICES_OF_QUESTION_ID_11_VALUE_6_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_11_VALUE_6_5;

        this.QUESTION_DETAIL_ID_12 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_12;
        this.QUESTION_DETAIL_ID_13 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_13;

        this.QUESTION_DETAIL_ID_14 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_14;
        this.QUESTION_DETAIL_ID_15 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_15;
        this.QUESTION_DETAIL_ID_16 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_16;
        this.QUESTION_DETAIL_ID_17 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_17;
        this.QUESTION_DETAIL_ID_18 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_18;
        this.QUESTION_DETAIL_ID_19 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_19;
        this.QUESTION_DETAIL_ID_31 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_31;
        this.QUESTION_DETAIL_ID_32 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_32;
        this.QUESTION_DETAIL_ID_33 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_33;
        this.QUESTION_DETAIL_ID_34 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_34;
        this.QUESTION_DETAIL_ID_35 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_35;

      } else {

        this.handlesErrors(response.question_error_message_status);

      }

    },
      error => {

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


  //-- ยืนยันการ Logout
  logoutConfirmDialog(): void {
    const message = `คุณต้องการที่จะออกจากระบบใช่หรือไม่?`;

    const description = `ถ้าคุณออกจากหน้าเพจการทำงานนี้ ข้อมูลที่คุณทำการกรอกไว้จะไม่ถูกบันทึก !`;

    const dialogData = new ConfirmDialogModel("Logout", message, description);

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
