import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { userResponseData } from './user-response-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  // -- เอาไว้เปลี่ยน format เป็น 'MM/dd/yyyy' -- //
  pipe = new DatePipe('en-US');
  dateNewFormat = new Date();

  STD_CODE: string;
  BIRTH_DATE: string;

  userLoginForm = this.formBuilder.group({
    std_code: ['', [Validators.required, Validators.minLength(10)]],
    birth_date: ['', [Validators.required]]
  });

  responseDataList: Array<userResponseData> = [];

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit(): void { }

  // ---- เอาไว้ Validate การกรอก นักศึกษา Bidding ค่าไป template----//
  get stdCode() {
    return this.userLoginForm.get('std_code');
  }

  get birthDate() {
    return this.userLoginForm.get('birth_date');
  }



  onSubmit(): void {

    let tempNewDate = this.pipe.transform(this.userLoginForm.get('birth_date').value.toString(), 'MM/dd/yyyy').toString();

    this.userLoginForm.setValue({
      std_code: this.userLoginForm.get('std_code').value,
      birth_date: tempNewDate
    });

    this.STD_CODE = this.userLoginForm.get('std_code').value.toString();
    this.BIRTH_DATE = tempNewDate;

    console.log(this.userLoginForm.value);
    console.log(this.STD_CODE);
    console.log(this.BIRTH_DATE);

    this.http.get<userResponseData[]>('http://uat.ru.ac.th/survey-api/authentications.jsp?' + 'std_code=' + this.STD_CODE + '&std_birth_day=' + this.BIRTH_DATE).subscribe(response => {
      console.log('response', response);
      this.responseDataList.push(response);
      // this.responseDataList = JSON.stringify(response);
    });
  }



}
