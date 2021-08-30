import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { endWith } from 'rxjs/operators';
import { SubjectBase } from '../../shared/components/subject-base';

@Component({
  templateUrl: './end-with.component.html',
  styleUrls: ['./end-with.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EndWithComponent extends SubjectBase<Subject<string>> implements OnInit {

  targetLabel = 'EndWith';
  description = '';
  endWithValue = 'END OF LINE';

  constructor() {
    super();
  }

  get target$(): Observable<any> {
    return this.subject$.pipe(endWith(this.endWithValue));
  }

  ngOnInit(): void {
  }

  protected getNewSubject(): Subject<string> {
    return new Subject();
  }
}
