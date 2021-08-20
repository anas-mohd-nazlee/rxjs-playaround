import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { PlayGroundBase } from '../../shared/components/playground-base';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyComponent extends PlayGroundBase implements OnInit {

  constructor() {
    super();
  }

  get target$(): Observable<string> {
    return EMPTY;
  }

  ngOnInit(): void {
    this.isTargetInitialized = true;
  }

}
