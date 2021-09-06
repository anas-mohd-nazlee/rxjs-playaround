import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MultiSourceBase } from '../../shared/components/multi-source-base';

@Component({
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent extends MultiSourceBase implements OnInit {

  selectedSource = 0;
  sourceIndices: number[] = [];

  constructor() {
    super();
  }

  // TODO
  get target$(): Observable<any> {
    return this.subjects$[0].pipe(switchMap(() => this.subjects$[this.selectedSource]))
  }

  ngOnInit(): void {
  }

  onPublishersChange(publishers$: Observable<any>[]) {
    super.onPublishersChange(publishers$);
    this.sourceIndices = this.subjects$.map((sub, index) => index);
  }
}
