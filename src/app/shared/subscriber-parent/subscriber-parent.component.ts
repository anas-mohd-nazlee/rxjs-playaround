import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-subscriber-parent',
  templateUrl: './subscriber-parent.component.html',
  styleUrls: ['./subscriber-parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubscriberParentComponent implements OnInit {

  private subscriberId = 0;
  subscriberIds: number[] = []

  @Input()
  target$!: Observable<any>;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.onAddSubscriber();
  }

  onAddSubscriber(): void {
    this.subscriberIds.push(this.subscriberId);
    this.subscriberId++;
    this.cdr.detectChanges();
  }

  onRemoveSubscriber(subId: number): void {
    this.subscriberIds.splice(subId, 1);
    this.cdr.detectChanges();
  }

  onRemoveAllSubscribers(): void {
    this.subscriberIds = [];
  }
}
