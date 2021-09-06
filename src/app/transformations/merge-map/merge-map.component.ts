import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { MultiSourceBase } from '../../shared/components/multi-source-base';

@Component({
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent extends MultiSourceBase implements OnInit {

  publisherNames = ['Outer Observable', 'Inner Observable'];

  constructor() {
    super();
  }

  get target$(): Observable<any> {
    return this.subjects$[0].pipe(
      mergeMap((outerVal) =>
        this.subjects$[1].pipe(
          map(
            (innerVal) => `Outer Value: ${outerVal}, Inner Value: ${innerVal}`
          )
        )
      )
    );
  }

  ngOnInit(): void {
  }

}
