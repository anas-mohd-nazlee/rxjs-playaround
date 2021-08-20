import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-subscriber-parent',
  templateUrl: './subscriber-parent.component.html',
  styleUrls: ['./subscriber-parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubscriberParentComponent implements OnInit {

  private readonly allSub: Subscription = new Subscription();
  subscribers: number[] = []

  @Input()
  target$!: Observable<string>;

  @Input()
  isTargetInitialized!: boolean;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.onAddSubscriber();
  }

  onAddSubscriber(): void {
    this.subscribers.push(Date.now());
    this.cdr.detectChanges();
  }

  onRemoveSubscriber(subId: number): void {
    this.subscribers.splice(subId, 1);
    this.cdr.detectChanges();
  }

  onChildSubscription(sub: Subscription): void {
    this.allSub.add(sub);
  }

  onUnsubscribeAll(): void {
    this.allSub.unsubscribe();
  }
}
