import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { checkOpenCloseResponseDataInterface } from '../login/check-open-close-response-data';

@Injectable({
  providedIn: 'root'
})
export class CheckOpenCloseService {

  constructor(private http: HttpClient) { }

  httpCheckOpenClose() {

    return this.http.get<checkOpenCloseResponseDataInterface>(`${environment._base_url}check-open-close.jsp`);

  }
}
