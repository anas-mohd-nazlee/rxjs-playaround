import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { PlayGroundBase } from '../../shared/components/playground-base';

@Component({
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent extends PlayGroundBase implements OnInit {

  initialDelay = 1000;
  period!: number;

  constructor() {
    super();
  }

  get target$(): Observable<any> {
    return timer(this.initialDelay, this.period);
  }

  ngOnInit(): void {
  }

}
