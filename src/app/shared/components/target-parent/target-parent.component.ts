import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-target-parent',
  templateUrl: './target-parent.component.html',
  styleUrls: ['./target-parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TargetParentComponent implements OnInit {

  @Input()
  initialPublisherCount = 1;

  @Output()
  currentPublishers: EventEmitter<Observable<string>[]> = new EventEmitter();

  subjects$: Subject<string>[] = [];

  constructor(private cdr: ChangeDetectorRef) { }

  get publishers(): number[] {
    return [...Array(this.subjects$.length).keys()];
  }

  ngOnInit(): void {
    for (let i = 0; i < this.initialPublisherCount; i++) {
      this.onNewPublisher();
    }
  }

  onNewPublisher(): void {
    this.subjects$.push(new Subject());
    this.currentPublishers.emit(this.subjects$);
  }

  onRemoveAllPublishers(): void {
    this.subjects$ = [];
  }

  onRemovePublisher(id: number): void {
    this.subjects$.splice(id, 1);
    this.cdr.detectChanges();
  }

  onPushMessage(id: number, message: string): void {
    this.subjects$[id]?.next(`[${id}] - ${message}`);
  }

  onCompleteSubject(id: number): void {
    this.subjects$[id]?.complete();
  }

  onCreateSubject(id: number): void {
    this.subjects$[id] = new Subject();
  }

  onDisposeSubject(id: number): void {
    this.subjects$[id] = undefined as any;
  }
}
