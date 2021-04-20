import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { userResponseDataInterface } from '../login/user-response-data';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { questionSetInterface_M_Data } from './question-set-interface-m-data';
import { QuestionNaireService } from '../services/question-naire.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../confirm-dialog/confirm-dialog.component';
import { districtAll_M_Interface, district_M_Interface, amphur_M_Interface, province_M_Interface, postcode_M_Interface, regional_M_Interface } from './question-response-m-data';
import { registerLocaleData, DatePipe } from '@angular/common';
import localeTh from '@angular/common/locales/th';
import { CheckOpenCloseService } from '../services/check-open-close.service';

@Component({
  selector: 'app-question-naire-m',
  templateUrl: './question-naire-m.component.html',
  styleUrls: ['./question-naire-m.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuestionNaireMComponent implements OnInit {

  preUserData: userResponseDataInterface;
  postUserData: questionSetInterface_M_Data;

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
    QN_PLAN_NO: ['', Validators.required],
    STD_STUDY_TIME: ['', Validators.required],
    REGIONAL_NO: [''],
    BE_WORK_STATUS: ['', Validators.required],
    CAMPUS_NO: ['', Validators.required],
    QN_WORK_STATUS: ['', Validators.required],
    QN_OCCUP_TYPE: ['', Validators.required],
    QN_OCCUP_TYPE_TXT: [''],
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
    QN_MATCH_EDU: ['', Validators.required],
    QN_WORK_APPLY: ['', Validators.required],
    QN_AWARD: ['', Validators.required],
    QN_AWARD_TXT: [''],
    QN_AWARD_INSTITUTE: [''],
    QN_AWARD_MMYYYY: [''],
    QN_CURR_PROPER: ['', Validators.required],
    QN_CURR_MORAL: ['', Validators.required],
    QN_CURR_CO: ['', Validators.required],
    QN_CURR_INSPIRE: ['', Validators.required],
    QN_CURR_OUTSIDE: ['', Validators.required],
    QN_INS_CONTENT: ['', Validators.required],
    QN_INS_ONTIME: ['', Validators.required],
    QN_INS_KNOWLEDGE: ['', Validators.required],
    QN_INS_EXTENSIVE: ['', Validators.required],
    QN_INS_ETHICS: ['', Validators.required],
    QN_INS_LUCID: ['', Validators.required],
    QN_MEDIA_MODERN: ['', Validators.required],
    QN_MEDIA_ACC: ['', Validators.required],
    QN_MEDIA_NETWORK: ['', Validators.required],
    QN_MEDIA_DOC: ['', Validators.required],
    QN_MEDIA_FULLY: ['', Validators.required],
    QN_ROOM_STUDY: [''],
    QN_ROOM_OVERVIEW: ['', Validators.required],
    QN_ROOM_CLEAN: ['', Validators.required],
    QN_ROOM_SIZE: ['', Validators.required],
    QN_ROOM_LIBRARY: ['', Validators.required],
    QN_ROOM_SAFETY: ['', Validators.required],
    QN_OFFER: [''],
    QN_UPDATE_DATE: [''],
    INSERT_STATUS: [''],
    UPDATE_STATUS: ['']
  });

  MAJOR_NAME_THAI: string;
  FACULTY_NAME_THAI: string;
  PRENAME_THAI: string;

  QUIZ_HEADER: string;
  SECTION_NAME_ID_1: string;
  SECTION_NAME_ID_2: string;
  SECTION_NAME_ID_3: string;

  QUESTION_DETAIL_ID_2: string;
  CHOICES_OF_QUESTION_ID_2_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_2_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_2_VALUE_3: string;

  QUESTION_DETAIL_ID_4: string; CHOICES_OF_QUESTION_ID_4_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_4_VALUE_2: string;


  QUESTION_DETAIL_ID_6: string;
  CHOICES_OF_QUESTION_ID_6_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_6_VALUE_2: string;

  QUESTION_DETAIL_ID_7: string;
  CHOICES_OF_QUESTION_ID_7_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_7_VALUE_2: string;

  QUESTION_DETAIL_ID_8: string;
  CHOICES_OF_QUESTION_ID_8_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_8_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_8_VALUE_3: string;

  QUESTION_DETAIL_ID_9: string;
  CHOICES_OF_QUESTION_ID_9_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_9_VALUE_2: string;

  QUESTION_DETAIL_ID_10: string;
  CHOICES_OF_QUESTION_ID_10_VALUE_1_1: string;
  CHOICES_OF_QUESTION_ID_10_VALUE_1_2: string;
  CHOICES_OF_QUESTION_ID_10_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_10_VALUE_3: string;

  QUESTION_DETAIL_ID_11: string;
  CHOICES_OF_QUESTION_ID_11_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_11_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_11_VALUE_3: string;
  CHOICES_OF_QUESTION_ID_11_VALUE_4: string;
  CHOICES_OF_QUESTION_ID_11_VALUE_5: string;

  QUESTION_DETAIL_ID_12: string;

  QUESTION_DETAIL_ID_13: string;
  CHOICES_OF_QUESTION_ID_13_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_13_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_13_VALUE_3: string;

  QUESTION_DETAIL_ID_14: string;
  CHOICES_OF_QUESTION_ID_14_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_14_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_14_VALUE_3: string;
  CHOICES_OF_QUESTION_ID_14_VALUE_4: string;
  CHOICES_OF_QUESTION_ID_14_VALUE_5: string;

  QUESTION_DETAIL_ID_15: string;
  CHOICES_OF_QUESTION_ID_15_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_15_VALUE_2: string;

  QUESTION_DETAIL_ID_311: string;
  CHOICES_OF_QUESTION_ID_111_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_111_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_111_VALUE_3: string;
  CHOICES_OF_QUESTION_ID_111_VALUE_4: string;
  CHOICES_OF_QUESTION_ID_111_VALUE_5: string;

  QUESTION_DETAIL_ID_312: string;
  CHOICES_OF_QUESTION_ID_112_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_112_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_112_VALUE_3: string;
  CHOICES_OF_QUESTION_ID_112_VALUE_4: string;
  CHOICES_OF_QUESTION_ID_112_VALUE_5: string;

  QUESTION_DETAIL_ID_313: string;
  CHOICES_OF_QUESTION_ID_113_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_113_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_113_VALUE_3: string;
  CHOICES_OF_QUESTION_ID_113_VALUE_4: string;
  CHOICES_OF_QUESTION_ID_113_VALUE_5: string;

  QUESTION_DETAIL_ID_314: string;
  CHOICES_OF_QUESTION_ID_114_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_114_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_114_VALUE_3: string;
  CHOICES_OF_QUESTION_ID_114_VALUE_4: string;
  CHOICES_OF_QUESTION_ID_114_VALUE_5: string;

  QUESTION_DETAIL_ID_315: string;
  CHOICES_OF_QUESTION_ID_115_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_115_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_115_VALUE_3: string;
  CHOICES_OF_QUESTION_ID_115_VALUE_4: string;
  CHOICES_OF_QUESTION_ID_115_VALUE_5: string;

  QUESTION_DETAIL_ID_321: string;
  CHOICES_OF_QUESTION_ID_221_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_221_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_221_VALUE_3: string;
  CHOICES_OF_QUESTION_ID_221_VALUE_4: string;
  CHOICES_OF_QUESTION_ID_221_VALUE_5: string;

  QUESTION_DETAIL_ID_322: string;
  CHOICES_OF_QUESTION_ID_222_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_222_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_222_VALUE_3: string;
  CHOICES_OF_QUESTION_ID_222_VALUE_4: string;
  CHOICES_OF_QUESTION_ID_222_VALUE_5: string;

  QUESTION_DETAIL_ID_323: string;
  CHOICES_OF_QUESTION_ID_223_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_223_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_223_VALUE_3: string;
  CHOICES_OF_QUESTION_ID_223_VALUE_4: string;
  CHOICES_OF_QUESTION_ID_223_VALUE_5: string;

  QUESTION_DETAIL_ID_324: string;
  CHOICES_OF_QUESTION_ID_224_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_224_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_224_VALUE_3: string;
  CHOICES_OF_QUESTION_ID_224_VALUE_4: string;
  CHOICES_OF_QUESTION_ID_224_VALUE_5: string;

  QUESTION_DETAIL_ID_325: string;
  CHOICES_OF_QUESTION_ID_225_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_225_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_225_VALUE_3: string;
  CHOICES_OF_QUESTION_ID_225_VALUE_4: string;
  CHOICES_OF_QUESTION_ID_225_VALUE_5: string;

  QUESTION_DETAIL_ID_326: string;
  CHOICES_OF_QUESTION_ID_226_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_226_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_226_VALUE_3: string;
  CHOICES_OF_QUESTION_ID_226_VALUE_4: string;
  CHOICES_OF_QUESTION_ID_226_VALUE_5: string;

  QUESTION_DETAIL_ID_331: string;
  CHOICES_OF_QUESTION_ID_331_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_331_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_331_VALUE_3: string;
  CHOICES_OF_QUESTION_ID_331_VALUE_4: string;
  CHOICES_OF_QUESTION_ID_331_VALUE_5: string;

  QUESTION_DETAIL_ID_332: string;
  CHOICES_OF_QUESTION_ID_332_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_332_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_332_VALUE_3: string;
  CHOICES_OF_QUESTION_ID_332_VALUE_4: string;
  CHOICES_OF_QUESTION_ID_332_VALUE_5: string;

  QUESTION_DETAIL_ID_333: string;
  CHOICES_OF_QUESTION_ID_333_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_333_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_333_VALUE_3: string;
  CHOICES_OF_QUESTION_ID_333_VALUE_4: string;
  CHOICES_OF_QUESTION_ID_333_VALUE_5: string;

  QUESTION_DETAIL_ID_334: string;
  CHOICES_OF_QUESTION_ID_334_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_334_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_334_VALUE_3: string;
  CHOICES_OF_QUESTION_ID_334_VALUE_4: string;
  CHOICES_OF_QUESTION_ID_334_VALUE_5: string;

  QUESTION_DETAIL_ID_335: string;
  CHOICES_OF_QUESTION_ID_335_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_335_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_335_VALUE_3: string;
  CHOICES_OF_QUESTION_ID_335_VALUE_4: string;
  CHOICES_OF_QUESTION_ID_335_VALUE_5: string;

  QUESTION_DETAIL_ID_441: string;
  CHOICES_OF_QUESTION_ID_441_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_441_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_441_VALUE_3: string;
  CHOICES_OF_QUESTION_ID_441_VALUE_4: string;
  CHOICES_OF_QUESTION_ID_441_VALUE_5: string;

  QUESTION_DETAIL_ID_442: string;
  CHOICES_OF_QUESTION_ID_442_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_442_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_442_VALUE_3: string;
  CHOICES_OF_QUESTION_ID_442_VALUE_4: string;
  CHOICES_OF_QUESTION_ID_442_VALUE_5: string;

  QUESTION_DETAIL_ID_443: string;
  CHOICES_OF_QUESTION_ID_443_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_443_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_443_VALUE_3: string;
  CHOICES_OF_QUESTION_ID_443_VALUE_4: string;
  CHOICES_OF_QUESTION_ID_443_VALUE_5: string;

  QUESTION_DETAIL_ID_444: string;
  CHOICES_OF_QUESTION_ID_444_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_444_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_444_VALUE_3: string;
  CHOICES_OF_QUESTION_ID_444_VALUE_4: string;
  CHOICES_OF_QUESTION_ID_444_VALUE_5: string;

  QUESTION_DETAIL_ID_445: string;
  CHOICES_OF_QUESTION_ID_445_VALUE_1: string;
  CHOICES_OF_QUESTION_ID_445_VALUE_2: string;
  CHOICES_OF_QUESTION_ID_445_VALUE_3: string;
  CHOICES_OF_QUESTION_ID_445_VALUE_4: string;
  CHOICES_OF_QUESTION_ID_445_VALUE_5: string;

  LEV_ID: string;
  question_error_message_status: number;
  question_error_message: string;

  dialog_confirm_result: string = '';

  CHOICES_OF_ALL_DISTRICT: districtAll_M_Interface;
  CHOICES_OF_DISTRICT: district_M_Interface;
  CHOICES_OF_AMPHUR: amphur_M_Interface;
  CHOICES_OF_PROVINCE: province_M_Interface;
  QN_WORK_PROVINCE_NAME: string;
  CHOICES_OF_POSTCODE: postcode_M_Interface;
  CHOICE_OF_REGIONAL: regional_M_Interface;

  isOPEN_CLOSE_Hidden: string = '';

  //-- ส่วนของการ Binding Data ระหว่าง Template กับ Component แบบ Realtime
  //-- เอาไว้เรียกดูค่า Validators สำหรับจัดการ Required
  get fbValidation() { return this.questionValueForm.controls; }

  constructor(
    private questionService: QuestionNaireService,
    private checkOpenCloseService: CheckOpenCloseService,
    public dialog: MatDialog,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.checkOpenCloseService.httpCheckOpenClose().subscribe(responseOpenClose => {

      const _OPEN = 'open';

      if (responseOpenClose.check_open_error_message_status === 1) {

        if (responseOpenClose.CHECK_OPEN === _OPEN) {

          this.isOPEN_CLOSE_Hidden = 'open';

        } else {

          this.isOPEN_CLOSE_Hidden = 'close';

        }

      } else {

        this.handlesErrors(responseOpenClose.check_open_error_message_status);

      }

    }, error => {

      this.handlesErrors(error.status);

    });

    //-- Call API เพื่อไป Query คำถามมาแสดงใน Template
    this.getQuestionTocallApiService();

    this.questionValueForm.controls['CAMPUS_NO'].valueChanges.subscribe(selected => {

      if (selected === '2') {

        this.questionValueForm.controls['REGIONAL_NO'].enable();
        this.questionValueForm.controls['REGIONAL_NO'].setValidators([Validators.required]);
        this.questionValueForm.controls['REGIONAL_NO'].updateValueAndValidity();

      } else {

        this.questionValueForm.controls['REGIONAL_NO'].disable();
        this.questionValueForm.controls['REGIONAL_NO'].clearValidators();
        this.questionValueForm.controls['REGIONAL_NO'].setValue('');
        this.questionValueForm.controls['REGIONAL_NO'].updateValueAndValidity();

      }
    });

    this.questionValueForm.controls['QN_OCCUP_TYPE'].valueChanges.subscribe(selected => {

      if (selected === '5') {

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

    //-- Enable และ Disable ข้อ 11 -> ข้อ 17
    this.questionValueForm.controls['QN_WORK_STATUS'].valueChanges.subscribe(selected => {


      if (selected === '2' || selected === '3') {



        this.isHidden = true;

        this.TEMP_DISTRICT_NAME = '';
        this.TEMP_AMPHUR_NAME = '';
        this.TEMP_PROVINCE_NAME = '';
        this.TEMP_POSTCODE = '';

        this.questionValueForm.controls['QN_OCCUP_TYPE'].setValue('');
        this.questionValueForm.controls['QN_OCCUP_TYPE_TXT'].setValue('');
        this.questionValueForm.controls['QN_WORK_NAME'].setValue('');
        this.questionValueForm.controls['QN_WORK_NO'].setValue('');
        this.questionValueForm.controls['QN_WORK_MOO'].setValue('');
        this.questionValueForm.controls['QN_WORK_BUILDING'].setValue('');
        this.questionValueForm.controls['QN_WORK_FLOOR'].setValue('');
        this.questionValueForm.controls['QN_WORK_SOI'].setValue('');
        this.questionValueForm.controls['QN_WORK_STREET'].setValue('');
        this.questionValueForm.controls['QN_WORK_TAMBON'].setValue('');
        this.questionValueForm.controls['QN_WORK_AMPHUR'].setValue('');
        // แสดง ชื่อ จังหวัด
        this.QN_WORK_PROVINCE_NAME = '';
        // เอาไว้ insert to database ใน db เก็บเป็นตัวเลข
        this.questionValueForm.controls['QN_WORK_PROVINCE_NO'].setValue('');
        this.questionValueForm.controls['QN_WORK_ZIPCODE'].setValue('');
        this.questionValueForm.controls['QN_WORK_TEL'].setValue('');
        this.questionValueForm.controls['QN_MATCH_EDU'].setValue('');
        this.questionValueForm.controls['QN_WORK_APPLY'].setValue('');

        this.questionValueForm.controls['QN_OCCUP_TYPE'].updateValueAndValidity();
        this.questionValueForm.controls['QN_OCCUP_TYPE_TXT'].updateValueAndValidity();
        this.questionValueForm.controls['QN_WORK_NAME'].updateValueAndValidity();
        this.questionValueForm.controls['QN_WORK_NO'].updateValueAndValidity();
        this.questionValueForm.controls['QN_WORK_MOO'].updateValueAndValidity();
        this.questionValueForm.controls['QN_WORK_BUILDING'].updateValueAndValidity();
        this.questionValueForm.controls['QN_WORK_FLOOR'].updateValueAndValidity();
        this.questionValueForm.controls['QN_WORK_SOI'].updateValueAndValidity();
        this.questionValueForm.controls['QN_WORK_STREET'].updateValueAndValidity();
        this.questionValueForm.controls['QN_WORK_TAMBON'].updateValueAndValidity();
        this.questionValueForm.controls['QN_WORK_AMPHUR'].updateValueAndValidity();
        this.questionValueForm.controls['QN_WORK_PROVINCE_NO'].updateValueAndValidity();
        this.questionValueForm.controls['QN_WORK_ZIPCODE'].updateValueAndValidity();
        this.questionValueForm.controls['QN_WORK_TEL'].updateValueAndValidity();
        this.questionValueForm.controls['QN_MATCH_EDU'].updateValueAndValidity();
        this.questionValueForm.controls['QN_WORK_APPLY'].updateValueAndValidity();

        this.questionValueForm.controls['QN_OCCUP_TYPE'].disable();
        this.questionValueForm.controls['QN_OCCUP_TYPE_TXT'].disable();
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
        this.questionValueForm.controls['QN_MATCH_EDU'].disable();
        this.questionValueForm.controls['QN_WORK_APPLY'].disable();

      } else {

        this.isHidden = false;
        this.questionValueForm.controls['QN_OCCUP_TYPE'].enable();
        this.questionValueForm.controls['QN_OCCUP_TYPE'].enable();
        this.questionValueForm.controls['QN_OCCUP_TYPE_TXT'].enable();
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
        this.questionValueForm.controls['QN_MATCH_EDU'].enable();
        this.questionValueForm.controls['QN_WORK_APPLY'].enable();

      }

    });

    //-- ต้องเลือก ตำบล/แขวง ก่อน จึงจะ enable
    this.questionValueForm.controls['QN_WORK_AMPHUR'].disable();
    this.questionValueForm.controls['QN_WORK_PROVINCE_NO'].disable();
    this.questionValueForm.controls['QN_WORK_ZIPCODE'].disable();

  }

  //-- Call API เพื่อไป Query คำถามมาแสดงใน Template
  async getQuestionTocallApiService() {

    //-- Get value and Assignment ให้ตัวแปลประเภท Interface class
    this.preUserData = JSON.parse(sessionStorage.getItem('userSessionStorage'));

    await this.questionService.getHttpQuestionsM(this.preUserData.LEV_ID).subscribe(response => {

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
        this.CHOICE_OF_REGIONAL = response.CHOICES_OF_REGIONAL_CENTER;

        this.QUIZ_HEADER = response.QUIZ_HEADER
        this.SECTION_NAME_ID_1 = response.SECTION_MAIN_HEADER.SECTION_NAME_ID_1;
        this.SECTION_NAME_ID_2 = response.SECTION_MAIN_HEADER.SECTION_NAME_ID_2;
        this.SECTION_NAME_ID_3 = response.SECTION_MAIN_HEADER.SECTION_NAME_ID_3;

        this.QUESTION_DETAIL_ID_2 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_2;
        this.CHOICES_OF_QUESTION_ID_2_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_2_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_2_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_2_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_2_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_2_VALUE_3;

        this.QUESTION_DETAIL_ID_4 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_4;
        this.CHOICES_OF_QUESTION_ID_4_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_4_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_4_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_4_VALUE_1;

        this.QUESTION_DETAIL_ID_6 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_6;
        this.CHOICES_OF_QUESTION_ID_6_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_6_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_6_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_6_VALUE_2;

        this.QUESTION_DETAIL_ID_7 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_7;
        this.CHOICES_OF_QUESTION_ID_7_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_7_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_7_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_7_VALUE_2;

        this.QUESTION_DETAIL_ID_8 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_8;
        this.CHOICES_OF_QUESTION_ID_8_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_8_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_8_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_8_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_8_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_8_VALUE_3;

        this.QUESTION_DETAIL_ID_9 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_9;
        this.CHOICES_OF_QUESTION_ID_9_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_9_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_9_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_9_VALUE_2;

        this.QUESTION_DETAIL_ID_10 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_10;
        this.CHOICES_OF_QUESTION_ID_10_VALUE_1_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_10_VALUE_1_1;
        this.CHOICES_OF_QUESTION_ID_10_VALUE_1_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_10_VALUE_1_2;
        this.CHOICES_OF_QUESTION_ID_10_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_10_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_10_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_10_VALUE_3;

        this.QUESTION_DETAIL_ID_11 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_11;
        this.CHOICES_OF_QUESTION_ID_11_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_11_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_11_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_11_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_11_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_11_VALUE_3;
        this.CHOICES_OF_QUESTION_ID_11_VALUE_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_11_VALUE_4;
        this.CHOICES_OF_QUESTION_ID_11_VALUE_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_11_VALUE_5;

        this.QUESTION_DETAIL_ID_12 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_12;

        this.QUESTION_DETAIL_ID_13 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_13;
        this.CHOICES_OF_QUESTION_ID_13_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_13_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_13_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_13_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_13_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_13_VALUE_3;

        this.QUESTION_DETAIL_ID_14 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_14;
        this.CHOICES_OF_QUESTION_ID_14_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_14_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_14_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_14_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_14_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_14_VALUE_3;
        this.CHOICES_OF_QUESTION_ID_14_VALUE_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_14_VALUE_4;
        this.CHOICES_OF_QUESTION_ID_14_VALUE_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_14_VALUE_5;

        this.QUESTION_DETAIL_ID_15 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_15;
        this.CHOICES_OF_QUESTION_ID_15_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_15_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_15_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_15_VALUE_2;

        this.QUESTION_DETAIL_ID_311 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_311;
        this.CHOICES_OF_QUESTION_ID_111_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_111_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_111_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_111_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_111_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_111_VALUE_3;
        this.CHOICES_OF_QUESTION_ID_111_VALUE_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_111_VALUE_4;
        this.CHOICES_OF_QUESTION_ID_111_VALUE_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_111_VALUE_5;

        this.QUESTION_DETAIL_ID_312 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_312;
        this.CHOICES_OF_QUESTION_ID_112_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_112_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_112_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_112_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_112_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_112_VALUE_3;
        this.CHOICES_OF_QUESTION_ID_112_VALUE_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_112_VALUE_4;
        this.CHOICES_OF_QUESTION_ID_112_VALUE_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_112_VALUE_5;

        this.QUESTION_DETAIL_ID_313 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_313;
        this.CHOICES_OF_QUESTION_ID_113_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_113_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_113_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_113_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_113_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_113_VALUE_3;
        this.CHOICES_OF_QUESTION_ID_113_VALUE_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_113_VALUE_4;
        this.CHOICES_OF_QUESTION_ID_113_VALUE_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_113_VALUE_5;

        this.QUESTION_DETAIL_ID_314 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_314;
        this.CHOICES_OF_QUESTION_ID_114_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_114_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_114_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_114_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_114_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_114_VALUE_3;
        this.CHOICES_OF_QUESTION_ID_114_VALUE_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_114_VALUE_4;
        this.CHOICES_OF_QUESTION_ID_114_VALUE_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_114_VALUE_5;

        this.QUESTION_DETAIL_ID_315 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_315;
        this.CHOICES_OF_QUESTION_ID_115_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_115_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_115_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_115_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_115_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_115_VALUE_3;
        this.CHOICES_OF_QUESTION_ID_115_VALUE_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_115_VALUE_4;
        this.CHOICES_OF_QUESTION_ID_115_VALUE_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_115_VALUE_5;

        this.QUESTION_DETAIL_ID_321 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_321;
        this.CHOICES_OF_QUESTION_ID_221_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_221_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_221_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_221_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_221_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_221_VALUE_3;
        this.CHOICES_OF_QUESTION_ID_221_VALUE_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_221_VALUE_4;
        this.CHOICES_OF_QUESTION_ID_221_VALUE_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_221_VALUE_5;

        this.QUESTION_DETAIL_ID_322 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_322
        this.CHOICES_OF_QUESTION_ID_222_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_222_VALUE_1
        this.CHOICES_OF_QUESTION_ID_222_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_222_VALUE_2
        this.CHOICES_OF_QUESTION_ID_222_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_222_VALUE_3
        this.CHOICES_OF_QUESTION_ID_222_VALUE_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_222_VALUE_4
        this.CHOICES_OF_QUESTION_ID_222_VALUE_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_222_VALUE_5

        this.QUESTION_DETAIL_ID_323 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_323;
        this.CHOICES_OF_QUESTION_ID_223_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_223_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_223_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_223_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_223_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_223_VALUE_3;
        this.CHOICES_OF_QUESTION_ID_223_VALUE_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_223_VALUE_4;
        this.CHOICES_OF_QUESTION_ID_223_VALUE_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_223_VALUE_5;

        this.QUESTION_DETAIL_ID_324 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_324;
        this.CHOICES_OF_QUESTION_ID_224_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_224_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_224_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_224_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_224_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_224_VALUE_3;
        this.CHOICES_OF_QUESTION_ID_224_VALUE_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_224_VALUE_4;
        this.CHOICES_OF_QUESTION_ID_224_VALUE_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_224_VALUE_5;

        this.QUESTION_DETAIL_ID_325 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_325;
        this.CHOICES_OF_QUESTION_ID_225_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_225_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_225_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_225_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_225_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_225_VALUE_3;
        this.CHOICES_OF_QUESTION_ID_225_VALUE_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_225_VALUE_4;
        this.CHOICES_OF_QUESTION_ID_225_VALUE_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_225_VALUE_5;

        this.QUESTION_DETAIL_ID_326 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_326;
        this.CHOICES_OF_QUESTION_ID_226_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_226_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_226_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_226_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_226_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_226_VALUE_3;
        this.CHOICES_OF_QUESTION_ID_226_VALUE_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_226_VALUE_4;
        this.CHOICES_OF_QUESTION_ID_226_VALUE_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_226_VALUE_5;

        this.QUESTION_DETAIL_ID_331 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_331;
        this.CHOICES_OF_QUESTION_ID_331_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_331_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_331_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_331_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_331_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_331_VALUE_3;
        this.CHOICES_OF_QUESTION_ID_331_VALUE_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_331_VALUE_4;
        this.CHOICES_OF_QUESTION_ID_331_VALUE_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_331_VALUE_5;

        this.QUESTION_DETAIL_ID_332 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_332;
        this.CHOICES_OF_QUESTION_ID_332_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_332_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_332_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_332_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_332_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_332_VALUE_3;
        this.CHOICES_OF_QUESTION_ID_332_VALUE_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_332_VALUE_4;
        this.CHOICES_OF_QUESTION_ID_332_VALUE_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_332_VALUE_5;

        this.QUESTION_DETAIL_ID_333 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_333;
        this.CHOICES_OF_QUESTION_ID_333_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_333_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_333_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_333_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_333_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_333_VALUE_3;
        this.CHOICES_OF_QUESTION_ID_333_VALUE_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_333_VALUE_4;
        this.CHOICES_OF_QUESTION_ID_333_VALUE_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_333_VALUE_5;

        this.QUESTION_DETAIL_ID_334 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_334;
        this.CHOICES_OF_QUESTION_ID_334_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_334_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_334_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_334_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_334_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_334_VALUE_3;
        this.CHOICES_OF_QUESTION_ID_334_VALUE_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_334_VALUE_4;
        this.CHOICES_OF_QUESTION_ID_334_VALUE_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_334_VALUE_5;

        this.QUESTION_DETAIL_ID_335 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_335;
        this.CHOICES_OF_QUESTION_ID_335_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_335_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_335_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_335_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_335_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_335_VALUE_3;
        this.CHOICES_OF_QUESTION_ID_335_VALUE_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_335_VALUE_4;
        this.CHOICES_OF_QUESTION_ID_335_VALUE_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_335_VALUE_5;

        this.QUESTION_DETAIL_ID_441 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_441;
        this.CHOICES_OF_QUESTION_ID_441_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_441_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_441_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_441_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_441_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_441_VALUE_3;
        this.CHOICES_OF_QUESTION_ID_441_VALUE_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_441_VALUE_4;
        this.CHOICES_OF_QUESTION_ID_441_VALUE_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_441_VALUE_5;

        this.QUESTION_DETAIL_ID_442 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_442;
        this.CHOICES_OF_QUESTION_ID_442_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_442_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_442_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_442_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_442_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_442_VALUE_3;
        this.CHOICES_OF_QUESTION_ID_442_VALUE_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_442_VALUE_4;
        this.CHOICES_OF_QUESTION_ID_442_VALUE_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_442_VALUE_5;

        this.QUESTION_DETAIL_ID_443 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_443;
        this.CHOICES_OF_QUESTION_ID_443_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_443_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_443_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_443_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_443_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_443_VALUE_3;
        this.CHOICES_OF_QUESTION_ID_443_VALUE_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_443_VALUE_4;
        this.CHOICES_OF_QUESTION_ID_443_VALUE_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_443_VALUE_5;

        this.QUESTION_DETAIL_ID_444 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_444;
        this.CHOICES_OF_QUESTION_ID_444_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_444_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_444_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_444_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_444_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_444_VALUE_3;
        this.CHOICES_OF_QUESTION_ID_444_VALUE_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_444_VALUE_4;
        this.CHOICES_OF_QUESTION_ID_444_VALUE_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_444_VALUE_5;

        this.QUESTION_DETAIL_ID_445 = response.QUESTION_SUB_HEADER.QUESTION_DETAIL_ID_445;
        this.CHOICES_OF_QUESTION_ID_445_VALUE_1 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_445_VALUE_1;
        this.CHOICES_OF_QUESTION_ID_445_VALUE_2 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_445_VALUE_2;
        this.CHOICES_OF_QUESTION_ID_445_VALUE_3 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_445_VALUE_3;
        this.CHOICES_OF_QUESTION_ID_445_VALUE_4 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_445_VALUE_4;
        this.CHOICES_OF_QUESTION_ID_445_VALUE_5 = response.CHOICES_OF_QUESTION.CHOICES_OF_QUESTION_ID_445_VALUE_5;

      } else {

        this.handlesErrors(response.question_error_message_status);

      }

    }, error => {

      this.handlesErrors(error.status);

    });

    await this.questionService.getHttpCheckInsertBeforeM(this.preUserData.STD_CODE).subscribe(responses => {

      if (responses.UPDATE_STATUS == "true") {

        this.TEMP_DISTRICT_NAME = responses.QN_WORK_TAMBON == 'null' ? '' : responses.QN_WORK_TAMBON;
        this.TEMP_AMPHUR_NAME = responses.QN_WORK_AMPHUR == 'null' ? '' : responses.QN_WORK_AMPHUR;
        this.QN_WORK_PROVINCE_NAME = responses.QN_WORK_PROVINCE_NAME == 'null' ? '' : responses.QN_WORK_PROVINCE_NAME;
        this.TEMP_PROVINCE_NAME = responses.QN_WORK_PROVINCE_NO == 'null' ? '' : responses.QN_WORK_PROVINCE_NO;
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
          REGIONAL_NO: responses.REGIONAL_NO == 'null' ? '' : responses.REGIONAL_NO,
          BE_WORK_STATUS: responses.BE_WORK_STATUS == 'null' ? '' : responses.BE_WORK_STATUS,
          CAMPUS_NO: responses.CAMPUS_NO == 'null' ? '' : responses.CAMPUS_NO,
          QN_PLAN_NO: responses.QN_PLAN_NO == 'null' ? '' : responses.QN_PLAN_NO,
          QN_WORK_STATUS: responses.QN_WORK_STATUS == 'null' ? '' : responses.QN_WORK_STATUS,
          QN_OCCUP_TYPE: responses.QN_OCCUP_TYPE == 'null' ? '' : responses.QN_OCCUP_TYPE,
          QN_OCCUP_TYPE_TXT: responses.QN_OCCUP_TYPE_TXT == 'null' ? '' : responses.QN_OCCUP_TYPE_TXT,
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
          QN_MATCH_EDU: responses.QN_MATCH_EDU == 'null' ? '' : responses.QN_MATCH_EDU,
          QN_WORK_APPLY: responses.QN_WORK_APPLY == 'null' ? '' : responses.QN_WORK_APPLY,
          QN_AWARD: responses.QN_AWARD == 'null' ? '' : responses.QN_AWARD,
          QN_AWARD_TXT: responses.QN_AWARD_TXT == 'null' ? '' : responses.QN_AWARD_TXT,
          QN_AWARD_INSTITUTE: responses.QN_AWARD_INSTITUTE == 'null' ? '' : responses.QN_AWARD_INSTITUTE,
          QN_AWARD_MMYYYY: responses.QN_AWARD_MMYYYY == 'null' ? '' : responses.QN_AWARD_MMYYYY,
          QN_CURR_PROPER: responses.QN_CURR_PROPER == 'null' ? '' : responses.QN_CURR_PROPER,
          QN_CURR_MORAL: responses.QN_CURR_MORAL == 'null' ? '' : responses.QN_CURR_MORAL,
          QN_CURR_CO: responses.QN_CURR_CO == 'null' ? '' : responses.QN_CURR_CO,
          QN_CURR_INSPIRE: responses.QN_CURR_INSPIRE == 'null' ? '' : responses.QN_CURR_INSPIRE,
          QN_CURR_OUTSIDE: responses.QN_CURR_OUTSIDE == 'null' ? '' : responses.QN_CURR_OUTSIDE,
          QN_INS_CONTENT: responses.QN_INS_CONTENT == 'null' ? '' : responses.QN_INS_CONTENT,
          QN_INS_ONTIME: responses.QN_INS_ONTIME == 'null' ? '' : responses.QN_INS_ONTIME,
          QN_INS_KNOWLEDGE: responses.QN_INS_KNOWLEDGE == 'null' ? '' : responses.QN_INS_KNOWLEDGE,
          QN_INS_EXTENSIVE: responses.QN_INS_EXTENSIVE == 'null' ? '' : responses.QN_INS_EXTENSIVE,
          QN_INS_ETHICS: responses.QN_INS_ETHICS == 'null' ? '' : responses.QN_INS_ETHICS,
          QN_INS_LUCID: responses.QN_INS_LUCID == 'null' ? '' : responses.QN_INS_LUCID,
          QN_MEDIA_MODERN: responses.QN_MEDIA_MODERN == 'null' ? '' : responses.QN_MEDIA_MODERN,
          QN_MEDIA_ACC: responses.QN_MEDIA_ACC == 'null' ? '' : responses.QN_MEDIA_ACC,
          QN_MEDIA_NETWORK: responses.QN_MEDIA_NETWORK == 'null' ? '' : responses.QN_MEDIA_NETWORK,
          QN_MEDIA_DOC: responses.QN_MEDIA_DOC == 'null' ? '' : responses.QN_MEDIA_DOC,
          QN_MEDIA_FULLY: responses.QN_MEDIA_FULLY == 'null' ? '' : responses.QN_MEDIA_FULLY,
          QN_ROOM_STUDY: responses.QN_ROOM_STUDY == 'null' ? '' : responses.QN_ROOM_STUDY,
          QN_ROOM_OVERVIEW: responses.QN_ROOM_OVERVIEW == 'null' ? '' : responses.QN_ROOM_OVERVIEW,
          QN_ROOM_CLEAN: responses.QN_ROOM_CLEAN == 'null' ? '' : responses.QN_ROOM_CLEAN,
          QN_ROOM_SIZE: responses.QN_ROOM_SIZE == 'null' ? '' : responses.QN_ROOM_SIZE,
          QN_ROOM_LIBRARY: responses.QN_ROOM_LIBRARY == 'null' ? '' : responses.QN_ROOM_LIBRARY,
          QN_ROOM_SAFETY: responses.QN_ROOM_SAFETY == 'null' ? '' : responses.QN_ROOM_SAFETY,
          QN_OFFER: responses.QN_OFFER == 'null' ? '' : responses.QN_OFFER,
          QN_UPDATE_DATE: responses.QN_UPDATE_DATE == 'null' ? '' : responses.QN_UPDATE_DATE,
          INSERT_STATUS: responses.INSERT_STATUS == 'null' ? '' : responses.INSERT_STATUS,
          UPDATE_STATUS: responses.UPDATE_STATUS == null ? '' : responses.UPDATE_STATUS,
        });

        this.PRENAME_THAI = this.preUserData.PRENAME_THAI;

        registerLocaleData(localeTh, 'th');
        let pipe = new DatePipe('th-TH');
        let nowYear = (new Date()).getFullYear();
        let fakeYearTH = (nowYear + 543);
        let dateNewFormat = pipe.transform(this.questionValueForm.controls['QN_UPDATE_DATE'].value.toString(), 'dd MMM' + fakeYearTH, 'th').toString();

        const title = 'ยืนยันการกรอกแบบสำรวจ';
        const message_insert = `รหัสนักศึกษา : ${this.preUserData.STD_CODE}`;
        const message = `ชื่อ-สกุล : ${this.preUserData.PRENAME_THAI} ${this.preUserData.FIRST_NAME_THAI} ${this.preUserData.LAST_NAME_THAI}`;
        const description = `กรอกแบบสำรวจเมื่อ: ${dateNewFormat}`;
        const descriptionDetail = `คุณต้องการาดูรายละเอียด หรือแก้ไขแบบสำรวจหรือไม่?`;
        const btnLeftDisable = false;
        const btnRightDisable = false;
        const txtBtnLeft = 'ไม่';
        const txtBtnRight = 'ใช่';
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
        const dialogData = new ConfirmDialogModel(title, message, description, descriptionDetail, btnLeftDisable, btnRightDisable, txtBtnLeft, txtBtnRight, message_insert, message1, message2, message3, message4, message5, message6, message7, message8, message9, message10, message11, message12, message13, message14, message15, isHiddenDisabled);
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


  //-------------------------------------------------------------------------------
  //เริ่ม-- Autocomplete zone ------
  searchTambon: string;

  isHidden: boolean = false;

  TEMP_DISTRICT_NAME: string;
  TEMP_AMPHUR_NAME: string;
  TEMP_PROVINCE_NAME: string;
  TEMP_POSTCODE: string;

  // เลือกข้อมูลใน Dropdownlist ไปแล้วหรือไม่
  setLettersFag: boolean = false;

  // จำนวนความยาวตัวอักษรที่เลือกไป
  setLetters: number = 0;

  // เปิด-ปิด Dropdownlist
  isDisableDropdownlist = new FormControl(true);

  //-- เป็นส่วนหนึ่งของคำสั่งในการเปิด dropdownlist แบบ Custom ให้ Auto เมื่อมีการพิมพ์ อักษรอย่างน้อย 1 ตัว
  @ViewChild('dropdownlist', { static: true }) public dropdownlist: any;

  searchTambonKeyup(value) {

    if (value.length >= 2) {
      // เปิด dropdownlist Auto
      this.dropdownlist.toggle('true');
      // ยกเลิกการ Disabl (ยกเลิกการ ปิด Dropdownlist)
      this.isDisableDropdownlist.setValue(false);
      this.isDisableDropdownlist.updateValueAndValidity();
    } else {
      // ปิด dropdownlist Auto
      this.dropdownlist.toggle('false');
      // ทำการปิดการมองเห็น Disabl (ปิด Dropdownlist)
      this.isDisableDropdownlist.setValue(true);
      this.isDisableDropdownlist.updateValueAndValidity();
    }

    // กรณีที่มีการเลือกข้อมูลไปแล้ว และทำการลบ หรือพิมพ์อักษร เพิ่ม จะทำการ คืนค่า ตำบล อำเภอ จังหวัด รหัสไปรษณีย์ เป็นค่าว่าง และปิดปุ่ม submit เพื่อกันข้อมูลไม่ครบถ้วน
    if (value.length < 1) {

      // คำสั่งเปิด-ปิด Dropdownlist
      // this.isDisableDropdownlist.setValue(true);

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

  }

  selectedTambon(event) {

    this.TEMP_DISTRICT_NAME = event.DISTRICT_NAME;

    this.questionValueForm.controls['QN_WORK_TAMBON'].patchValue(this.TEMP_DISTRICT_NAME);

    this.TEMP_AMPHUR_NAME = event.AMPHUR_NAME;
    this.questionValueForm.controls['QN_WORK_AMPHUR'].patchValue(this.TEMP_AMPHUR_NAME);

    //-- เก็บไว้ตอน onSubmit เพื่อ Insert to Database เพราะเก็บเป็น ID
    this.TEMP_PROVINCE_NAME = event.PROVINCE_ID;
    this.questionValueForm.controls['QN_WORK_PROVINCE_NO'].patchValue(this.TEMP_PROVINCE_NAME);
    this.questionValueForm.controls['QN_WORK_PROVINCE_NO'].clearValidators();
    this.questionValueForm.controls['QN_WORK_PROVINCE_NO'].updateValueAndValidity();
    //-- เก็บไว้แสดง ชื่อจังหวัด/ประเทศ เป็น อักษร ที่หน้าเว็บ
    this.QN_WORK_PROVINCE_NAME = event.PROVINCE_NAME;

    this.TEMP_POSTCODE = event.POSTCODE;
    this.questionValueForm.controls['QN_WORK_ZIPCODE'].patchValue(this.TEMP_POSTCODE);

    //-- เลือก ตำบล/แขวง แล้วทำการ enable
    this.questionValueForm.controls['QN_WORK_AMPHUR'].enable();
    this.questionValueForm.controls['QN_WORK_PROVINCE_NO'].enable();
    this.questionValueForm.controls['QN_WORK_ZIPCODE'].enable();

  }
  //จบ-- Autocomplete zone ------
  //-------------------------------------------------------------------------------

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
      QN_PLAN_NO: this.questionValueForm.get('QN_PLAN_NO').value,
      STD_STUDY_TIME: this.questionValueForm.get('STD_STUDY_TIME').value,
      REGIONAL_NO: this.questionValueForm.get('REGIONAL_NO').value,
      BE_WORK_STATUS: this.questionValueForm.get('BE_WORK_STATUS').value,
      CAMPUS_NO: this.questionValueForm.get('CAMPUS_NO').value,
      QN_WORK_STATUS: this.questionValueForm.get('QN_WORK_STATUS').value,
      QN_OCCUP_TYPE: this.questionValueForm.get('QN_OCCUP_TYPE').value,
      QN_OCCUP_TYPE_TXT: this.questionValueForm.get('QN_OCCUP_TYPE_TXT').value,
      QN_WORK_NAME: this.questionValueForm.get('QN_WORK_NAME').value,
      QN_WORK_NO: this.questionValueForm.get('QN_WORK_NO').value,
      QN_WORK_MOO: this.questionValueForm.get('QN_WORK_MOO').value,
      QN_WORK_BUILDING: this.questionValueForm.get('QN_WORK_BUILDING').value,
      QN_WORK_FLOOR: this.questionValueForm.get('QN_WORK_FLOOR').value,
      QN_WORK_SOI: this.questionValueForm.get('QN_WORK_SOI').value,
      QN_WORK_STREET: this.questionValueForm.get('QN_WORK_STREET').value,
      QN_WORK_TAMBON: this.TEMP_DISTRICT_NAME == undefined ? '' : this.TEMP_DISTRICT_NAME,
      QN_WORK_AMPHUR: this.TEMP_AMPHUR_NAME == undefined ? '' : this.TEMP_AMPHUR_NAME,
      QN_WORK_PROVINCE_NAME: this.TEMP_DISTRICT_NAME == undefined ? '' : this.TEMP_DISTRICT_NAME,
      QN_WORK_PROVINCE_NO: this.TEMP_PROVINCE_NAME == undefined ? '' : this.TEMP_PROVINCE_NAME,
      QN_WORK_ZIPCODE: this.TEMP_POSTCODE == undefined ? '' : this.TEMP_POSTCODE,
      QN_WORK_TEL: this.questionValueForm.get('QN_WORK_TEL').value,
      QN_MATCH_EDU: this.questionValueForm.get('QN_MATCH_EDU').value,
      QN_WORK_APPLY: this.questionValueForm.get('QN_WORK_APPLY').value,
      QN_AWARD: this.questionValueForm.get('QN_AWARD').value,
      QN_AWARD_TXT: this.questionValueForm.get('QN_AWARD_TXT').value,
      QN_AWARD_INSTITUTE: this.questionValueForm.get('QN_AWARD_INSTITUTE').value,
      QN_AWARD_MMYYYY: this.questionValueForm.get('QN_AWARD_MMYYYY').value,
      QN_CURR_PROPER: this.questionValueForm.get('QN_CURR_PROPER').value,
      QN_CURR_MORAL: this.questionValueForm.get('QN_CURR_MORAL').value,
      QN_CURR_CO: this.questionValueForm.get('QN_CURR_CO').value,
      QN_CURR_INSPIRE: this.questionValueForm.get('QN_CURR_INSPIRE').value,
      QN_CURR_OUTSIDE: this.questionValueForm.get('QN_CURR_OUTSIDE').value,
      QN_INS_CONTENT: this.questionValueForm.get('QN_INS_CONTENT').value,
      QN_INS_ONTIME: this.questionValueForm.get('QN_INS_ONTIME').value,
      QN_INS_KNOWLEDGE: this.questionValueForm.get('QN_INS_KNOWLEDGE').value,
      QN_INS_EXTENSIVE: this.questionValueForm.get('QN_INS_EXTENSIVE').value,
      QN_INS_ETHICS: this.questionValueForm.get('QN_INS_ETHICS').value,
      QN_INS_LUCID: this.questionValueForm.get('QN_INS_LUCID').value,
      QN_MEDIA_MODERN: this.questionValueForm.get('QN_MEDIA_MODERN').value,
      QN_MEDIA_ACC: this.questionValueForm.get('QN_MEDIA_ACC').value,
      QN_MEDIA_NETWORK: this.questionValueForm.get('QN_MEDIA_NETWORK').value,
      QN_MEDIA_DOC: this.questionValueForm.get('QN_MEDIA_DOC').value,
      QN_MEDIA_FULLY: this.questionValueForm.get('QN_MEDIA_FULLY').value,
      QN_ROOM_STUDY: this.questionValueForm.get('QN_ROOM_STUDY').value,
      QN_ROOM_OVERVIEW: this.questionValueForm.get('QN_ROOM_OVERVIEW').value,
      QN_ROOM_CLEAN: this.questionValueForm.get('QN_ROOM_CLEAN').value,
      QN_ROOM_SIZE: this.questionValueForm.get('QN_ROOM_SIZE').value,
      QN_ROOM_LIBRARY: this.questionValueForm.get('QN_ROOM_LIBRARY').value,
      QN_ROOM_SAFETY: this.questionValueForm.get('QN_ROOM_SAFETY').value,
      QN_OFFER: this.questionValueForm.get('QN_OFFER').value,
      QN_UPDATE_DATE: this.questionValueForm.get('QN_UPDATE_DATE').value,
      INSERT_STATUS: this.questionValueForm.get('INSERT_STATUS').value,
      UPDATE_STATUS: this.questionValueForm.get('UPDATE_STATUS').value
    };

    //-- ********** สำเร็จ แจ้งด้วย Dialog และจบการทำงาน Redirect to Login ******** --//
    const title = 'ยืนยันการบันทึกแบบสำรวจ';
    const message_insert = '';
    const message = `คุณต้องการบันทึก แบบสำรวจใช่หรือไม่`;
    const description = 'หากคุณต้องการแก้ไข หรือต้องการดูรายละเอียดแบบสำรวจของคุณ สามารถทำได้ด้วยการ Login อีกครั้ง';
    const descriptionDetail = '';
    const btnLeftDisable = false;
    const btnRightDisable = false;
    const txtBtnLeft = 'ไม่บันทึก';
    const txtBtnRight = 'บันทึก';
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
    const dialogData = new ConfirmDialogModel(title, message, description, descriptionDetail, btnLeftDisable, btnRightDisable, txtBtnLeft, txtBtnRight, message_insert, message1, message2, message3, message4, message5, message6, message7, message8, message9, message10, message11, message12, message13, message14, message15, isHiddenDisabled);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {

      this.dialog_confirm_result = dialogResult;
      if (this.dialog_confirm_result) {

        //-- ส่งข้อมูลไปยัง Service เพื่อ Insert หรือ Update ข้อมูล
        this.questionService.postHttpQuestionsM(this.postUserData).subscribe(responsePost => {

          //-- Successfully
          if (responsePost.error_question_insert_update_message_status == 1) {

            //-- ********** สำเร็จ แจ้งด้วย Dialog และจบการทำงาน Redirect to Login ******** --//
            const title = 'บันทึกแบบสำรวจเรียบร้อย';
            const message_insert = `ทำการบันทึก แบบสำรวจเรียบร้อยแล้วครับ`;
            const message = '';
            const description = 'หากคุณต้องการแก้ไข หรือต้องการดูรายละเอียดแบบสำรวจของคุณ สามารถทำได้ด้วยการ Login อีกครั้ง';
            const descriptionDetail = '';
            const btnLeftDisable = false;
            const btnRightDisable = false;
            const txtBtnLeft = 'ไม่';
            const txtBtnRight = 'ใช่';
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
            const dialogData = new ConfirmDialogModel(title, message, description, descriptionDetail, btnLeftDisable, btnRightDisable, txtBtnLeft, txtBtnRight, message_insert, message1, message2, message3, message4, message5, message6, message7, message8, message9, message10, message11, message12, message13, message14, message15, isHiddenDisabled);
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

    });

  }


  //-- ยืนยันการ Logout ออกจากระบบ
  logoutConfirmDialog(): void {

    const title = `Logout`;
    const message_insert = '';
    const message = `คุณต้องการที่จะออกจากระบบใช่หรือไม่`;
    const description = `หากคุณออกจากหน้าเพจการทำงานนี้ ข้อมูลที่คุณทำการกรอกไว้จะไม่ถูกบันทึก !`;
    const descriptionDetail = '';
    const btnLeftDisable = false;
    const btnRightDisable = false;
    const txtBtnLeft = 'ไม่';
    const txtBtnRight = 'ใช่';
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
    const dialogData = new ConfirmDialogModel(title, message, description, descriptionDetail, btnLeftDisable, btnRightDisable, txtBtnLeft, txtBtnRight, message_insert, message1, message2, message3, message4, message5, message6, message7, message8, message9, message10, message11, message12, message13, message14, message15, isHiddenDisabled);
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
