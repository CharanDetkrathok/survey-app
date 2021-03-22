import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errors-handles',
  templateUrl: './errors-handles.component.html',
  styleUrls: ['./errors-handles.component.css']
})
export class ErrorsHandlesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { sessionStorage.clear(); }

}
