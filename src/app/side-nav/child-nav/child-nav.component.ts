import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-child-nav',
  templateUrl: './child-nav.component.html',
  styleUrls: ['./child-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildNavComponent implements OnInit {

  @Input()
  routingPaths!: Record<string, string>;

  @Input()
  moduleName!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
