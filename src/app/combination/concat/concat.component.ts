import { Component, OnInit } from '@angular/core';
import { concat, Observable } from 'rxjs';
import { MultiSourceBase } from '../../shared/components/multi-source-base';

@Component({
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent extends MultiSourceBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  get target$(): Observable<any> {
    return concat(...this.subjects$);
  }

  onPublishersChange(publishers$: Observable<string>[]) {
    this.subjects$ = publishers$;
  }
}
