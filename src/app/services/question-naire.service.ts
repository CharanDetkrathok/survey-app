import { questionSetInterface_En_M_Data } from './../question-naire-m/question-set-interface-m-data';
import { questionResponseInsertUpdate } from './../question-naire/question-response-insert-update';

import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { questionResponseDataInterface } from '../question-naire/question-response-data';
import { questionSetInterfaceData } from '../question-naire/question-set-interface-data';
import { questionResponse_M_DataInterface } from '../question-naire-m/question-response-m-data';
import { questionSetInterface_M_Data } from '../question-naire-m/question-set-interface-m-data';
import { questionResponse_M_InsertUpdate } from '../question-naire-m/question-response-m-insert-update';
import { questionResponse_En_M_InsertUpdate } from '../question-naire-en-m/question-response-en-m-insert-update';
import { questionResponseDataEnInterface } from '../question-naire-en/question-response-en-data';
import { questionSetInterfaceEnData } from '../question-naire-en/question-set-interface-en-data';
import { questionResponseInsertUpdateEn } from '../question-naire-en/question-response-en-insert-update';


@Injectable({
  providedIn: 'root'
})

export class QuestionNaireService {

  constructor(private httpUrl: HttpClient) { }

  /// เริ่ม -------- ป.ตรี ---------------------------------------
  //-- Get คำถาม และ คำตอบ
  getHttpQuestions(LEV_ID) {

    return this.httpUrl.get<questionResponseDataInterface>(`${environment._base_url}questions-naire-b.jsp?lev_id=${LEV_ID}`);

  }

  //-- เคยทำแบบสำรวจ แล้วหรือไม่?
  //-- ไม่เคย กลับไป Set ค่า INSERT_STATUS = "true"
  //-- ใช่เคย กลับไป Set ค่า UPDATE_STATUS = "true"
  getHttpCheckInsertBefore(STD_CODE: string) {
    return this.httpUrl.get<questionSetInterfaceData>(`${environment._base_url}checked-data-before-b.jsp?STD_CODE=${STD_CODE}`);
  }

