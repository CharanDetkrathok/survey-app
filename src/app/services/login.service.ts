import { userResponseDataEnInterface } from './../login/user-response-data';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userResponseDataInterface, CheckLanguageBefore } from '../login/user-response-data';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  httpCheckLanguageBefore(STD_CODE) {

    return this.http.get<CheckLanguageBefore>(`${environment._base_url}authentications-checked-language-before.jsp?std_code=${STD_CODE}`);

  }


  httpLogin(STD_CODE, BIRTH_DATE) {

    return this.http.get<userResponseDataInterface>(`${environment._base_url}authentications.jsp?std_code=${STD_CODE}&std_birth_day=${BIRTH_DATE}`);

  }

  httpLoginEn(STD_CODE, BIRTH_DATE) {

    return this.http.get<userResponseDataEnInterface>(`${environment._base_url}authentications-en.jsp?std_code=${STD_CODE}&std_birth_day=${BIRTH_DATE}`);

  }
}
