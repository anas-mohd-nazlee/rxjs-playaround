import { Component, OnInit } from '@angular/core';
import pkgDep from 'package.json';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  angularVersion = pkgDep.dependencies['@angular/core'];
  rxjsVersion = pkgDep.dependencies.rxjs;

  constructor() { }

  ngOnInit(): void {
  }

}
