import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { SubjectBase } from '../../shared/components/subject-base';

@Component({
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartWithComponent extends SubjectBase<Subject<string>> implements OnInit {

  targetLabel = 'StartWith';
  description = 'Emit given value first.';
  startWithValue = 'Hello World';

  constructor() {
    super();
  }

  get target$(): Observable<any> {
    return this.subject$?.pipe(startWith(this.startWithValue));
  }

  ngOnInit(): void {
  }

  protected getNewSubject(): Subject<string> {
    return new Subject();
  }
}
