import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  _url = 'http://uat.ru.ac.th/survey-api/authentications.jsp';
  constructor(private http: HttpClient) { }
}
