import { Router } from '@angular/router';
import { ConfirmDialogModel, ConfirmDialogComponent } from './../confirm-dialog/confirm-dialog.component';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { QuestionNaireService } from '../services/question-naire.service';
import { userResponseDataInterface } from './../login/user-response-data';
import { MatDialog } from '@angular/material/dialog';

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
    FIRST_NAME_THAI: ['', Validators.required],
    LAST_NAME_THAI: ['', Validators.required],
    AGE: ['', Validators.required],
    GENDER_NO: ['', Validators.required],
    FACULTY_NO: [''],
    MAJOR_NO: [''],
    STD_TYPE: ['', Validators.required],
    STD_STUDY_TIME: ['', Validators.required],
    STD_FUND: ['', Validators.required],
    BE_WORK_STATUS: ['', Validators.required],
    BE_WORK_STATUS_TXT: [''],
    QN_WORK_STATUS: ['', Validators.required],
    QN_WORK_STATUS_NO_TXT: [''],
    QN_WORK_STATUS_ED_TXT: [''],
    QN_OCCUP_TYPE: ['', Validators.required],
    QN_OCCUP_TYPE_TXT: [''],
    QN_SALARY: ['', Validators.required],
    QN_WORK_SALARY: ['', Validators.required],
    QN_WORK_NAME: ['', Validators.required],
    QN_WORK_NO: ['', Validators.required],
    QN_WORK_MOO: ['', Validators.required],
    QN_WORK_BUILDING: ['', Validators.required],
    QN_WORK_FLOOR: ['', Validators.required],
    QN_WORK_SOI: ['', Validators.required],
    QN_WORK_STREET: ['', Validators.required],
    QN_WORK_TAMBON: ['', Validators.required],
    QN_WORK_AMPHUR: ['', Validators.required],
    QN_WORK_PROVINCE_NO: ['', Validators.required],
    QN_WORK_ZIPCODE: ['', Validators.required],
    QN_WORK_TEL: ['', Validators.required],
    QN_WORK_FAX: ['', Validators.required],
    QN_WORK_URL: [''],
    AF_FIND_WORK: ['', Validators.required],
    QN_MATCH_EDU: ['', Validators.required],
    QN_WORK_APPLY: ['', Validators.required],
    QN_EMPLOYER: ['', Validators.required],
    QN_AWARD: ['', Validators.required],
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
    // BE_WORK_STATUS: ['', Validators.required],
    // BE_WORK_STATUS_TXT: ['', Validators.required],
    // QN_WORK_STATUS: ['', Validators.required],
    // QN_WORK_STATUS_NO_TXT: ['', Validators.required],
    // QN_WORK_STATUS_ED_TXT: ['', Validators.required],
    // QN_OCCUP_TYPE: ['', Validators.required],
    // QN_OCCUP_TYPE_TXT: ['', Validators.required],
    // QN_SALARY: ['', Validators.required],
    // QN_WORK_SALARY: ['', Validators.required],
    // QN_WORK_NAME: ['', Validators.required],
    // QN_WORK_NO: ['', Validators.required],
    // QN_WORK_MOO: ['', Validators.required],
    // QN_WORK_BUILDING: ['', Validators.required],
    // QN_WORK_FLOOR: ['', Validators.required],
    // QN_WORK_SOI: ['', Validators.required],
    // QN_WORK_STREET: ['', Validators.required],
    // QN_WORK_TAMBON: ['', Validators.required],
    // QN_WORK_AMPHUR: ['', Validators.required],
    // QN_WORK_PROVINCE_NO: ['', Validators.required],
    // QN_WORK_ZIPCODE: ['', Validators.required],
    // QN_WORK_TEL: ['', Validators.required],
    // QN_WORK_FAX: ['', Validators.required],
    // QN_WORK_URL: ['', Validators.required],
    // AF_FIND_WORK: ['', Validators.required],
    // QN_MATCH_EDU: ['', Validators.required],
    // QN_WORK_APPLY: ['', Validators.required],
    // QN_EMPLOYER: ['', Validators.required],
    // QN_AWARD: ['', Validators.required],
    // QN_AWARD_TXT: ['', Validators.required],
    // QN_AWARD_INSTITUTE: ['', Validators.required],
    // QN_AWARD_MMYYYY: ['', Validators.required],
    // QN_ADDPROGRAM2: ['', Validators.required],
    // QN_ADDPROGRAM1: ['', Validators.required],
    // QN_ADDPROGRAM3: ['', Validators.required],
    // QN_ADDPROGRAM4: ['', Validators.required],
    // QN_ADDPROGRAM5: ['', Validators.required],
    // QN_ADDPROGRAM6: ['', Validators.required],
    // QN_COMMENT_PROGRAM: [''],
    // QN_COMMENT_LEARN: [''],
    // QN_COMMENT_SOCIAL: [''],
    // QN_COMMENT_ACTIVITY: [''],
    // QN_COMMENT_LOCATION: [''],
    // QN_DATE_UPDATE: [''],
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
  CHOICES_OF_QUESTION_ID_14_VALUE_1_5: string;
  CHOICES_OF_QUESTION_ID_14_VALUE_1_6: string;
  CHOICES_OF_QUESTION_ID_14_VALUE_1_1: string;
  CHOICES_OF_QUESTION_ID_14_VALUE_1_2: string;
  CHOICES_OF_QUESTION_ID_14_VALUE_1_3: string;
  CHOICES_OF_QUESTION_ID_14_VALUE_1_4: string;
  CHOICES_OF_QUESTION_ID_14_VALUE_2_1: string;
  CHOICES_OF_QUESTION_ID_14_VALUE_2_2: string;

  QUESTION_DETAIL_ID_15: string;
  CHOICES_OF_QUESTION_ID_15_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_15_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_15_VALUE_3: string;

  QUESTION_DETAIL_ID_16: string;
  CHOICES_OF_QUESTION_ID_16_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_16_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_16_VALUE_3: string;
  CHOICES_OF_QUESTION_ID_16_VALUE_4: string;
  CHOICES_OF_QUESTION_ID_16_VALUE_5: string;

  QUESTION_DETAIL_ID_17: string;
  CHOICES_OF_QUESTION_ID_17_VALUE_5: string;
  CHOICES_OF_QUESTION_ID_17_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_17_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_17_VALUE_3: string;
  CHOICES_OF_QUESTION_ID_17_VALUE_4: string;

  QUESTION_DETAIL_ID_18: string;
  CHOICES_OF_QUESTION_ID_18_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_18_VALUE_2: string;

  QUESTION_DETAIL_ID_19: string;
  CHOICES_OF_QUESTION_ID_19_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_19_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_19_VALUE_3: string;
  CHOICES_OF_QUESTION_ID_19_VALUE_4: string;
  CHOICES_OF_QUESTION_ID_19_VALUE_5: string;
  CHOICES_OF_QUESTION_ID_19_VALUE_6: string;
  CHECKED_QN_ADDPROGRAM1: false;
  CHECKED_QN_ADDPROGRAM2: false;
  CHECKED_QN_ADDPROGRAM3: false;
  CHECKED_QN_ADDPROGRAM4: false;
  CHECKED_QN_ADDPROGRAM5: false;
  CHECKED_QN_ADDPROGRAM6: false;

  QUESTION_DETAIL_ID_31: string
  QUESTION_DETAIL_ID_32: string;
  QUESTION_DETAIL_ID_33: string;
  QUESTION_DETAIL_ID_34: string;
  QUESTION_DETAIL_ID_35: string;

  constructor(
    private questionService: QuestionNaireService,
    public dialog: MatDialog,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.getQuestionTocallApiService();

    this.questionValueForm.controls['BE_WORK_STATUS'].valueChanges.subscribe(selected => {

      if (selected === '1.4') {

        this.questionValueForm.controls['BE_WORK_STATUS_TXT'].enable();
        this.questionValueForm.controls['BE_WORK_STATUS_TXT'].setValidators([Validators.required]);
        this.questionValueForm.controls['BE_WORK_STATUS_TXT'].updateValueAndValidity();

      } else {

        this.questionValueForm.controls['BE_WORK_STATUS_TXT'].disable();
        this.questionValueForm.controls['BE_WORK_STATUS_TXT'].clearValidators();
        this.questionValueForm.controls['BE_WORK_STATUS_TXT'].setValue('');
        this.questionValueForm.controls['BE_WORK_STATUS_TXT'].updateValueAndValidity();

      }

    });

    this.questionValueForm.controls['QN_WORK_STATUS'].valueChanges.subscribe(selected => {

      if (selected === '4.4') {

        this.questionValueForm.controls['QN_WORK_STATUS_NO_TXT'].enable();
        this.questionValueForm.controls['QN_WORK_STATUS_NO_TXT'].setValidators([Validators.required]);
        this.questionValueForm.controls['QN_WORK_STATUS_NO_TXT'].updateValueAndValidity();

      } else {

        this.questionValueForm.controls['QN_WORK_STATUS_NO_TXT'].disable();
        this.questionValueForm.controls['QN_WORK_STATUS_NO_TXT'].clearValidators();
        this.questionValueForm.controls['QN_WORK_STATUS_NO_TXT'].setValue('');
        this.questionValueForm.controls['QN_WORK_STATUS_NO_TXT'].updateValueAndValidity();

      }

    });

    this.questionValueForm.controls['QN_WORK_STATUS'].valueChanges.subscribe(selected => {

      if (selected === '5.5') {

        this.questionValueForm.controls['QN_WORK_STATUS_ED_TXT'].enable();
        this.questionValueForm.controls['QN_WORK_STATUS_ED_TXT'].setValidators([Validators.required]);
        this.questionValueForm.controls['QN_WORK_STATUS_ED_TXT'].updateValueAndValidity();

      } else {

        this.questionValueForm.controls['QN_WORK_STATUS_ED_TXT'].disable();
        this.questionValueForm.controls['QN_WORK_STATUS_ED_TXT'].clearValidators();
        this.questionValueForm.controls['QN_WORK_STATUS_ED_TXT'].setValue('');
        this.questionValueForm.controls['QN_WORK_STATUS_ED_TXT'].updateValueAndValidity();

      }

    });

    this.questionValueForm.controls['QN_OCCUP_TYPE'].valueChanges.subscribe(selected => {

      if (selected === '6.5') {

        this.questionValueForm.controls['QN_OCCUP_TYPE_TXT'].enable();
        this.questionValueForm.controls['QN_OCCUP_TYPE_TXT'].setValidators([Validators.required]);
        this.questionValueForm.controls['QN_OCCUP_TYPE_TXT'].updateValueAndValidity();

      } else {

        this.questionValueForm.controls['QN_OCCUP_TYPE_TXT'].disable();
        this.questionValueForm.controls['QN_OCCUP_TYPE_TXT'].clearValidators();
        this.questionValueForm.controls['QN_OCCUP_TYPE_TXT'].setValue('');
        this.questionValueForm.controls['QN_OCCUP_TYPE_TXT'].updateValueAndValidity();

      }

    });

    this.questionValueForm.controls['QN_AWARD'].valueChanges.subscribe(selected => {

      if (selected === '2') {

        this.questionValueForm.controls['QN_AWARD_TXT'].enable();
        this.questionValueForm.controls['QN_AWARD_TXT'].setValidators([Validators.required]);
        this.questionValueForm.controls['QN_AWARD_TXT'].updateValueAndValidity();

        this.questionValueForm.controls['QN_AWARD_INSTITUTE'].enable();
        this.questionValueForm.controls['QN_AWARD_INSTITUTE'].setValidators([Validators.required]);
        this.questionValueForm.controls['QN_AWARD_INSTITUTE'].updateValueAndValidity();

        this.questionValueForm.controls['QN_AWARD_MMYYYY'].enable();
        this.questionValueForm.controls['QN_AWARD_MMYYYY'].setValidators([Validators.required]);
        this.questionValueForm.controls['QN_AWARD_MMYYYY'].updateValueAndValidity();

      } else {

        this.questionValueForm.controls['QN_AWARD_TXT'].disable();
        this.questionValueForm.controls['QN_AWARD_TXT'].clearValidators();
        this.questionValueForm.controls['QN_AWARD_TXT'].setValue('');
        this.questionValueForm.controls['QN_AWARD_TXT'].updateValueAndValidity();

        this.questionValueForm.controls['QN_AWARD_INSTITUTE'].disable();
        this.questionValueForm.controls['QN_AWARD_INSTITUTE'].clearValidators();
        this.questionValueForm.controls['QN_AWARD_INSTITUTE'].setValue('');
        this.questionValueForm.controls['QN_AWARD_INSTITUTE'].updateValueAndValidity();

        this.questionValueForm.controls['QN_AWARD_MMYYYY'].disable();
        this.questionValueForm.controls['QN_AWARD_MMYYYY'].clearValidators();
        this.questionValueForm.controls['QN_AWARD_MMYYYY'].setValue('');
        this.questionValueForm.controls['QN_AWARD_MMYYYY'].updateValueAndValidity();

      }

    });

  }

  async getQuestionTocallApiService() {

    this.preUserData = JSON.parse(sessionStorage.getItem('userSessionStorage'));

    await this.questionService.getHttpQuestions(this.preUserData.LEV_ID).subscribe(response => {

      if (response.question_error_message_status == 1) {

        this.questionValueForm.patchValue({

          PRENAME_NO: this.preUserData.PRENAME_NO,
          FIRST_NAME_THAI: this.preUserData.FIRST_NAME_THAI,
          LAST_NAME_THAI: this.preUserData.LAST_NAME_THAI,
          AGE: this.preUserData.AGE,
          STD_CODE: this.preUserData.STD_CODE,
          MAJOR_NO: this.preUserData.MAJOR_NO,
          FACULTY_NO: this.preUserData.FACUTY_NO,

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
        this.CHOICES_OF_QUESTION_ID_14_VALUE_1_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_14_VALUE_1_1;
        this.CHOICES_OF_QUESTION_ID_14_VALUE_1_6 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_14_VALUE_1_2;
        this.CHOICES_OF_QUESTION_ID_14_VALUE_1_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_14_VALUE_1_3;
        this.CHOICES_OF_QUESTION_ID_14_VALUE_1_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_14_VALUE_1_4;
        this.CHOICES_OF_QUESTION_ID_14_VALUE_1_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_14_VALUE_1_5;
        this.CHOICES_OF_QUESTION_ID_14_VALUE_1_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_14_VALUE_1_6;
        this.CHOICES_OF_QUESTION_ID_14_VALUE_2_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_14_VALUE_2_1;
        this.CHOICES_OF_QUESTION_ID_14_VALUE_2_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_14_VALUE_2_2;

        this.QUESTION_DETAIL_ID_15 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_15;
        this.CHOICES_OF_QUESTION_ID_15_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_15_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_15_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_15_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_15_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_15_VALUE_3;

        this.QUESTION_DETAIL_ID_16 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_16;
        this.CHOICES_OF_QUESTION_ID_16_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_16_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_16_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_16_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_16_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_16_VALUE_3;
        this.CHOICES_OF_QUESTION_ID_16_VALUE_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_16_VALUE_4;
        this.CHOICES_OF_QUESTION_ID_16_VALUE_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_16_VALUE_5;

        this.QUESTION_DETAIL_ID_17 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_17;
        this.CHOICES_OF_QUESTION_ID_17_VALUE_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_17_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_17_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_17_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_17_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_17_VALUE_3;
        this.CHOICES_OF_QUESTION_ID_17_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_17_VALUE_4;
        this.CHOICES_OF_QUESTION_ID_17_VALUE_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_17_VALUE_5;

        this.QUESTION_DETAIL_ID_18 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_18;
        this.CHOICES_OF_QUESTION_ID_18_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_18_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_18_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_18_VALUE_2;

        this.QUESTION_DETAIL_ID_19 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_19;
        this.CHOICES_OF_QUESTION_ID_19_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_19_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_19_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_19_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_19_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_19_VALUE_3;
        this.CHOICES_OF_QUESTION_ID_19_VALUE_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_19_VALUE_4;
        this.CHOICES_OF_QUESTION_ID_19_VALUE_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_19_VALUE_5;
        this.CHOICES_OF_QUESTION_ID_19_VALUE_6 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_19_VALUE_6;

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



  checkBoxvalueQN_ADDPROGRAM1(event) {

    if (event.checked) {
      this.questionValueForm.controls['QN_ADDPROGRAM1'].patchValue('1');
    } else {
      this.questionValueForm.controls['QN_ADDPROGRAM1'].patchValue('');
    }

  }

  checkBoxvalueQN_ADDPROGRAM2(event) {

    if (event.checked) {
      this.questionValueForm.controls['QN_ADDPROGRAM2'].patchValue('2');
    } else {
      this.questionValueForm.controls['QN_ADDPROGRAM2'].patchValue('');
    }

  }

  checkBoxvalueQN_ADDPROGRAM3(event) {

    if (event.checked) {
      this.questionValueForm.controls['QN_ADDPROGRAM3'].patchValue('3');
    } else {
      this.questionValueForm.controls['QN_ADDPROGRAM3'].patchValue('');
    }

  }

  checkBoxvalueQN_ADDPROGRAM4(event) {

    if (event.checked) {
      this.questionValueForm.controls['QN_ADDPROGRAM4'].patchValue('4');
    } else {
      this.questionValueForm.controls['QN_ADDPROGRAM4'].patchValue('');
    }

  }

  checkBoxvalueQN_ADDPROGRAM5(event) {

    if (event.checked) {
      this.questionValueForm.controls['QN_ADDPROGRAM5'].patchValue('5');
    } else {
      this.questionValueForm.controls['QN_ADDPROGRAM5'].patchValue('');
    }

  }

  checkBoxvalueQN_ADDPROGRAM6(event) {

    if (event.checked) {
      this.questionValueForm.controls['QN_ADDPROGRAM6'].patchValue('6');
    } else {
      this.questionValueForm.controls['QN_ADDPROGRAM6'].patchValue('');
    }

  }

  get fbValidation() { return this.questionValueForm.controls; }

  get checkedAddProgram1() { return this.CHECKED_QN_ADDPROGRAM1; }

  onSubmit() {

    console.table('onSubmit => ', this.questionValueForm.value);

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
