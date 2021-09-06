import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { MultiSourceBase } from '../../shared/components/multi-source-base';

@Component({
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss'],
})
export class ConcatMapComponent extends MultiSourceBase implements OnInit {
  publisherNames = ['Outer Observable', 'Inner Observable'];

  constructor() {
    super();
  }

  get target$(): Observable<any> {
    return this.subjects$[0].pipe(
      concatMap((outerVal) =>
        this.subjects$[1].pipe(
          map(
            (innerVal) => `Outer Value: ${outerVal}, Inner Value: ${innerVal}`
          )
        )
      )
    );
  }

  ngOnInit(): void {}
}
