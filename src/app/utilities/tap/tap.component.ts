import { Component, OnInit, ChangeDetectionStrategy, ViewChild, OnDestroy } from '@angular/core';
import { ConnectableObservable, Observable, Subject, Subscription, timer } from 'rxjs';
import { multicast, tap } from 'rxjs/operators';
import { SubjectBase } from '../../shared/components/subject-base';
import { TargetComponent } from '../../shared/target/target.component';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TapComponent extends SubjectBase<Subject<string>> implements OnInit, OnDestroy {

  private readonly subs: Subscription = new Subscription();

  @ViewChild(TargetComponent)
  targetComp!: TargetComponent;

  tapDemo$!: Observable<string>;
  isMulticast = false;

  constructor() {
    super();
  }

  get target$(): Observable<string> {
    return this.tapDemo$;
  }

  ngOnInit(): void {
    this.onCreateSubject();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onCastChange(isMulticast: boolean) {
    this.targetComp.logInfo(`Setting Multicast to ${isMulticast}`);
    this.isMulticast = isMulticast;
    this.targetComp.onFinishSubject();
    this.targetComp.onCreateSubject();
  }

  onConnectObservable(): void {
    this.targetComp.logInfo("Observable connected");
    const multicast$ = this.tapDemo$ as ConnectableObservable<string>;
    this.subs.add(multicast$.connect());
  }

  onDisconnectObservable(): void {
    this.targetComp.logInfo("Observable disconnected");
    this.subs.unsubscribe();
  }

  onCreateSubject(): void {
    super.onCreateSubject();
    this.setTapDemo();
  }

  protected getNewSubject(): Subject<string> {
    return new Subject();
  }

  private setTapDemo(): void {
    const tapDemo$ = this.subject$.pipe(tap(v => this.targetComp.logInfo(`Side Effect: ${v}`)));
    this.tapDemo$ = this.isMulticast ? this.convertToMulticast(tapDemo$) : tapDemo$;
  }

  private convertToMulticast(tapDemo$: Observable<string>): Observable<string> {
    return tapDemo$.pipe(multicast(new Subject()));
  }
}
