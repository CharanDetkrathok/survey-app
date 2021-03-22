import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userResponseDataInterface } from '../login/user-response-data';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  httpLogin(STD_CODE, BIRTH_DATE) {

    return this.http.get<userResponseDataInterface>(`${environment._base_url}authentications.jsp?std_code=${STD_CODE}&std_birth_day=${BIRTH_DATE}`);

  }
}
