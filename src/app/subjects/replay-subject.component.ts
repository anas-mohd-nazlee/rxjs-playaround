import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { SubjectBase } from '../../shared/components/subject-base';

@Component({
  templateUrl: './subject.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReplaySubjectComponent extends SubjectBase<Subject<string>> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.onCreateSubject();
  }

  get target$(): Observable<string> {
    return this.subject$;
  }

  protected getNewSubject(): Subject<string> {
    return new ReplaySubject();
  }
}
