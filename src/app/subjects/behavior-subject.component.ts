import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SubjectBase } from '../shared/components/subject-base';

@Component({
  templateUrl: './behavior-subject.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BehaviorSubjectComponent extends SubjectBase<Subject<string>> implements OnInit {

  targetLabel = "Behavior Subject";
  description = "Requires an initial value and emits its current value (last emitted item) to new subscribers.";
  initialValue = "Hello World";

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
    return new BehaviorSubject(this.initialValue);
  }
}
