import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { SubjectBase } from '../shared/components/subject-base';

@Component({
  templateUrl: './replay-subject.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReplaySubjectComponent extends SubjectBase<Subject<string>> implements OnInit {

  targetLabel = "Replay Subject";
  description = "Emits specified number of last emitted values (a replay) to new subscribers."
  bufferSize!: number;
  windowSize!: number;

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
    return new ReplaySubject(this.bufferSize, this.windowSize);
  }
}
