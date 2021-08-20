import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { getLoremIpsum } from '../functions/get-lorem-ipsum';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TargetComponent implements OnInit {
  private readonly textLogs: string[] = [];
  textMessage = "";

  @Input()
  targetLabel = "Publisher";

  @Input()
  isTargetInitialized!: boolean;

  @Output()
  sendMessage: EventEmitter<string> = new EventEmitter();

  @Output()
  finishSubject: EventEmitter<void> = new EventEmitter();

  @Output()
  reCreateSubject: EventEmitter<void> = new EventEmitter();

  constructor(private cdr: ChangeDetectorRef) { }

  get displayLog(): string {
    return this.textLogs.join("\n");
  }

  ngOnInit(): void {
  }

  onSendMessage(): void {
    this.sendMessage.emit(this.textMessage);
    this.logInfo(`Push Message: ${this.textMessage}`);
  }

  onSendRandomMessage(): void {
    const randomMsg = getLoremIpsum();
    this.sendMessage.emit(randomMsg);
    this.logInfo(`Push Message: ${randomMsg}`);
  }

  onFinishSubject(): void {
    this.finishSubject.emit();
    this.logInfo("Complete Subject");
  }

  onRecreateSubject(): void {
    this.reCreateSubject.emit();
    this.logInfo("Re-Initialize Subject");
  }

  test(event: any) {
    console.log(event);
  }

  protected logInfo(log: string): void {
    this.textLogs.unshift(log);
    this.cdr.detectChanges();
  }
}