  postHttpQuestions(postUserData: questionSetInterfaceData) {

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' });

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('STD_CODE', postUserData.STD_CODE);
    urlSearchParams.append('PRENAME_NO', postUserData.PRENAME_NO);
    urlSearchParams.append('FIRST_NAME_THAI', postUserData.FIRST_NAME_THAI);
    urlSearchParams.append('LAST_NAME_THAI', postUserData.LAST_NAME_THAI);
    urlSearchParams.append('AGE', postUserData.AGE);
    urlSearchParams.append('GENDER_NO', postUserData.GENDER_NO);
    urlSearchParams.append('FACULTY_NO', postUserData.FACULTY_NO);
    urlSearchParams.append('MAJOR_NO', postUserData.MAJOR_NO);
    urlSearchParams.append('STD_TYPE', postUserData.STD_TYPE);
    urlSearchParams.append('STD_STUDY_TIME', postUserData.STD_STUDY_TIME);
    urlSearchParams.append('STD_FUND', postUserData.STD_FUND);
    urlSearchParams.append('BE_WORK_STATUS', postUserData.BE_WORK_STATUS);
    urlSearchParams.append('BE_WORK_STATUS_TXT', postUserData.BE_WORK_STATUS_TXT);
    urlSearchParams.append('QN_WORK_STATUS', postUserData.QN_WORK_STATUS);
    urlSearchParams.append('QN_WORK_STATUS_NO_TXT', postUserData.QN_WORK_STATUS_NO_TXT);
    urlSearchParams.append('QN_WORK_STATUS_ED_TXT', postUserData.QN_WORK_STATUS_ED_TXT);
    urlSearchParams.append('QN_OCCUP_TYPE', postUserData.QN_OCCUP_TYPE);
    urlSearchParams.append('QN_OCCUP_TYPE_TXT', postUserData.QN_OCCUP_TYPE_TXT);
    urlSearchParams.append('QN_SALARY', postUserData.QN_SALARY);
    urlSearchParams.append('QN_WORK_SALARY', postUserData.QN_WORK_SALARY);
    urlSearchParams.append('QN_WORK_NAME', postUserData.QN_WORK_NAME);
    urlSearchParams.append('QN_WORK_NO', postUserData.QN_WORK_NO);
    urlSearchParams.append('QN_WORK_MOO', postUserData.QN_WORK_MOO);
    urlSearchParams.append('QN_WORK_BUILDING', postUserData.QN_WORK_BUILDING);
    urlSearchParams.append('QN_WORK_FLOOR', postUserData.QN_WORK_FLOOR);
    urlSearchParams.append('QN_WORK_SOI', postUserData.QN_WORK_SOI);
    urlSearchParams.append('QN_WORK_STREET', postUserData.QN_WORK_STREET);
    urlSearchParams.append('QN_WORK_TAMBON', postUserData.QN_WORK_TAMBON);
    urlSearchParams.append('QN_WORK_AMPHUR', postUserData.QN_WORK_AMPHUR);
    urlSearchParams.append('QN_WORK_PROVINCE_NO', postUserData.QN_WORK_PROVINCE_NO);
    urlSearchParams.append('QN_WORK_ZIPCODE', postUserData.QN_WORK_ZIPCODE);
    urlSearchParams.append('QN_WORK_TEL', postUserData.QN_WORK_TEL);
    urlSearchParams.append('QN_WORK_FAX', postUserData.QN_WORK_FAX);
    urlSearchParams.append('QN_WORK_URL', postUserData.QN_WORK_URL);
    urlSearchParams.append('AF_FIND_WORK', postUserData.AF_FIND_WORK);
    urlSearchParams.append('QN_MATCH_EDU', postUserData.QN_MATCH_EDU);
    urlSearchParams.append('QN_WORK_APPLY', postUserData.QN_WORK_APPLY);
    urlSearchParams.append('QN_EMPLOYER', postUserData.QN_EMPLOYER);
    urlSearchParams.append('QN_AWARD', postUserData.QN_AWARD);
    urlSearchParams.append('QN_AWARD_TXT', postUserData.QN_AWARD_TXT);
    urlSearchParams.append('QN_AWARD_INSTITUTE', postUserData.QN_AWARD_INSTITUTE);
    urlSearchParams.append('QN_AWARD_MMYYYY', postUserData.QN_AWARD_MMYYYY);
    urlSearchParams.append('QN_ADDPROGRAM2', postUserData.QN_ADDPROGRAM2);
    urlSearchParams.append('QN_ADDPROGRAM1', postUserData.QN_ADDPROGRAM1);
    urlSearchParams.append('QN_ADDPROGRAM3', postUserData.QN_ADDPROGRAM3);
    urlSearchParams.append('QN_ADDPROGRAM4', postUserData.QN_ADDPROGRAM4);
    urlSearchParams.append('QN_ADDPROGRAM5', postUserData.QN_ADDPROGRAM5);
    urlSearchParams.append('QN_ADDPROGRAM6', postUserData.QN_ADDPROGRAM6);
    urlSearchParams.append('QN_COMMENT_PROGRAM', postUserData.QN_COMMENT_PROGRAM);
    urlSearchParams.append('QN_COMMENT_LEARN', postUserData.QN_COMMENT_LEARN);
    urlSearchParams.append('QN_COMMENT_SOCIAL', postUserData.QN_COMMENT_SOCIAL);
    urlSearchParams.append('QN_COMMENT_ACTIVITY', postUserData.QN_COMMENT_ACTIVITY);
    urlSearchParams.append('QN_COMMENT_LOCATION', postUserData.QN_COMMENT_LOCATION);
    urlSearchParams.append('QN_DATE_UPDATE', postUserData.QN_DATE_UPDATE);
    urlSearchParams.append('UPDATE_STATUS', postUserData.UPDATE_STATUS);
    urlSearchParams.append('INSERT_STATUS', postUserData.INSERT_STATUS);

    const body = urlSearchParams.toString();

    return this.httpUrl.post<questionResponseInsertUpdate>(`${environment._base_url}questions-naire-choices-b.jsp`, body, { headers: headers });

  }
  /// จบ -------- ป.ตรี ---------------------------------------


  /// เริ่ม -------- ป.โท / ป.เอก ------------------------------
  //-- Get คำถาม และ คำตอบ
  getHttpQuestionsM(LEV_ID) {

    return this.httpUrl.get<questionResponse_M_DataInterface>(`${environment._base_url}questions-naire-m.jsp?lev_id=${LEV_ID}`);

  }

