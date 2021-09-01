import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { SubjectBase } from '../../shared/components/subject-base';
import { TargetComponent } from '../../shared/components/target/target.component';

@Component({
  templateUrl: './distinct-until-changed.component.html',
  styleUrls: ['./distinct-until-changed.component.scss']
})
export class DistinctUntilChangedComponent extends SubjectBase<Subject<string>> implements OnInit, AfterViewInit {

  @ViewChild(TargetComponent)
  targetComponent!: TargetComponent;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.targetComponent.generateRandomMessage = () => this.generateHourMinute();
  }

  get target$(): Observable<any> {
    return this.subject$.pipe(distinctUntilChanged());
  }

  private generateHourMinute(): string {
    return new Date(Date.now()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }

  protected getNewSubject(): Subject<string> {
    return new Subject();
  }
}
