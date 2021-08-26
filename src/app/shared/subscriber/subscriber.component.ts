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
  target$!: Observable<any>;

  @Input()
  subscriberLabel!: number;

  @Output()
  removeSubscriber: EventEmitter<void> = new EventEmitter();

  private readonly textResults: string[] = [];
  private resultSub!: Subscription;

  constructor(private cdr: ChangeDetectorRef) { }

  get textToDisplay(): string {
    return this.textResults.join("\n");
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.resultSub?.unsubscribe();
  }

  onRemoveSubscriber(): void {
    this.removeSubscriber.emit();
  }

  onSubscribeToTarget(): void {
    this.updateTextResult("Subscribe");
    this.resultSub = this.target$?.subscribe(
      value => this.updateTextResult(`Next: ${value}`),
      error => this.updateTextResult(`Error: ${error}`),
      () => this.updateTextResult("Complete")
    );
  }

  onUnsubscribeTarget(): void {
    this.resultSub?.add(() => this.updateTextResult("Teardown Executed"));
    this.updateTextResult("UnSubscribe");
    this.resultSub?.unsubscribe();
  }

  private updateTextResult(text: string): void {
    this.textResults.unshift(text);
    this.cdr.detectChanges();
  }
}
