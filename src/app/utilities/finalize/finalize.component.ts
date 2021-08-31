import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SubjectBase } from '../../shared/components/subject-base';
import { TargetComponent } from '../../shared/components/target/target.component';

@Component({
  templateUrl: './finalize.component.html',
  styleUrls: ['./finalize.component.scss']
})
export class FinalizeComponent extends SubjectBase<Subject<string>> implements OnInit {

  @ViewChild(TargetComponent)
  targetComp!: TargetComponent;

  finalizeMsg = "Executing Complete Statement";

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  get target$(): Observable<any> {
    return this.subject$.pipe(finalize(() => this.targetComp.logInfo(this.finalizeMsg)));
  }

  protected getNewSubject(): Subject<string> {
    return new Subject();
  }
}
