import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { getLoremIpsum } from '../../functions/get-lorem-ipsum';

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
  description = "";

  @Input()
  isRemovable = false;

  @Output()
  sendMessage: EventEmitter<string> = new EventEmitter();

  @Output()
  finishSubject: EventEmitter<void> = new EventEmitter();

  @Output()
  createSubject: EventEmitter<void> = new EventEmitter();

  @Output()
  disposeSubject: EventEmitter<void> = new EventEmitter();

  @Output()
  removePublisher: EventEmitter<void> = new EventEmitter();

  generateRandomMessage: () => string = () => getLoremIpsum();

  constructor(private cdr: ChangeDetectorRef) { }

  get displayLog(): string {
    return this.textLogs.join("\n");
  }

  ngOnInit(): void {
    this.onCreateSubject();
  }

  onSendRandomMessage(): void {
    const randomMsg = this.generateRandomMessage();
    this.sendMessage.emit(randomMsg);
    this.logInfo(`Next: ${randomMsg}`);
  }

  onFinishSubject(): void {
    this.finishSubject.emit();
    this.logInfo("Complete Subject");
  }

  onCreateSubject(): void {
    this.createSubject.emit();
    this.logInfo("Create Subject");
  }

  onDisposeSubject(): void {
    this.disposeSubject.emit();
    this.logInfo("Dispose Subject");
  }

  onRemovePublisher(): void {
    this.removePublisher.emit();
  }

  logInfo(log: string): void {
    this.textLogs.unshift(log);
    this.cdr.detectChanges();
  }
}
