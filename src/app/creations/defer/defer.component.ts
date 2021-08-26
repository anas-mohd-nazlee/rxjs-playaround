import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { defer, Observable, of } from 'rxjs';
import { PlayGroundBase } from '../../shared/components/playground-base';

@Component({
  templateUrl: './defer.component.html',
  styleUrls: ['./defer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeferComponent extends PlayGroundBase implements OnInit {

  isDeferred = true;
  private deferred$ = defer(() => of(new Date().toLocaleString()));
  private nonDeferred$ = of(new Date().toLocaleString());

  constructor() {
    super();
  }

  get target$(): Observable<string> {
    return this.isDeferred ?  this.deferred$ : this.nonDeferred$;
  }

  ngOnInit(): void {
  }

}
