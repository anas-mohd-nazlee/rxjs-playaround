import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SubjectBase } from '../../shared/components/subject-base';
import { TargetComponent } from '../../shared/components/target/target.component';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TapComponent extends SubjectBase<Subject<string>> implements OnInit {

  @ViewChild(TargetComponent)
  targetComp!: TargetComponent;

  tapMsg = "Execute Side-effect";

  constructor() {
    super();
  }

  get target$(): Observable<string> {
    return this.subject$.pipe(tap(() => this.targetComp.logInfo(this.tapMsg)));
  }

  ngOnInit(): void {
  }

  protected getNewSubject(): Subject<string> {
    return new Subject();
  }
}
