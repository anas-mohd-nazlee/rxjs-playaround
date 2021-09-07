import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap, map, multicast, share } from 'rxjs/operators';
import { SubjectBase } from '../../shared/components/subject-base';
import { TargetComponent } from '../../shared/components/target/target.component';

@Component({
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent extends SubjectBase<Subject<string>> implements OnInit {

  @ViewChild(TargetComponent)
  target!: TargetComponent;

  private share$!: Observable<string>;

  constructor() {
    super();
  }

  get target$(): Observable<any> {
    return this.share$;
  }

  ngOnInit(): void {
  }

  onCreateSubject(): void {
    super.onCreateSubject();
    this.share$ = this.subject$.pipe(
      tap(() => this.target?.logInfo("Execute Side Effect")),
      map((value: string) => this.convertToUpperCase(value)),
      share()
    );
  }

  protected getNewSubject(): Subject<string> {
    return new Subject();
  }

  private convertToUpperCase(value: string): string {
    this.target?.logInfo("Convert To Upper Case");
    return value.toUpperCase();
  }
}
