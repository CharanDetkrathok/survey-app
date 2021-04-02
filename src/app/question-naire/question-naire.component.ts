import { districtInterface, amphurInterface, provinceInterface, postcodeInterface, districtAllInterface } from './question-response-data';

import { questionSetInterfaceData } from './question-set-interface-data';
import { Router } from '@angular/router';
import { ConfirmDialogModel, ConfirmDialogComponent } from './../confirm-dialog/confirm-dialog.component';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { QuestionNaireService } from '../services/question-naire.service';
import { userResponseDataInterface } from './../login/user-response-data';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeTh from '@angular/common/locales/th';

@Component({
  selector: 'app-question-naire',
  templateUrl: './question-naire.component.html',
  styleUrls: ['./question-naire.component.css']
})
export class QuestionNaireComponent implements OnInit {

  preUserData: userResponseDataInterface;
  postUserData: questionSetInterfaceData;

  //-- prepared Data และทำการจัด Group เอาไว้สำหรับ Insert หรือ Update
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
    QN_WORK_SALARY: [''],
    QN_WORK_NAME: ['', Validators.required],
    QN_WORK_NO: ['', Validators.required],
    QN_WORK_MOO: [''],
    QN_WORK_BUILDING: [''],
    QN_WORK_FLOOR: [''],
    QN_WORK_SOI: [''],
    QN_WORK_STREET: [''],
    QN_WORK_TAMBON: ['', Validators.required],
    QN_WORK_AMPHUR: ['', Validators.required],
    QN_WORK_PROVINCE_NO: ['', Validators.required],
    QN_WORK_ZIPCODE: ['', Validators.required],
    QN_WORK_TEL: [''],
    QN_WORK_FAX: [''],
    QN_WORK_URL: [''],
    AF_FIND_WORK: ['', Validators.required],
    QN_MATCH_EDU: ['', Validators.required],
    QN_WORK_APPLY: ['', Validators.required],
    QN_EMPLOYER: ['', Validators.required],
    QN_AWARD: ['', Validators.required],
    QN_AWARD_TXT: [''],
    QN_AWARD_INSTITUTE: [''],
    QN_AWARD_MMYYYY: [''],
    QN_ADDPROGRAM2: ['', Validators.required],
    QN_ADDPROGRAM1: ['', Validators.required],
    QN_ADDPROGRAM3: ['', Validators.required],
    QN_ADDPROGRAM4: ['', Validators.required],
    QN_ADDPROGRAM5: ['', Validators.required],
    QN_ADDPROGRAM6: ['', Validators.required],
    QN_COMMENT_PROGRAM: [''],
    QN_COMMENT_LEARN: [''],
    QN_COMMENT_SOCIAL: [''],
    QN_COMMENT_ACTIVITY: [''],
    QN_COMMENT_LOCATION: [''],
    QN_DATE_UPDATE: [''],
    INSERT_STATUS: [''],
    UPDATE_STATUS: ['']

  });

  MAJOR_NAME_THAI: string;
  FACULTY_NAME_THAI: string;
  PRENAME_THAI: string;

  dialog_confirm_result: string = '';

  //-- คำถามทั้งหมด
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

  CHOICES_OF_ALL_DISTRICT: districtAllInterface;
  CHOICES_OF_DISTRICT: districtInterface;
  CHOICES_OF_AMPHUR: amphurInterface;
  CHOICES_OF_PROVINCE: provinceInterface;
  QN_WORK_PROVINCE_NAME: string;
  CHOICES_OF_POSTCODE: postcodeInterface;

  constructor(
    private questionService: QuestionNaireService,
    public dialog: MatDialog,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    //-- Call API เพื่อไป Query คำถามมาแสดงใน Template
    this.getQuestionTocallApiService();

    //-- Enable และ Disable ข้อ 11 -> ข้อ 17
    this.questionValueForm.controls['QN_WORK_STATUS'].valueChanges.subscribe(selected => {

      if (selected === '3' || selected === '4.1' || selected === '4.2' || selected === '4.3' || selected === '4.4' || selected === '5.1' || selected === '5.2' || selected === '5.3' || selected === '5.4' || selected === '5.5') {

        this.questionValueForm.controls['QN_OCCUP_TYPE'].disable();
        this.questionValueForm.controls['QN_OCCUP_TYPE_TXT'].disable();
        this.questionValueForm.controls['QN_SALARY'].disable();
        this.questionValueForm.controls['QN_WORK_SALARY'].disable();
        this.questionValueForm.controls['QN_WORK_NAME'].disable();
        this.questionValueForm.controls['QN_WORK_NO'].disable();
        this.questionValueForm.controls['QN_WORK_MOO'].disable();
        this.questionValueForm.controls['QN_WORK_BUILDING'].disable();
        this.questionValueForm.controls['QN_WORK_FLOOR'].disable();
        this.questionValueForm.controls['QN_WORK_SOI'].disable();
        this.questionValueForm.controls['QN_WORK_STREET'].disable();
        this.questionValueForm.controls['QN_WORK_TAMBON'].disable();
        this.questionValueForm.controls['QN_WORK_AMPHUR'].disable();
        this.questionValueForm.controls['QN_WORK_PROVINCE_NO'].disable();
        this.questionValueForm.controls['QN_WORK_ZIPCODE'].disable();
        this.questionValueForm.controls['QN_WORK_TEL'].disable();
        this.questionValueForm.controls['QN_WORK_FAX'].disable();
        this.questionValueForm.controls['QN_WORK_URL'].disable();
        this.questionValueForm.controls['AF_FIND_WORK'].disable();
        this.questionValueForm.controls['QN_MATCH_EDU'].disable();
        this.questionValueForm.controls['QN_WORK_APPLY'].disable();
        this.questionValueForm.controls['QN_EMPLOYER'].disable();

        this.questionValueForm.controls['QN_OCCUP_TYPE'].patchValue('');
        this.questionValueForm.controls['QN_OCCUP_TYPE_TXT'].patchValue('');
        this.questionValueForm.controls['QN_SALARY'].patchValue('');
        this.questionValueForm.controls['QN_WORK_SALARY'].patchValue('');
        this.questionValueForm.controls['QN_WORK_NAME'].patchValue('');
        this.questionValueForm.controls['QN_WORK_NO'].patchValue('');
        this.questionValueForm.controls['QN_WORK_MOO'].patchValue('');
        this.questionValueForm.controls['QN_WORK_BUILDING'].patchValue('');
        this.questionValueForm.controls['QN_WORK_FLOOR'].patchValue('');
        this.questionValueForm.controls['QN_WORK_SOI'].patchValue('');
        this.questionValueForm.controls['QN_WORK_STREET'].patchValue('');
        this.questionValueForm.controls['QN_WORK_TAMBON'].patchValue('');
        this.questionValueForm.controls['QN_WORK_AMPHUR'].patchValue('');
        this.questionValueForm.controls['QN_WORK_PROVINCE_NO'].patchValue('');
        this.questionValueForm.controls['QN_WORK_ZIPCODE'].patchValue('');
        this.questionValueForm.controls['QN_WORK_TEL'].patchValue('');
        this.questionValueForm.controls['QN_WORK_FAX'].patchValue('');
        this.questionValueForm.controls['QN_WORK_URL'].patchValue('');
        this.questionValueForm.controls['AF_FIND_WORK'].patchValue('');
        this.questionValueForm.controls['QN_MATCH_EDU'].patchValue('');
        this.questionValueForm.controls['QN_WORK_APPLY'].patchValue('');
        this.questionValueForm.controls['QN_EMPLOYER'].patchValue('');

      } else {

        this.questionValueForm.controls['QN_OCCUP_TYPE'].enable();
        this.questionValueForm.controls['QN_OCCUP_TYPE'].enable();
        this.questionValueForm.controls['QN_OCCUP_TYPE_TXT'].enable();
        this.questionValueForm.controls['QN_SALARY'].enable();
        this.questionValueForm.controls['QN_WORK_SALARY'].enable();
        this.questionValueForm.controls['QN_WORK_NAME'].enable();
        this.questionValueForm.controls['QN_WORK_NO'].enable();
        this.questionValueForm.controls['QN_WORK_MOO'].enable();
        this.questionValueForm.controls['QN_WORK_BUILDING'].enable();
        this.questionValueForm.controls['QN_WORK_FLOOR'].enable();
        this.questionValueForm.controls['QN_WORK_SOI'].enable();
        this.questionValueForm.controls['QN_WORK_STREET'].enable();
        this.questionValueForm.controls['QN_WORK_TAMBON'].enable();
        this.questionValueForm.controls['QN_WORK_AMPHUR'].enable();
        this.questionValueForm.controls['QN_WORK_PROVINCE_NO'].enable();
        this.questionValueForm.controls['QN_WORK_ZIPCODE'].enable();
        this.questionValueForm.controls['QN_WORK_TEL'].enable();
        this.questionValueForm.controls['QN_WORK_FAX'].enable();
        this.questionValueForm.controls['QN_WORK_URL'].enable();
        this.questionValueForm.controls['AF_FIND_WORK'].enable();
        this.questionValueForm.controls['QN_MATCH_EDU'].enable();
        this.questionValueForm.controls['QN_WORK_APPLY'].enable();
        this.questionValueForm.controls['QN_EMPLOYER'].enable();

      }

    });

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

    //-- ต้องเลือก ตำบล/แขวง ก่อน จึงจะ enable
    this.questionValueForm.controls['QN_WORK_AMPHUR'].disable();
    this.questionValueForm.controls['QN_WORK_PROVINCE_NO'].disable();
    this.questionValueForm.controls['QN_WORK_ZIPCODE'].disable();

  }

  //-------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------
  //เริ่ม-- Autocomplete zone ------
  keyword = {
    tumbon: 'DISTRICT_NAME'
  };
  TEMP_DISTRICT_NAME: string;
  TEMP_AMPHUR_NAME: string;
  TEMP_PROVINCE_NAME: string;
  TEMP_POSTCODE: string;

  setLetters: boolean = false;
  // notFoundTemplate: any;
  //-------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------
  checkLetters(): any {
    if (this.setLetters) return this.CHOICES_OF_ALL_DISTRICT;
    // else return false;
  }


  closeTab(): any {
    this.setLetters = false;
    this.checkLetters();
    // return true;
  }

  //เริ่ม-- Autocomplete ตำบล/แขวง
  selectEventTambon(item) {
    this.TEMP_DISTRICT_NAME = item.DISTRICT_NAME;
    this.questionValueForm.controls['QN_WORK_TAMBON'].patchValue(this.TEMP_DISTRICT_NAME);

    this.TEMP_AMPHUR_NAME = item.AMPHUR_NAME;
    this.questionValueForm.controls['QN_WORK_AMPHUR'].patchValue(this.TEMP_AMPHUR_NAME);

    //-- เก็บไว้ตอน onSubmit เพื่อ Insert to Database เพราะเก็บเป็น ID
    this.TEMP_PROVINCE_NAME = item.PROVINCE_ID;
    this.questionValueForm.controls['QN_WORK_PROVINCE_NO'].patchValue(item.TEMP_PROVINCE_NAME);
    this.questionValueForm.controls['QN_WORK_PROVINCE_NO'].clearValidators();
    this.questionValueForm.controls['QN_WORK_PROVINCE_NO'].updateValueAndValidity();
    //-- เก็บไว้แสดง ชื่อจังหวัด/ประเทศ เป็น อักษร ที่หน้าเว็บ
    this.QN_WORK_PROVINCE_NAME = item.PROVINCE_NAME;

    this.TEMP_POSTCODE = item.POSTCODE;
    this.questionValueForm.controls['QN_WORK_ZIPCODE'].patchValue(this.TEMP_POSTCODE);

    //-- เลือก ตำบล/แขวง แล้วทำการ enable
    this.questionValueForm.controls['QN_WORK_AMPHUR'].enable();
    this.questionValueForm.controls['QN_WORK_PROVINCE_NO'].enable();
    this.questionValueForm.controls['QN_WORK_ZIPCODE'].enable();
  }

  onChangeSearchTambon(val: string) {
    // console.log('จำนวน srt => ' + val);

    if (val.length >= 3) {
      this.setLetters = true;
    }

    if (val.length === 0 || val === null || val === undefined || val === '') {
      this.setLetters = false;
    }

  }

  onInputClearedTambon(e) {

    this.setLetters = false;

    this.TEMP_DISTRICT_NAME = '';
    this.questionValueForm.controls['QN_WORK_TAMBON'].setValue('');
    this.questionValueForm.controls['QN_WORK_TAMBON'].setValidators([Validators.required]);
    this.questionValueForm.controls['QN_WORK_TAMBON'].updateValueAndValidity();


    this.TEMP_AMPHUR_NAME = '';
    this.questionValueForm.controls['QN_WORK_AMPHUR'].setValue('');
    this.questionValueForm.controls['QN_WORK_AMPHUR'].setValidators([Validators.required]);
    this.questionValueForm.controls['QN_WORK_AMPHUR'].updateValueAndValidity();

    this.TEMP_PROVINCE_NAME = '';
    this.QN_WORK_PROVINCE_NAME = '';
    this.questionValueForm.controls['QN_WORK_PROVINCE_NO'].setValue('');
    this.questionValueForm.controls['QN_WORK_PROVINCE_NO'].setValidators([Validators.required]);
    this.questionValueForm.controls['QN_WORK_PROVINCE_NO'].updateValueAndValidity();

    this.TEMP_POSTCODE = '';
    this.questionValueForm.controls['QN_WORK_ZIPCODE'].setValue('');
    this.questionValueForm.controls['QN_WORK_ZIPCODE'].setValidators([Validators.required]);
    this.questionValueForm.controls['QN_WORK_ZIPCODE'].updateValueAndValidity();

    //-- ต้องเลือก ตำบล/แขวง ก่อน จึงจะ enable
    this.questionValueForm.controls['QN_WORK_AMPHUR'].disable();
    this.questionValueForm.controls['QN_WORK_PROVINCE_NO'].disable();
    this.questionValueForm.controls['QN_WORK_ZIPCODE'].disable();
  }
  //จบ-- Autocomplete zone ------
  //-------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------


  //-- Call API เพื่อไป Query คำถามมาแสดงใน Template
  async getQuestionTocallApiService() {

    //-- Get value and Assignment ให้ตัวแปลประเภท Interface class
    this.preUserData = JSON.parse(sessionStorage.getItem('userSessionStorage'));

    //-- Call API Service เพื่อนำคำถามมาแสดง
    await this.questionService.getHttpQuestions(this.preUserData.LEV_ID).subscribe(response => {

      if (response.question_error_message_status == 1) {

        //-- Assignment values ที่ได้จากการ Login เตรียมไว้ก่อน
        this.questionValueForm.patchValue({
          PRENAME_NO: this.preUserData.PRENAME_NO,
          FIRST_NAME_THAI: this.preUserData.FIRST_NAME_THAI,
          LAST_NAME_THAI: this.preUserData.LAST_NAME_THAI,
          AGE: this.preUserData.AGE,
          STD_CODE: this.preUserData.STD_CODE,
          MAJOR_NO: this.preUserData.MAJOR_NO,
          FACULTY_NO: this.preUserData.FACUTY_NO,
          // INSERT_STATUS: 'true'
        });

        this.PRENAME_THAI = this.preUserData.PRENAME_THAI;

        this.MAJOR_NAME_THAI = this.preUserData.MAJOR_NAME_THAI;
        this.FACULTY_NAME_THAI = this.preUserData.FACULTY_NAME_THAI;

        this.CHOICES_OF_ALL_DISTRICT = response.CHOICES_OF_ALL_DISTRICT;
        this.CHOICES_OF_DISTRICT = response.CHOICES_OF_DISTRICT;
        this.CHOICES_OF_AMPHUR = response.CHOICES_OF_AMPHUR;
        this.CHOICES_OF_PROVINCE = response.CHOICES_OF_PROVINCE;
        this.CHOICES_OF_POSTCODE = response.CHOICES_OF_POSTCODE;

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

    }, error => {

      this.handlesErrors(error.status);

    });

    //-- Check ว่าเคยทำแบบสอบถามแล้วหรือไม่
    //-- ใช่เคย ทำการ Set value ให้ตัวแปร UPDATE_STATUS = "ture" และ INSERT_STATUS = ""
    //-- ไม่เคย ทำการ Set value ให้ตัวแปร INSERT_STATUS = "ture" และ UPDATE_STATUS = ""

    await this.questionService.getHttpCheckInsertBefore(this.preUserData.STD_CODE).subscribe(responses => {

      if (responses.UPDATE_STATUS == "true") {

        this.TEMP_DISTRICT_NAME = responses.QN_WORK_TAMBON == 'null' ? '' : responses.QN_WORK_TAMBON;
        this.TEMP_AMPHUR_NAME = responses.QN_WORK_AMPHUR == 'null' ? '' : responses.QN_WORK_AMPHUR;
        this.QN_WORK_PROVINCE_NAME = responses.QN_WORK_PROVINCE_NAME == 'null' ? '' : responses.QN_WORK_PROVINCE_NAME;
        this.TEMP_POSTCODE = responses.QN_WORK_ZIPCODE == 'null' ? '' : responses.QN_WORK_ZIPCODE;

        this.questionValueForm.setValue({
          STD_CODE: responses.STD_CODE == 'null' ? '' : responses.STD_CODE,
          PRENAME_NO: responses.PRENAME_NO == 'null' ? '' : responses.PRENAME_NO,
          FIRST_NAME_THAI: responses.FIRST_NAME_THAI == 'null' ? '' : responses.FIRST_NAME_THAI,
          LAST_NAME_THAI: responses.LAST_NAME_THAI == 'null' ? '' : responses.LAST_NAME_THAI,
          AGE: responses.AGE == 'null' ? '' : responses.AGE,
          GENDER_NO: responses.GENDER_NO == 'null' ? '' : responses.GENDER_NO,
          FACULTY_NO: responses.FACULTY_NO == 'null' ? '' : responses.FACULTY_NO,
          MAJOR_NO: responses.MAJOR_NO == 'null' ? '' : responses.MAJOR_NO,
          STD_TYPE: responses.STD_TYPE == 'null' ? '' : responses.STD_TYPE,
          STD_STUDY_TIME: responses.STD_STUDY_TIME == 'null' ? '' : responses.STD_STUDY_TIME,
          STD_FUND: responses.STD_FUND == 'null' ? '' : responses.STD_FUND,
          BE_WORK_STATUS: responses.BE_WORK_STATUS == 'null' ? '' : responses.BE_WORK_STATUS,
          BE_WORK_STATUS_TXT: responses.BE_WORK_STATUS_TXT == 'null' ? '' : responses.BE_WORK_STATUS_TXT,
          QN_WORK_STATUS: responses.QN_WORK_STATUS == 'null' ? '' : responses.QN_WORK_STATUS,
          QN_WORK_STATUS_NO_TXT: responses.QN_WORK_STATUS_NO_TXT == 'null' ? '' : responses.QN_WORK_STATUS_NO_TXT,
          QN_WORK_STATUS_ED_TXT: responses.QN_WORK_STATUS_ED_TXT == 'null' ? '' : responses.QN_WORK_STATUS_ED_TXT,
          QN_OCCUP_TYPE: responses.QN_OCCUP_TYPE == 'null' ? '' : responses.QN_OCCUP_TYPE,
          QN_OCCUP_TYPE_TXT: responses.QN_OCCUP_TYPE_TXT == 'null' ? '' : responses.QN_OCCUP_TYPE_TXT,
          QN_SALARY: responses.QN_SALARY == 'null' ? '' : responses.QN_SALARY,
          QN_WORK_SALARY: responses.QN_WORK_SALARY == 'null' ? '' : responses.QN_WORK_SALARY,
          QN_WORK_NAME: responses.QN_WORK_NAME == 'null' ? '' : responses.QN_WORK_NAME,
          QN_WORK_NO: responses.QN_WORK_NO == 'null' ? '' : responses.QN_WORK_NO,
          QN_WORK_MOO: responses.QN_WORK_MOO == 'null' ? '' : responses.QN_WORK_MOO,
          QN_WORK_BUILDING: responses.QN_WORK_BUILDING == 'null' ? '' : responses.QN_WORK_BUILDING,
          QN_WORK_FLOOR: responses.QN_WORK_FLOOR == 'null' ? '' : responses.QN_WORK_FLOOR,
          QN_WORK_SOI: responses.QN_WORK_SOI == 'null' ? '' : responses.QN_WORK_SOI,
          QN_WORK_STREET: responses.QN_WORK_STREET == 'null' ? '' : responses.QN_WORK_STREET,
          QN_WORK_TAMBON: responses.QN_WORK_TAMBON == 'null' ? '' : responses.QN_WORK_TAMBON,
          QN_WORK_AMPHUR: responses.QN_WORK_AMPHUR == 'null' ? '' : responses.QN_WORK_AMPHUR,
          QN_WORK_PROVINCE_NO: responses.QN_WORK_PROVINCE_NO == 'null' ? '' : responses.QN_WORK_PROVINCE_NO,
          QN_WORK_ZIPCODE: responses.QN_WORK_ZIPCODE == 'null' ? '' : responses.QN_WORK_ZIPCODE,
          QN_WORK_TEL: responses.QN_WORK_TEL == 'null' ? '' : responses.QN_WORK_TEL,
          QN_WORK_FAX: responses.QN_WORK_FAX == 'null' ? '' : responses.QN_WORK_FAX,
          QN_WORK_URL: responses.QN_WORK_URL == 'null' ? '' : responses.QN_WORK_URL,
          AF_FIND_WORK: responses.AF_FIND_WORK == 'null' ? '' : responses.AF_FIND_WORK,
          QN_MATCH_EDU: responses.QN_MATCH_EDU == 'null' ? '' : responses.QN_MATCH_EDU,
          QN_WORK_APPLY: responses.QN_WORK_APPLY == 'null' ? '' : responses.QN_WORK_APPLY,
          QN_EMPLOYER: responses.QN_EMPLOYER == 'null' ? '' : responses.QN_EMPLOYER,
          QN_AWARD: responses.QN_AWARD == 'null' ? '' : responses.QN_AWARD,
          QN_AWARD_TXT: responses.QN_AWARD_TXT == 'null' ? '' : responses.QN_AWARD_TXT,
          QN_AWARD_INSTITUTE: responses.QN_AWARD_INSTITUTE == 'null' ? '' : responses.QN_AWARD_INSTITUTE,
          QN_AWARD_MMYYYY: responses.QN_AWARD_MMYYYY == 'null' ? '' : responses.QN_AWARD_MMYYYY,
          QN_ADDPROGRAM2: responses.QN_ADDPROGRAM2 == 'null' ? '' : responses.QN_ADDPROGRAM2,
          QN_ADDPROGRAM1: responses.QN_ADDPROGRAM1 == 'null' ? '' : responses.QN_ADDPROGRAM1,
          QN_ADDPROGRAM3: responses.QN_ADDPROGRAM3 == 'null' ? '' : responses.QN_ADDPROGRAM3,
          QN_ADDPROGRAM4: responses.QN_ADDPROGRAM4 == 'null' ? '' : responses.QN_ADDPROGRAM4,
          QN_ADDPROGRAM5: responses.QN_ADDPROGRAM5 == 'null' ? '' : responses.QN_ADDPROGRAM5,
          QN_ADDPROGRAM6: responses.QN_ADDPROGRAM6 == 'null' ? '' : responses.QN_ADDPROGRAM6,
          QN_COMMENT_PROGRAM: responses.QN_COMMENT_PROGRAM == 'null' ? '' : responses.QN_COMMENT_PROGRAM,
          QN_COMMENT_LEARN: responses.QN_COMMENT_LEARN == 'null' ? '' : responses.QN_COMMENT_LEARN,
          QN_COMMENT_SOCIAL: responses.QN_COMMENT_SOCIAL == 'null' ? '' : responses.QN_COMMENT_SOCIAL,
          QN_COMMENT_ACTIVITY: responses.QN_COMMENT_ACTIVITY == 'null' ? '' : responses.QN_COMMENT_ACTIVITY,
          QN_COMMENT_LOCATION: responses.QN_COMMENT_LOCATION == 'null' ? '' : responses.QN_COMMENT_LOCATION,
          QN_DATE_UPDATE: responses.QN_DATE_UPDATE == 'null' ? '' : responses.QN_DATE_UPDATE,
          INSERT_STATUS: responses.INSERT_STATUS == 'null' ? '' : responses.INSERT_STATUS,
          UPDATE_STATUS: responses.UPDATE_STATUS == null ? '' : responses.UPDATE_STATUS,
        });

        this.PRENAME_THAI = this.preUserData.PRENAME_THAI;

        this.CHECKED_QN_ADDPROGRAM1 = this.questionValueForm.controls['QN_ADDPROGRAM1'].value;
        this.CHECKED_QN_ADDPROGRAM2 = this.questionValueForm.controls['QN_ADDPROGRAM2'].value;
        this.CHECKED_QN_ADDPROGRAM3 = this.questionValueForm.controls['QN_ADDPROGRAM3'].value;
        this.CHECKED_QN_ADDPROGRAM4 = this.questionValueForm.controls['QN_ADDPROGRAM4'].value;
        this.CHECKED_QN_ADDPROGRAM5 = this.questionValueForm.controls['QN_ADDPROGRAM5'].value;
        this.CHECKED_QN_ADDPROGRAM6 = this.questionValueForm.controls['QN_ADDPROGRAM6'].value;

        this.clearValidatorsAll_QA_ADDPROGRAM();

        registerLocaleData(localeTh, 'th');
        let pipe = new DatePipe('th-TH');
        let nowYear = (new Date()).getFullYear();
        let fakeYearTH = (nowYear + 543);
        let dateNewFormat = pipe.transform(this.questionValueForm.controls['QN_DATE_UPDATE'].value.toString(), 'dd MMM' + fakeYearTH + ' เวลา hh:mm:ss', 'th').toString();

        const title = 'แบบสำรวจภาวะการมีงานทำ';
        const message = `คุณลงทะเบียนเมื่อ: ${dateNewFormat}`;
        const description = 'คุณสามารถแก้ไข แบบสำรวจได้ด้วยตนเอง หรือเข้าดูรายละเอียดที่ลงทะเบียนไว้ได้';
        const descriptionDetail = 'ด้วยการ Click ที่ปุ่ม OK';
        const btnLeftDisable = false;
        const btnRightDisable = false;
        const txtBtnLeft = 'CLOSE';
        const txtBtnRight = 'OK';
        const dialogData = new ConfirmDialogModel(title, message, description, descriptionDetail, btnLeftDisable, btnRightDisable, txtBtnLeft, txtBtnRight);
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
          data: dialogData
        });

        dialogRef.afterClosed().subscribe(dialogResult => {

          this.dialog_confirm_result = dialogResult;
          if (!this.dialog_confirm_result) {

            this.router.navigate(['/login']);

          }

        });


      } else {

        this.questionValueForm.patchValue({ INSERT_STATUS: responses.INSERT_STATUS });

      }

    }, errors => {

      this.handlesErrors(errors.status);

    });

  }

  //-- จัดการส่วนของ Checked Box ( Ueser สามารถเลือก Checked Box ได้มากกว่า 1)
  async checkBoxvalueQN_ADDPROGRAM1(event) {

    if (event.checked) {

      await this.questionValueForm.controls['QN_ADDPROGRAM1'].patchValue('1');

      if (
        this.questionValueForm.controls['QN_ADDPROGRAM1'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM2'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM3'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM4'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM5'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM6'].value) {

        await this.clearValidators_QA_ADDPROGRAM2();
        await this.clearValidators_QA_ADDPROGRAM3();
        await this.clearValidators_QA_ADDPROGRAM4();
        await this.clearValidators_QA_ADDPROGRAM5();
        await this.clearValidators_QA_ADDPROGRAM6();
      }

    } else {

      await this.questionValueForm.controls['QN_ADDPROGRAM1'].patchValue('');

      if (
        this.questionValueForm.controls['QN_ADDPROGRAM1'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM2'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM3'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM4'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM5'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM6'].value.length === 0) {

        await this.setValidators_QA_ADDPROGRAM2();
        await this.setValidators_QA_ADDPROGRAM3();
        await this.setValidators_QA_ADDPROGRAM4();
        await this.setValidators_QA_ADDPROGRAM5();
        await this.setValidators_QA_ADDPROGRAM6();

      } else {

        await this.clearValidatorsAll_QA_ADDPROGRAM();

      }
    }

  }

  async checkBoxvalueQN_ADDPROGRAM2(event) {

    if (event.checked) {

      await this.questionValueForm.controls['QN_ADDPROGRAM2'].patchValue('2');

      if (
        this.questionValueForm.controls['QN_ADDPROGRAM1'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM2'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM3'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM4'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM5'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM6'].value) {

        await this.clearValidators_QA_ADDPROGRAM1();
        await this.clearValidators_QA_ADDPROGRAM3();
        await this.clearValidators_QA_ADDPROGRAM4();
        await this.clearValidators_QA_ADDPROGRAM5();
        await this.clearValidators_QA_ADDPROGRAM6();

      }

    } else {

      await this.questionValueForm.controls['QN_ADDPROGRAM2'].patchValue('');

      if (
        this.questionValueForm.controls['QN_ADDPROGRAM1'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM2'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM3'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM4'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM5'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM6'].value.length === 0) {

        await this.setValidators_QA_ADDPROGRAM1();
        await this.setValidators_QA_ADDPROGRAM3();
        await this.setValidators_QA_ADDPROGRAM4();
        await this.setValidators_QA_ADDPROGRAM5();
        await this.setValidators_QA_ADDPROGRAM6();

      } else {

        await this.clearValidatorsAll_QA_ADDPROGRAM();
      }
    }

  }

  async checkBoxvalueQN_ADDPROGRAM3(event) {
    if (event.checked) {

      await this.questionValueForm.controls['QN_ADDPROGRAM3'].patchValue('3');

      if (
        this.questionValueForm.controls['QN_ADDPROGRAM1'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM2'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM3'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM4'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM5'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM6'].value) {

        await this.clearValidators_QA_ADDPROGRAM1();
        await this.clearValidators_QA_ADDPROGRAM2();
        await this.clearValidators_QA_ADDPROGRAM4();
        await this.clearValidators_QA_ADDPROGRAM5();
        await this.clearValidators_QA_ADDPROGRAM6();
      }

    } else {

      await this.questionValueForm.controls['QN_ADDPROGRAM3'].patchValue('');

      if (
        this.questionValueForm.controls['QN_ADDPROGRAM1'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM2'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM3'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM4'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM5'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM6'].value.length === 0) {

        await this.setValidators_QA_ADDPROGRAM1();
        await this.setValidators_QA_ADDPROGRAM2();
        await this.setValidators_QA_ADDPROGRAM4();
        await this.setValidators_QA_ADDPROGRAM5();
        await this.setValidators_QA_ADDPROGRAM6();

      } else {

        await this.clearValidatorsAll_QA_ADDPROGRAM();

      }
    }

  }

  async checkBoxvalueQN_ADDPROGRAM4(event) {

    if (event.checked) {

      await this.questionValueForm.controls['QN_ADDPROGRAM4'].patchValue('4');

      if (
        this.questionValueForm.controls['QN_ADDPROGRAM1'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM2'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM3'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM4'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM5'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM6'].value) {

        await this.clearValidators_QA_ADDPROGRAM1();
        await this.clearValidators_QA_ADDPROGRAM2();
        await this.clearValidators_QA_ADDPROGRAM3();
        await this.clearValidators_QA_ADDPROGRAM5();
        await this.clearValidators_QA_ADDPROGRAM6();

      }

    } else {

      await this.questionValueForm.controls['QN_ADDPROGRAM4'].patchValue('');

      if (
        this.questionValueForm.controls['QN_ADDPROGRAM1'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM2'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM3'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM4'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM5'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM6'].value.length === 0) {

        await this.setValidators_QA_ADDPROGRAM1();
        await this.setValidators_QA_ADDPROGRAM2();
        await this.setValidators_QA_ADDPROGRAM3();
        await this.setValidators_QA_ADDPROGRAM5();
        await this.setValidators_QA_ADDPROGRAM6();

      } else {

        await this.clearValidatorsAll_QA_ADDPROGRAM();

      }
    }

  }

  async checkBoxvalueQN_ADDPROGRAM5(event) {

    if (event.checked) {

      await this.questionValueForm.controls['QN_ADDPROGRAM5'].patchValue('5');

      if (
        this.questionValueForm.controls['QN_ADDPROGRAM1'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM2'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM3'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM4'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM5'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM6'].value) {

        await this.clearValidators_QA_ADDPROGRAM1();
        await this.clearValidators_QA_ADDPROGRAM2();
        await this.clearValidators_QA_ADDPROGRAM3();
        await this.clearValidators_QA_ADDPROGRAM4();
        await this.clearValidators_QA_ADDPROGRAM6();

      }

    } else {

      this.questionValueForm.controls['QN_ADDPROGRAM5'].patchValue('');

      if (
        this.questionValueForm.controls['QN_ADDPROGRAM1'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM2'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM3'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM4'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM5'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM6'].value.length === 0) {

        await this.setValidators_QA_ADDPROGRAM1();
        await this.setValidators_QA_ADDPROGRAM2();
        await this.setValidators_QA_ADDPROGRAM3();
        await this.setValidators_QA_ADDPROGRAM4();
        await this.setValidators_QA_ADDPROGRAM6();

      } else {

        await this.clearValidatorsAll_QA_ADDPROGRAM();

      }
    }

  }

  async checkBoxvalueQN_ADDPROGRAM6(event) {

    if (event.checked) {

      await this.questionValueForm.controls['QN_ADDPROGRAM6'].patchValue('6');

      if (
        this.questionValueForm.controls['QN_ADDPROGRAM1'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM2'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM3'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM4'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM5'].value ||
        this.questionValueForm.controls['QN_ADDPROGRAM6'].value) {

        await this.clearValidators_QA_ADDPROGRAM1();
        await this.clearValidators_QA_ADDPROGRAM2();
        await this.clearValidators_QA_ADDPROGRAM3();
        await this.clearValidators_QA_ADDPROGRAM4();
        await this.clearValidators_QA_ADDPROGRAM5();

      }

    } else {

      await this.questionValueForm.controls['QN_ADDPROGRAM6'].patchValue('');

      if (
        this.questionValueForm.controls['QN_ADDPROGRAM1'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM2'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM3'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM4'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM5'].value.length === 0 &&
        this.questionValueForm.controls['QN_ADDPROGRAM6'].value.length === 0) {

        await this.setValidators_QA_ADDPROGRAM1();
        await this.setValidators_QA_ADDPROGRAM2();
        await this.setValidators_QA_ADDPROGRAM3();
        await this.setValidators_QA_ADDPROGRAM4();
        await this.setValidators_QA_ADDPROGRAM5();

      } else {

        await this.clearValidatorsAll_QA_ADDPROGRAM();

      }
    }

  }

  setValidators_QA_ADDPROGRAM1() {

    this.questionValueForm.controls['QN_ADDPROGRAM1'].patchValue('');
    this.questionValueForm.controls['QN_ADDPROGRAM1'].setValidators([Validators.required]);
    this.questionValueForm.controls['QN_ADDPROGRAM1'].updateValueAndValidity();

  }

  setValidators_QA_ADDPROGRAM2() {

    this.questionValueForm.controls['QN_ADDPROGRAM2'].patchValue('');
    this.questionValueForm.controls['QN_ADDPROGRAM2'].setValidators([Validators.required]);
    this.questionValueForm.controls['QN_ADDPROGRAM2'].updateValueAndValidity();

  }

  setValidators_QA_ADDPROGRAM3() {

    this.questionValueForm.controls['QN_ADDPROGRAM3'].patchValue('');
    this.questionValueForm.controls['QN_ADDPROGRAM3'].setValidators([Validators.required]);
    this.questionValueForm.controls['QN_ADDPROGRAM3'].updateValueAndValidity();

  }

  setValidators_QA_ADDPROGRAM4() {

    this.questionValueForm.controls['QN_ADDPROGRAM4'].patchValue('');
    this.questionValueForm.controls['QN_ADDPROGRAM4'].setValidators([Validators.required]);
    this.questionValueForm.controls['QN_ADDPROGRAM4'].updateValueAndValidity();

  }

  setValidators_QA_ADDPROGRAM5() {

    this.questionValueForm.controls['QN_ADDPROGRAM5'].patchValue('');
    this.questionValueForm.controls['QN_ADDPROGRAM5'].setValidators([Validators.required]);
    this.questionValueForm.controls['QN_ADDPROGRAM5'].updateValueAndValidity();

  }

  setValidators_QA_ADDPROGRAM6() {

    this.questionValueForm.controls['QN_ADDPROGRAM6'].patchValue('');
    this.questionValueForm.controls['QN_ADDPROGRAM6'].setValidators([Validators.required]);
    this.questionValueForm.controls['QN_ADDPROGRAM6'].updateValueAndValidity();

  }

  clearValidatorsAll_QA_ADDPROGRAM() {

    this.questionValueForm.controls['QN_ADDPROGRAM1'].clearValidators();
    this.questionValueForm.controls['QN_ADDPROGRAM1'].updateValueAndValidity();

    this.questionValueForm.controls['QN_ADDPROGRAM2'].clearValidators();
    this.questionValueForm.controls['QN_ADDPROGRAM2'].updateValueAndValidity();

    this.questionValueForm.controls['QN_ADDPROGRAM3'].clearValidators();
    this.questionValueForm.controls['QN_ADDPROGRAM3'].updateValueAndValidity();

    this.questionValueForm.controls['QN_ADDPROGRAM4'].clearValidators();
    this.questionValueForm.controls['QN_ADDPROGRAM4'].updateValueAndValidity();

    this.questionValueForm.controls['QN_ADDPROGRAM5'].clearValidators();
    this.questionValueForm.controls['QN_ADDPROGRAM5'].updateValueAndValidity();

    this.questionValueForm.controls['QN_ADDPROGRAM6'].clearValidators();
    this.questionValueForm.controls['QN_ADDPROGRAM6'].updateValueAndValidity();

  }

  clearValidators_QA_ADDPROGRAM1() {

    this.questionValueForm.controls['QN_ADDPROGRAM1'].clearValidators();
    this.questionValueForm.controls['QN_ADDPROGRAM1'].updateValueAndValidity();

  }

  clearValidators_QA_ADDPROGRAM2() {

    this.questionValueForm.controls['QN_ADDPROGRAM2'].clearValidators();
    this.questionValueForm.controls['QN_ADDPROGRAM2'].updateValueAndValidity();

  }

  clearValidators_QA_ADDPROGRAM3() {

    this.questionValueForm.controls['QN_ADDPROGRAM3'].clearValidators();
    this.questionValueForm.controls['QN_ADDPROGRAM3'].updateValueAndValidity();

  }

  clearValidators_QA_ADDPROGRAM4() {

    this.questionValueForm.controls['QN_ADDPROGRAM4'].clearValidators();
    this.questionValueForm.controls['QN_ADDPROGRAM4'].updateValueAndValidity();

  }

  clearValidators_QA_ADDPROGRAM5() {

    this.questionValueForm.controls['QN_ADDPROGRAM5'].clearValidators();
    this.questionValueForm.controls['QN_ADDPROGRAM5'].updateValueAndValidity();

  }

  clearValidators_QA_ADDPROGRAM6() {

    this.questionValueForm.controls['QN_ADDPROGRAM6'].clearValidators();
    this.questionValueForm.controls['QN_ADDPROGRAM6'].updateValueAndValidity();

  }

  //-- ส่วนของการ Binding Data ระหว่าง Template กับ Component แบบ Realtime
  //-- เอาไว้เรียกดูค่า Validators สำหรับจัดการ Required
  get fbValidation() { return this.questionValueForm.controls; }

  //-- ส่งข้อมูลไป Insert หรือ Update
  async onSubmit() {

    //-- Assignment values ทั้งหมดที่ได้จากการ เลือกคำตอบของ User
    //-- Assignment values จาก FromBuilderGroup ให้กับ Interface

    this.postUserData = await {
      STD_CODE: this.questionValueForm.get('STD_CODE').value,
      PRENAME_NO: this.questionValueForm.get('PRENAME_NO').value,
      FIRST_NAME_THAI: this.questionValueForm.get('FIRST_NAME_THAI').value,
      LAST_NAME_THAI: this.questionValueForm.get('LAST_NAME_THAI').value,
      AGE: this.questionValueForm.get('AGE').value,
      GENDER_NO: this.questionValueForm.get('GENDER_NO').value,
      FACULTY_NO: this.questionValueForm.get('FACULTY_NO').value,
      MAJOR_NO: this.questionValueForm.get('MAJOR_NO').value,
      STD_TYPE: this.questionValueForm.get('STD_TYPE').value,
      STD_STUDY_TIME: this.questionValueForm.get('STD_STUDY_TIME').value,
      STD_FUND: this.questionValueForm.get('STD_FUND').value,
      BE_WORK_STATUS: this.questionValueForm.get('BE_WORK_STATUS').value,
      BE_WORK_STATUS_TXT: this.questionValueForm.get('BE_WORK_STATUS_TXT').value,
      QN_WORK_STATUS: this.questionValueForm.get('QN_WORK_STATUS').value,
      QN_WORK_STATUS_NO_TXT: this.questionValueForm.get('QN_WORK_STATUS_NO_TXT').value,
      QN_WORK_STATUS_ED_TXT: this.questionValueForm.get('QN_WORK_STATUS_ED_TXT').value,
      QN_OCCUP_TYPE: this.questionValueForm.get('QN_OCCUP_TYPE').value,
      QN_OCCUP_TYPE_TXT: this.questionValueForm.get('QN_OCCUP_TYPE_TXT').value,
      QN_SALARY: this.questionValueForm.get('QN_SALARY').value,
      QN_WORK_SALARY: this.questionValueForm.get('QN_WORK_SALARY').value,
      QN_WORK_NAME: this.questionValueForm.get('QN_WORK_NAME').value,
      QN_WORK_NO: this.questionValueForm.get('QN_WORK_NO').value,
      QN_WORK_MOO: this.questionValueForm.get('QN_WORK_MOO').value,
      QN_WORK_BUILDING: this.questionValueForm.get('QN_WORK_BUILDING').value,
      QN_WORK_FLOOR: this.questionValueForm.get('QN_WORK_FLOOR').value,
      QN_WORK_SOI: this.questionValueForm.get('QN_WORK_SOI').value,
      QN_WORK_STREET: this.questionValueForm.get('QN_WORK_STREET').value,
      QN_WORK_TAMBON: this.TEMP_DISTRICT_NAME,
      QN_WORK_AMPHUR: this.TEMP_AMPHUR_NAME,
      QN_WORK_PROVINCE_NAME: this.TEMP_DISTRICT_NAME,
      QN_WORK_PROVINCE_NO: this.TEMP_PROVINCE_NAME,
      QN_WORK_ZIPCODE: this.TEMP_POSTCODE,
      QN_WORK_TEL: this.questionValueForm.get('QN_WORK_TEL').value,
      QN_WORK_FAX: this.questionValueForm.get('QN_WORK_FAX').value,
      QN_WORK_URL: this.questionValueForm.get('QN_WORK_URL').value,
      AF_FIND_WORK: this.questionValueForm.get('AF_FIND_WORK').value,
      QN_MATCH_EDU: this.questionValueForm.get('QN_MATCH_EDU').value,
      QN_WORK_APPLY: this.questionValueForm.get('QN_WORK_APPLY').value,
      QN_EMPLOYER: this.questionValueForm.get('QN_EMPLOYER').value,
      QN_AWARD: this.questionValueForm.get('QN_AWARD').value,
      QN_AWARD_TXT: this.questionValueForm.get('QN_AWARD_TXT').value,
      QN_AWARD_INSTITUTE: this.questionValueForm.get('QN_AWARD_INSTITUTE').value,
      QN_AWARD_MMYYYY: this.questionValueForm.get('QN_AWARD_MMYYYY').value,
      QN_ADDPROGRAM2: this.questionValueForm.get('QN_ADDPROGRAM2').value,
      QN_ADDPROGRAM1: this.questionValueForm.get('QN_ADDPROGRAM1').value,
      QN_ADDPROGRAM3: this.questionValueForm.get('QN_ADDPROGRAM3').value,
      QN_ADDPROGRAM4: this.questionValueForm.get('QN_ADDPROGRAM4').value,
      QN_ADDPROGRAM5: this.questionValueForm.get('QN_ADDPROGRAM5').value,
      QN_ADDPROGRAM6: this.questionValueForm.get('QN_ADDPROGRAM6').value,
      QN_COMMENT_PROGRAM: this.questionValueForm.get('QN_COMMENT_PROGRAM').value,
      QN_COMMENT_LEARN: this.questionValueForm.get('QN_COMMENT_LEARN').value,
      QN_COMMENT_SOCIAL: this.questionValueForm.get('QN_COMMENT_SOCIAL').value,
      QN_COMMENT_ACTIVITY: this.questionValueForm.get('QN_COMMENT_ACTIVITY').value,
      QN_COMMENT_LOCATION: this.questionValueForm.get('QN_COMMENT_LOCATION').value,
      QN_DATE_UPDATE: this.questionValueForm.get('QN_DATE_UPDATE').value,
      INSERT_STATUS: this.questionValueForm.get('INSERT_STATUS').value,
      UPDATE_STATUS: this.questionValueForm.get('UPDATE_STATUS').value
    };

    //-- ส่งข้อมูลไปยัง Service เพื่อ Insert หรือ Update ข้อมูล
    await this.questionService.postHttpQuestions(this.postUserData).subscribe(responsePost => {

      //-- Successfully
      if (responsePost.error_question_insert_update_message_status == 1) {

        //-- ********** สำเร็จ แจ้งด้วย Dialog และจบการทำงาน Redirect to Login ******** --//
        const title = 'บันทึกแบบสำรวจเรียบร้อย';
        const message = `ทำการบันทึก แบบสำรวจเรียบร้อยแล้วครับ`;
        const description = 'หากคุณต้องการแก้ไข หรือต้องการดูรายละเอียดแบบสำรวจของคุณ สามารถทำได้ด้วยการ Login อีกครั้ง';
        const descriptionDetail = '';
        const btnLeftDisable = false;
        const btnRightDisable = false;
        const txtBtnLeft = 'CLOSE';
        const txtBtnRight = 'OK';
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


      } else {

        //-- กรณีนี้จะเป็น ตัวแปรไม่สมบูณร์ จะเข้า Condition นี้
        this.handlesErrors(responsePost.error_question_insert_update_message_status);

      }

    }, error => {

      this.handlesErrors(error.status);

    });

  }

  //-- ส่วนของการจัดการ Errors Handles ทั้งหมดใน Componemt
  public handlesErrors(_handle_error: any): void {

    if (_handle_error == 404) {

      this.router.navigate(['/errors-handles/error-not-found']);

    } else if (_handle_error == 500) {

      this.router.navigate(['/errors-handles/error-internal-server']);

    } else {

      this.router.navigate(['/errors-handles/error-another']);

    }

  }

  //-- ยืนยันการ Logout ออกจากระบบ
  logoutConfirmDialog(): void {

    const title = `Logout`;
    const message = `คุณต้องการที่จะออกจากระบบใช่หรือไม่`;
    const description = `หากคุณออกจากหน้าเพจการทำงานนี้ ข้อมูลที่คุณทำการกรอกไว้จะไม่ถูกบันทึก !`;
    const descriptionDetail = '';
    const btnLeftDisable = false;
    const btnRightDisable = false;
    const txtBtnLeft = 'CLOSE';
    const txtBtnRight = 'OK';
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


}// -- End Componemt

