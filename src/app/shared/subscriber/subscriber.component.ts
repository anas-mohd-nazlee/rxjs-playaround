import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubscriberComponent implements OnInit, OnDestroy {

  @Input()
  target$!: Observable<string>;

  @Input()
  isTargetInitialized!: boolean;

  @Input()
  subscriberLabel!: number;

  @Output()
  removeSubscriber: EventEmitter<void> = new EventEmitter();

  @Output()
  subscription: EventEmitter<Subscription> = new EventEmitter();

  private readonly textResults: string[] = [];
  private readonly resultSub: Subscription = new Subscription();

  constructor(private cdr: ChangeDetectorRef) { }

  get textToDisplay(): string {
    return this.textResults.join("\n");
  }

  ngOnInit(): void {
    this.resultSub.add(() => this.updateTextResult("Teardown Executed"));
  }

  ngOnDestroy(): void {
    this.onUnsubscribeTarget();
  }

  onRemoveSubscriber(): void {
    this.removeSubscriber.emit();
  }

  onSubscribeToTarget(): void {
    this.updateTextResult("Subscribe");
    const newSub = this.target$?.subscribe(
      value => this.updateTextResult(`Next: ${value}`),
      error => this.updateTextResult(`Error: ${error}`),
      () => this.updateTextResult("Complete")
    );

    this.resultSub.add(newSub);
    this.subscription.emit(newSub);
  }

  onUnsubscribeTarget(): void {
    this.updateTextResult("Unsubscribe");
    this.resultSub?.unsubscribe();
  }

  private updateTextResult(text: string): void {
    this.textResults.unshift(text);
    this.cdr.detectChanges();
  }
}
