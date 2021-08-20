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
  private resultSub!: Subscription;

  constructor(private cdr: ChangeDetectorRef) { }

  get textToDisplay(): string {
    return this.textResults.join("\n");
  }

  get subscribeColor(): ThemePalette {
    return this.isTargetInitialized ? undefined : "warn";
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.onUnsubscribeTarget();
  }

  onRemoveSubscriber(): void {
    this.removeSubscriber.emit();
  }

  onSubscribeToTarget(): void {
    this.updateTextResult("Subscribing to Target");
    this.resultSub = this.target$?.subscribe(
      value => this.updateTextResult(`Received: ${value}`),
      error => this.updateTextResult(`Error: ${error}`),
      () => this.updateTextResult("Observable Completed")
    );

    this.resultSub.add(() => this.updateTextResult("Teardown Executed"));
  }

  onUnsubscribeTarget(): void {
    this.updateTextResult("Unsubscribing to Target");
    this.resultSub?.unsubscribe();
  }

  private updateTextResult(text: string): void {
    this.textResults.unshift(text);
    this.cdr.detectChanges();
  }
}
