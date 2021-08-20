import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ModuleRoutings } from '../routing-details';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent implements OnInit {
  moduleRoutings = ModuleRoutings;

  constructor() { }

  ngOnInit(): void {
  }

}
