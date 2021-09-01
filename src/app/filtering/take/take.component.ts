import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { SubjectBase } from '../../shared/components/subject-base';

@Component({
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent extends SubjectBase<Subject<string>> implements OnInit {

  takeCount = 2;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  get target$(): Observable<any> {
    return this.subject$.pipe(take(this.takeCount))
  }

  protected getNewSubject(): Subject<string> {
    return new Subject();
  }
}
