import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { MultiSourceBase } from '../../shared/components/multi-source-base';

@Component({
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MergeComponent extends MultiSourceBase implements OnInit {

  constructor() {
    super();
  }

  get target$(): Observable<any> {
    return merge(...this.subjects$);
  }

  ngOnInit(): void {
  }

  onPublishersChange(publishers$: Observable<string>[]) {
    this.subjects$ = publishers$;
  }
}
