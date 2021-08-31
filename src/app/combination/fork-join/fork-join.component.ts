import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { MultiSourceBase } from '../../shared/components/multi-source-base';

@Component({
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent extends MultiSourceBase implements OnInit {

  constructor() {
    super();
  }

  get target$(): Observable<any> {
    return forkJoin(this.subjects$);
  }

  ngOnInit(): void {
  }

}
