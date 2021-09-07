import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap, map, share, shareReplay } from 'rxjs/operators';
import { SubjectBase } from '../../shared/components/subject-base';
import { TargetComponent } from '../../shared/components/target/target.component';

@Component({
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})
export class ShareReplayComponent extends SubjectBase<Subject<string>> implements OnInit {

  @ViewChild(TargetComponent)
  target!: TargetComponent;

  bufferSize!: number;
  windowSize!: number;

  private shareReply$!: Observable<string>;

  constructor() {
    super();
  }

  get target$(): Observable<any> {
    return this.shareReply$;
  }

  ngOnInit(): void {
  }

  onCreateSubject(): void {
    super.onCreateSubject();
    this.shareReply$ = this.subject$.pipe(
      tap(() => this.target?.logInfo("Execute Side Effect")),
      map((value: string) => this.convertToUpperCase(value)),
      shareReplay()
    );
  }

  onBufferOrWindowChange(): void {
    this.shareReply$ = this.subject$.pipe(
      tap(() => this.target?.logInfo("Execute Side Effect")),
      map((value: string) => this.convertToUpperCase(value)),
      shareReplay(this.bufferSize, this.windowSize)
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
