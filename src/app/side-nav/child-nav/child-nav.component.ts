import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child-nav',
  templateUrl: './child-nav.component.html',
  styleUrls: ['./child-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
