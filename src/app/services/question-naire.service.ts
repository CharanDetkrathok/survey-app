
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { questionResponseDataInterface } from '../question-naire/question-response-data';

@Injectable({
  providedIn: 'root'
})
export class QuestionNaireService {

  constructor(private http: HttpClient) { }

  getHttpQuestions(LEV_ID) {
    return this.http.get<questionResponseDataInterface>(`${environment._base_url}question-naire.jsp?lev_id=${LEV_ID}`);
  }
}
