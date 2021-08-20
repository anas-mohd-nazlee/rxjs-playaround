import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PlayGroundBase } from '../../shared/components/playground-base';
import { getLoremIpsum } from '../../shared/functions/get-lorem-ipsum';

@Component({
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfComponent extends PlayGroundBase implements OnInit {

  wordCount = 1;

  constructor() {
    super();
  }

  get target$(): Observable<string> {
    const words = getLoremIpsum(this.wordCount).split(" ");
    return of(...words);
  }

  ngOnInit(): void {
    super.isTargetInitialized = true;
  }

}
