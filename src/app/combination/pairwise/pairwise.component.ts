import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { pairwise } from 'rxjs/operators';
import { SubjectBase } from '../../shared/components/subject-base';

@Component({
  templateUrl: './pairwise.component.html',
  styleUrls: ['./pairwise.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PairwiseComponent extends SubjectBase<Subject<any>> implements OnInit {

  targetLabel = 'Pairwise';
  description = 'Emit the previous and current values as an array.';

  constructor() {
    super();
  }

  get target$(): Observable<any> {
    return this.subject$?.pipe(pairwise());
  }

  ngOnInit(): void {
  }

  protected getNewSubject(): Subject<any> {
    return new Subject();
  }
}
