import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MultiSourceBase } from '../../shared/components/multi-source-base';

@Component({
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent extends MultiSourceBase implements OnInit {

  readonly selectedSource$: BehaviorSubject<number> = new BehaviorSubject(0);
  sourceIndices: number[] = [];

  constructor() {
    super();
  }

  get target$(): Observable<any> {
    return this.selectedSource$.pipe(switchMap(value => this.subjects$[value]))
  }

  ngOnInit(): void {
  }

  onPublishersChange(publishers$: Observable<any>[]) {
    super.onPublishersChange(publishers$);
    this.sourceIndices = this.subjects$.map((sub, index) => index);
  }

  onSourceChange(sourceId: any): void {
    this.selectedSource$.next(sourceId);
  }
}