  //-- เคยทำแบบสำรวจ แล้วหรือไม่?
  //-- ไม่เคย กลับไป Set ค่า INSERT_STATUS = "true"
  //-- ใช่เคย กลับไป Set ค่า UPDATE_STATUS = "true"
  getHttpCheckInsertBeforeM(STD_CODE: string) {
    return this.httpUrl.get<questionSetInterface_M_Data>(`${environment._base_url}checked-data-before-m.jsp?STD_CODE=${STD_CODE}`);
  }

  postHttpQuestionsM(postUserData: questionSetInterface_M_Data) {

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' });

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('STD_CODE', postUserData.STD_CODE);
    urlSearchParams.append('PRENAME_NO', postUserData.PRENAME_NO);
    urlSearchParams.append('FIRST_NAME_THAI', postUserData.FIRST_NAME_THAI);
    urlSearchParams.append('LAST_NAME_THAI', postUserData.LAST_NAME_THAI);
    urlSearchParams.append('AGE', postUserData.AGE);
    urlSearchParams.append('GENDER_NO', postUserData.GENDER_NO);
    urlSearchParams.append('FACULTY_NO', postUserData.FACULTY_NO);
    urlSearchParams.append('MAJOR_NO', postUserData.MAJOR_NO);
    urlSearchParams.append('STD_TYPE', postUserData.STD_TYPE);
    urlSearchParams.append('STD_STUDY_TIME', postUserData.STD_STUDY_TIME);
    urlSearchParams.append('REGIONAL_NO', postUserData.REGIONAL_NO);
    urlSearchParams.append('BE_WORK_STATUS', postUserData.BE_WORK_STATUS);
    urlSearchParams.append('CAMPUS_NO', postUserData.CAMPUS_NO);
    urlSearchParams.append('QN_PLAN_NO', postUserData.QN_PLAN_NO);
    urlSearchParams.append('QN_WORK_STATUS', postUserData.QN_WORK_STATUS);
    urlSearchParams.append('QN_OCCUP_TYPE', postUserData.QN_OCCUP_TYPE);
    urlSearchParams.append('QN_OCCUP_TYPE_TXT', postUserData.QN_OCCUP_TYPE_TXT);
    urlSearchParams.append('QN_WORK_NAME', postUserData.QN_WORK_NAME);
    urlSearchParams.append('QN_WORK_NO', postUserData.QN_WORK_NO);
    urlSearchParams.append('QN_WORK_MOO', postUserData.QN_WORK_MOO);
    urlSearchParams.append('QN_WORK_BUILDING', postUserData.QN_WORK_BUILDING);
    urlSearchParams.append('QN_WORK_FLOOR', postUserData.QN_WORK_FLOOR);
    urlSearchParams.append('QN_WORK_SOI', postUserData.QN_WORK_SOI);
    urlSearchParams.append('QN_WORK_STREET', postUserData.QN_WORK_STREET);
    urlSearchParams.append('QN_WORK_TAMBON', postUserData.QN_WORK_TAMBON);
    urlSearchParams.append('QN_WORK_AMPHUR', postUserData.QN_WORK_AMPHUR);
    urlSearchParams.append('QN_WORK_PROVINCE_NAME', postUserData.QN_WORK_PROVINCE_NAME);
    urlSearchParams.append('QN_WORK_PROVINCE_NO', postUserData.QN_WORK_PROVINCE_NO);
    urlSearchParams.append('QN_WORK_ZIPCODE', postUserData.QN_WORK_ZIPCODE);
    urlSearchParams.append('QN_WORK_TEL', postUserData.QN_WORK_TEL);
    urlSearchParams.append('QN_MATCH_EDU', postUserData.QN_MATCH_EDU);
    urlSearchParams.append('QN_WORK_APPLY', postUserData.QN_WORK_APPLY);
    urlSearchParams.append('QN_AWARD', postUserData.QN_AWARD);
    urlSearchParams.append('QN_AWARD_TXT', postUserData.QN_AWARD_TXT);
    urlSearchParams.append('QN_AWARD_INSTITUTE', postUserData.QN_AWARD_INSTITUTE);
    urlSearchParams.append('QN_AWARD_MMYYYY', postUserData.QN_AWARD_MMYYYY);
    urlSearchParams.append('QN_CURR_PROPER', postUserData.QN_CURR_PROPER);
    urlSearchParams.append('QN_CURR_MORAL', postUserData.QN_CURR_MORAL);
    urlSearchParams.append('QN_CURR_CO', postUserData.QN_CURR_CO);
    urlSearchParams.append('QN_CURR_INSPIRE', postUserData.QN_CURR_INSPIRE);
    urlSearchParams.append('QN_CURR_OUTSIDE', postUserData.QN_CURR_OUTSIDE);
    urlSearchParams.append('QN_INS_CONTENT', postUserData.QN_INS_CONTENT);
    urlSearchParams.append('QN_INS_ONTIME', postUserData.QN_INS_ONTIME);
    urlSearchParams.append('QN_INS_KNOWLEDGE', postUserData.QN_INS_KNOWLEDGE);
    urlSearchParams.append('QN_INS_EXTENSIVE', postUserData.QN_INS_EXTENSIVE);
    urlSearchParams.append('QN_INS_ETHICS', postUserData.QN_INS_ETHICS);
    urlSearchParams.append('QN_INS_LUCID', postUserData.QN_INS_LUCID);
    urlSearchParams.append('QN_MEDIA_MODERN', postUserData.QN_MEDIA_MODERN);
    urlSearchParams.append('QN_MEDIA_ACC', postUserData.QN_MEDIA_ACC);
    urlSearchParams.append('QN_MEDIA_NETWORK', postUserData.QN_MEDIA_NETWORK);
    urlSearchParams.append('QN_MEDIA_DOC', postUserData.QN_MEDIA_DOC);
    urlSearchParams.append('QN_MEDIA_FULLY', postUserData.QN_MEDIA_FULLY);
    urlSearchParams.append('QN_ROOM_STUDY', postUserData.QN_ROOM_STUDY);
    urlSearchParams.append('QN_ROOM_OVERVIEW', postUserData.QN_ROOM_OVERVIEW);
    urlSearchParams.append('QN_ROOM_CLEAN', postUserData.QN_ROOM_CLEAN);
    urlSearchParams.append('QN_ROOM_SIZE', postUserData.QN_ROOM_SIZE);
    urlSearchParams.append('QN_ROOM_LIBRARY', postUserData.QN_ROOM_LIBRARY);
    urlSearchParams.append('QN_ROOM_SAFETY', postUserData.QN_ROOM_SAFETY);
    urlSearchParams.append('QN_OFFER', postUserData.QN_OFFER);
    urlSearchParams.append('QN_UPDATE_DATE', postUserData.QN_UPDATE_DATE);
    urlSearchParams.append('INSERT_STATUS', postUserData.INSERT_STATUS);
    urlSearchParams.append('UPDATE_STATUS', postUserData.UPDATE_STATUS);

    const body = urlSearchParams.toString();

    return this.httpUrl.post<questionResponse_M_InsertUpdate>(`${environment._base_url}questions-naire-choices-m.jsp`, body, { headers: headers });

  }

