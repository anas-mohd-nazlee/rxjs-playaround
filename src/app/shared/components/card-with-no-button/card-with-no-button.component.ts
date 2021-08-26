import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-card-with-no-button',
  templateUrl: './card-with-no-button.component.html',
  styleUrls: ['./card-with-no-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardWithNoButtonComponent implements OnInit {

  @Input()
  targetLabel = "";

  @Input()
  description = "";

  constructor() { }

  ngOnInit(): void {
  }

}
