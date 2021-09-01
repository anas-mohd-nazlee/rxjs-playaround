import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MultiSourceBase } from '../../shared/components/multi-source-base';

@Component({
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss']
})
export class TakeUntilComponent extends MultiSourceBase implements OnInit {

  publisherNames = ["Source", "Notifier"];

  constructor() {
    super();
  }

  get target$(): Observable<any> {
    return this.subjects$[0].pipe(takeUntil(this.subjects$[1]));
  }

  ngOnInit(): void {
  }
}
