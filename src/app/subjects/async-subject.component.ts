import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AsyncSubject, Observable, Subject } from 'rxjs';
import { SubjectBase } from '../shared/components/subject-base';

@Component({
  templateUrl: './subject.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncSubjectComponent extends SubjectBase<Subject<string>> implements OnInit {

  targetLabel = "Async Subject";
  description = "Emits latest value to observers upon completion";

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
    return new AsyncSubject();
  }
}
