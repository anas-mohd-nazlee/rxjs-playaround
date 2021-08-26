import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { PlayGroundBase } from '../../shared/components/playground-base';

@Component({
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntervalComponent extends PlayGroundBase implements OnInit {

  period = 1000;

  constructor() {
    super();
  }

  get target$(): Observable<any> {
    return interval(this.period);
  }

  ngOnInit(): void {
  }

}