  /// จบ -------- ป.โท / ป.เอก ------------------------------







  //------------ ภาษาอังกฤษ -------------------------------
  /// เริ่ม -------- ป.โท / ป.เอก ------------------------------
  //-- Get คำถาม และ คำตอบ
  getHttpQuestionsEn(LEV_ID) {

    return this.httpUrl.get<questionResponseDataEnInterface>(`${environment._base_url}questions-naire-en-b.jsp?lev_id=${LEV_ID}`);

  }

  //-- เคยทำแบบสำรวจ แล้วหรือไม่?
  //-- ไม่เคย กลับไป Set ค่า INSERT_STATUS = "true"
  //-- ใช่เคย กลับไป Set ค่า UPDATE_STATUS = "true"
  getHttpCheckInsertBeforeEn(STD_CODE: string) {
    return this.httpUrl.get<questionSetInterfaceEnData>(`${environment._base_url}checked-data-before-en-b.jsp?STD_CODE=${STD_CODE}`);
  }

  postHttpQuestionsEn(postUserData: questionSetInterfaceEnData) {

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' });

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('STD_CODE', postUserData.STD_CODE);
    urlSearchParams.append('PRENAME_NO', postUserData.PRENAME_NO);
    urlSearchParams.append('FIRST_NAME_ENG', postUserData.FIRST_NAME_ENG);
    urlSearchParams.append('LAST_NAME_ENG', postUserData.LAST_NAME_ENG);
    urlSearchParams.append('AGE', postUserData.AGE);
    urlSearchParams.append('GENDER_NO', postUserData.GENDER_NO);
    urlSearchParams.append('FACULTY_NO', postUserData.FACULTY_NO);
    urlSearchParams.append('MAJOR_NO', postUserData.MAJOR_NO);
    urlSearchParams.append('STD_TYPE', postUserData.STD_TYPE);
    urlSearchParams.append('STD_STUDY_TIME', postUserData.STD_STUDY_TIME);
    urlSearchParams.append('STD_FUND', postUserData.STD_FUND);
    urlSearchParams.append('BE_WORK_STATUS', postUserData.BE_WORK_STATUS);
    urlSearchParams.append('BE_WORK_STATUS_TXT', postUserData.BE_WORK_STATUS_TXT);
    urlSearchParams.append('QN_WORK_STATUS', postUserData.QN_WORK_STATUS);
    urlSearchParams.append('QN_WORK_STATUS_NO_TXT', postUserData.QN_WORK_STATUS_NO_TXT);
    urlSearchParams.append('QN_WORK_STATUS_ED_TXT', postUserData.QN_WORK_STATUS_ED_TXT);
    urlSearchParams.append('QN_OCCUP_TYPE', postUserData.QN_OCCUP_TYPE);
    urlSearchParams.append('QN_OCCUP_TYPE_TXT', postUserData.QN_OCCUP_TYPE_TXT);
    urlSearchParams.append('QN_SALARY', postUserData.QN_SALARY);
    urlSearchParams.append('QN_WORK_SALARY', postUserData.QN_WORK_SALARY);
    urlSearchParams.append('QN_WORK_NAME', postUserData.QN_WORK_NAME);
    urlSearchParams.append('QN_WORK_NO', postUserData.QN_WORK_NO);
    urlSearchParams.append('QN_WORK_MOO', postUserData.QN_WORK_MOO);
    urlSearchParams.append('QN_WORK_BUILDING', postUserData.QN_WORK_BUILDING);
    urlSearchParams.append('QN_WORK_FLOOR', postUserData.QN_WORK_FLOOR);
    urlSearchParams.append('QN_WORK_SOI', postUserData.QN_WORK_SOI);
    urlSearchParams.append('QN_WORK_STREET', postUserData.QN_WORK_STREET);
    urlSearchParams.append('QN_WORK_TAMBON', postUserData.QN_WORK_TAMBON);
    urlSearchParams.append('QN_WORK_AMPHUR', postUserData.QN_WORK_AMPHUR);
    urlSearchParams.append('QN_WORK_PROVINCE_NAME', postUserData.QN_WORK_PROVINCE_NAME);
    urlSearchParams.append('QN_WORK_ZIPCODE', postUserData.QN_WORK_ZIPCODE);
    urlSearchParams.append('QN_WORK_TEL', postUserData.QN_WORK_TEL);
    urlSearchParams.append('QN_WORK_FAX', postUserData.QN_WORK_FAX);
    urlSearchParams.append('QN_WORK_URL', postUserData.QN_WORK_URL);
    urlSearchParams.append('AF_FIND_WORK', postUserData.AF_FIND_WORK);
    urlSearchParams.append('QN_MATCH_EDU', postUserData.QN_MATCH_EDU);
    urlSearchParams.append('QN_WORK_APPLY', postUserData.QN_WORK_APPLY);
    urlSearchParams.append('QN_EMPLOYER', postUserData.QN_EMPLOYER);
    urlSearchParams.append('QN_AWARD', postUserData.QN_AWARD);
    urlSearchParams.append('QN_AWARD_TXT', postUserData.QN_AWARD_TXT);
    urlSearchParams.append('QN_AWARD_INSTITUTE', postUserData.QN_AWARD_INSTITUTE);
    urlSearchParams.append('QN_AWARD_MMYYYY', postUserData.QN_AWARD_MMYYYY);
    urlSearchParams.append('QN_ADDPROGRAM2', postUserData.QN_ADDPROGRAM2);
    urlSearchParams.append('QN_ADDPROGRAM1', postUserData.QN_ADDPROGRAM1);
    urlSearchParams.append('QN_ADDPROGRAM3', postUserData.QN_ADDPROGRAM3);
    urlSearchParams.append('QN_ADDPROGRAM4', postUserData.QN_ADDPROGRAM4);
    urlSearchParams.append('QN_ADDPROGRAM5', postUserData.QN_ADDPROGRAM5);
    urlSearchParams.append('QN_ADDPROGRAM6', postUserData.QN_ADDPROGRAM6);
    urlSearchParams.append('QN_COMMENT_PROGRAM', postUserData.QN_COMMENT_PROGRAM);
    urlSearchParams.append('QN_COMMENT_LEARN', postUserData.QN_COMMENT_LEARN);
    urlSearchParams.append('QN_COMMENT_SOCIAL', postUserData.QN_COMMENT_SOCIAL);
    urlSearchParams.append('QN_COMMENT_ACTIVITY', postUserData.QN_COMMENT_ACTIVITY);
    urlSearchParams.append('QN_COMMENT_LOCATION', postUserData.QN_COMMENT_LOCATION);
    urlSearchParams.append('QN_DATE_UPDATE', postUserData.QN_DATE_UPDATE);
    urlSearchParams.append('UPDATE_STATUS', postUserData.UPDATE_STATUS);
    urlSearchParams.append('INSERT_STATUS', postUserData.INSERT_STATUS);

    const body = urlSearchParams.toString();

    return this.httpUrl.post<questionResponseInsertUpdateEn>(`${environment._base_url}questions-naire-choices-en-b.jsp`, body, { headers: headers });

  }
  /// จบ -------- ป.ตรี ---------------------------------------


