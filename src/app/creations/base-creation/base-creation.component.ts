import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-base-creation',
  templateUrl: './base-creation.component.html',
  styleUrls: ['./base-creation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseCreationComponent implements OnInit {

  @Input()
  targetLabel = "";

  @Input()
  description = "";

  @Input()
  target$!: Observable<string>

  @Input()
  isTargetInitialized!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
