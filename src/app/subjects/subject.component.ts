import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SubjectBase } from '../shared/components/subject-base';

@Component({
  templateUrl: './subject.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectComponent extends SubjectBase<Subject<string>> implements OnInit {

  targetLabel = "Subject";
  description = "No initial value or replay behavior.";

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
    return new Subject();
  }
}
