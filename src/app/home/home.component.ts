import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  angularVersion = "12.1.0";
  rxjsVersion = "6.6.0";

  constructor() { }

  ngOnInit(): void {
  }

}