  //-- Get คำถาม และ คำตอบ โท เอก  ENG
  getHttpQuestionsEnM(LEV_ID) {

    return this.httpUrl.get<questionResponse_M_DataInterface>(`${environment._base_url}questions-naire-en-m.jsp?lev_id=${LEV_ID}`);

  }

  //-- เคยทำแบบสำรวจ แล้วหรือไม่?
  //-- ไม่เคย กลับไป Set ค่า INSERT_STATUS = "true"
  //-- ใช่เคย กลับไป Set ค่า UPDATE_STATUS = "true"
  getHttpCheckInsertBeforeEnM(STD_CODE: string) {
    return this.httpUrl.get<questionSetInterface_En_M_Data>(`${environment._base_url}checked-data-before-en-m.jsp?STD_CODE=${STD_CODE}`);
  }

  postHttpQuestionsEnM(postUserData: questionSetInterface_En_M_Data) {

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' });

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('STD_CODE', postUserData.STD_CODE);
    urlSearchParams.append('PRENAME_NO', postUserData.PRENAME_NO);
    urlSearchParams.append('FIRST_NAME_ENG', postUserData.FIRST_NAME_ENG);
    urlSearchParams.append('LAST_NAME_ENG', postUserData.LAST_NAME_ENG);
    urlSearchParams.append('AGE', postUserData.AGE);
    urlSearchParams.append('GENDER_NO', postUserData.GENDER_NO);
    urlSearchParams.append('FACULTY_NO', postUserData.FACULTY_NO);
    urlSearchParams.append('MAJOR_NO', postUserData.MAJOR_NO);
    urlSearchParams.append('STD_TYPE', postUserData.STD_TYPE);
    urlSearchParams.append('STD_STUDY_TIME', postUserData.STD_STUDY_TIME);
    urlSearchParams.append('REGIONAL_NO', postUserData.REGIONAL_NO);
    urlSearchParams.append('BE_WORK_STATUS', postUserData.BE_WORK_STATUS);
    urlSearchParams.append('CAMPUS_NO', postUserData.CAMPUS_NO);
    urlSearchParams.append('QN_PLAN_NO', postUserData.QN_PLAN_NO);
    urlSearchParams.append('QN_WORK_STATUS', postUserData.QN_WORK_STATUS);
    urlSearchParams.append('QN_OCCUP_TYPE', postUserData.QN_OCCUP_TYPE);
    urlSearchParams.append('QN_OCCUP_TYPE_TXT', postUserData.QN_OCCUP_TYPE_TXT);
    urlSearchParams.append('QN_WORK_NAME', postUserData.QN_WORK_NAME);
    urlSearchParams.append('QN_WORK_NO', postUserData.QN_WORK_NO);
    urlSearchParams.append('QN_WORK_MOO', postUserData.QN_WORK_MOO);
    urlSearchParams.append('QN_WORK_BUILDING', postUserData.QN_WORK_BUILDING);
    urlSearchParams.append('QN_WORK_FLOOR', postUserData.QN_WORK_FLOOR);
    urlSearchParams.append('QN_WORK_SOI', postUserData.QN_WORK_SOI);
    urlSearchParams.append('QN_WORK_STREET', postUserData.QN_WORK_STREET);
    urlSearchParams.append('QN_WORK_TAMBON', postUserData.QN_WORK_TAMBON);
    urlSearchParams.append('QN_WORK_AMPHUR', postUserData.QN_WORK_AMPHUR);
    urlSearchParams.append('QN_WORK_PROVINCE_NAME', postUserData.QN_WORK_PROVINCE_NAME);
    urlSearchParams.append('QN_WORK_ZIPCODE', postUserData.QN_WORK_ZIPCODE);
    urlSearchParams.append('QN_WORK_TEL', postUserData.QN_WORK_TEL);
    urlSearchParams.append('QN_MATCH_EDU', postUserData.QN_MATCH_EDU);
    urlSearchParams.append('QN_WORK_APPLY', postUserData.QN_WORK_APPLY);
    urlSearchParams.append('QN_AWARD', postUserData.QN_AWARD);
    urlSearchParams.append('QN_AWARD_TXT', postUserData.QN_AWARD_TXT);
    urlSearchParams.append('QN_AWARD_INSTITUTE', postUserData.QN_AWARD_INSTITUTE);
    urlSearchParams.append('QN_AWARD_MMYYYY', postUserData.QN_AWARD_MMYYYY);
    urlSearchParams.append('QN_CURR_PROPER', postUserData.QN_CURR_PROPER);
    urlSearchParams.append('QN_CURR_MORAL', postUserData.QN_CURR_MORAL);
    urlSearchParams.append('QN_CURR_CO', postUserData.QN_CURR_CO);
    urlSearchParams.append('QN_CURR_INSPIRE', postUserData.QN_CURR_INSPIRE);
    urlSearchParams.append('QN_CURR_OUTSIDE', postUserData.QN_CURR_OUTSIDE);
    urlSearchParams.append('QN_INS_CONTENT', postUserData.QN_INS_CONTENT);
    urlSearchParams.append('QN_INS_ONTIME', postUserData.QN_INS_ONTIME);
    urlSearchParams.append('QN_INS_KNOWLEDGE', postUserData.QN_INS_KNOWLEDGE);
    urlSearchParams.append('QN_INS_EXTENSIVE', postUserData.QN_INS_EXTENSIVE);
    urlSearchParams.append('QN_INS_ETHICS', postUserData.QN_INS_ETHICS);
    urlSearchParams.append('QN_INS_LUCID', postUserData.QN_INS_LUCID);
    urlSearchParams.append('QN_MEDIA_MODERN', postUserData.QN_MEDIA_MODERN);
    urlSearchParams.append('QN_MEDIA_ACC', postUserData.QN_MEDIA_ACC);
    urlSearchParams.append('QN_MEDIA_NETWORK', postUserData.QN_MEDIA_NETWORK);
    urlSearchParams.append('QN_MEDIA_DOC', postUserData.QN_MEDIA_DOC);
    urlSearchParams.append('QN_MEDIA_FULLY', postUserData.QN_MEDIA_FULLY);
    urlSearchParams.append('QN_ROOM_STUDY', postUserData.QN_ROOM_STUDY);
    urlSearchParams.append('QN_ROOM_OVERVIEW', postUserData.QN_ROOM_OVERVIEW);
    urlSearchParams.append('QN_ROOM_CLEAN', postUserData.QN_ROOM_CLEAN);
    urlSearchParams.append('QN_ROOM_SIZE', postUserData.QN_ROOM_SIZE);
    urlSearchParams.append('QN_ROOM_LIBRARY', postUserData.QN_ROOM_LIBRARY);
    urlSearchParams.append('QN_ROOM_SAFETY', postUserData.QN_ROOM_SAFETY);
    urlSearchParams.append('QN_OFFER', postUserData.QN_OFFER);
    urlSearchParams.append('QN_UPDATE_DATE', postUserData.QN_UPDATE_DATE);
    urlSearchParams.append('INSERT_STATUS', postUserData.INSERT_STATUS);
    urlSearchParams.append('UPDATE_STATUS', postUserData.UPDATE_STATUS);

    const body = urlSearchParams.toString();

    return this.httpUrl.post<questionResponse_En_M_InsertUpdate>(`${environment._base_url}questions-naire-choices-en-m.jsp`, body, { headers: headers });

  }

  /// จบ -------- ป.โท / ป.เอก ------------------------------
}
