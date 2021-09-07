import { Component, OnInit, ViewChild } from '@angular/core';
import { ConnectableObservable, Observable, Subject } from 'rxjs';
import { tap, map, multicast } from 'rxjs/operators';
import { SubjectBase } from '../../shared/components/subject-base';
import { TargetComponent } from '../../shared/components/target/target.component';

@Component({
  templateUrl: './multicast.component.html',
  styleUrls: ['./multicast.component.scss']
})
export class MulticastComponent extends SubjectBase<Subject<string>> implements OnInit {

  @ViewChild(TargetComponent)
  target!: TargetComponent;

  private multi$!: Observable<string>;

  constructor() {
    super();
  }

  get target$(): Observable<string> {
    return this.multi$;
  }

  ngOnInit(): void {
  }

  onCreateSubject(): void {
    super.onCreateSubject();
    this.multi$ = this.subject$.pipe(
      tap(() => this.target?.logInfo("Execute Side Effect")),
      map((value: string) => this.convertToUpperCase(value)),
      multicast<string>(() => new Subject<string>())
    );
  }

  onConnectObservable(): void {
    (this.multi$ as ConnectableObservable<string>).connect();
  }

  protected getNewSubject(): Subject<string> {
    return new Subject();
  }

  private convertToUpperCase(value: string): string {
    this.target?.logInfo("Convert To Upper Case");
    return value.toUpperCase();
  }
}
