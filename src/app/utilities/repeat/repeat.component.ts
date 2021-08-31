import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { repeat } from 'rxjs/operators';
import { SubjectBase } from '../../shared/components/subject-base';

@Component({
  templateUrl: './repeat.component.html',
  styleUrls: ['./repeat.component.scss']
})
export class RepeatComponent extends SubjectBase<Subject<string>>  implements OnInit {

  repeatCount = 2;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  get target$(): Observable<any> {
    return this.subject$.pipe(repeat(this.repeatCount));
  }

  protected getNewSubject(): Subject<string> {
    return new ReplaySubject();
  }
}
