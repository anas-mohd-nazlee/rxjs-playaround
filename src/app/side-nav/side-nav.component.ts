import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SubjectRoutingPaths } from '../subjects/subject-routing-paths';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent implements OnInit {
  subjectRoutingPaths = SubjectRoutingPaths;

  constructor() { }

  ngOnInit(): void {
  }

}
