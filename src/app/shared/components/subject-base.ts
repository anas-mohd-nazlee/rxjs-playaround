import { Subject } from "rxjs";
import { PlayGroundBase } from "./playground-base";

export abstract class SubjectBase<TSubject extends Subject<any>> extends PlayGroundBase {

  protected subject$!: TSubject;

  constructor() {
    super();
  }

  onPushMessage(message: string): void {
    this.subject$.next(message);
  }

  onCompleteSubject(): void {
    this.subject$.complete();
    this.isTargetInitialized = false;
  }

  onCreateSubject(): void {
    this.isTargetInitialized = true;
    this.subject$ = this.getNewSubject();
  }

  onDisposeSubject(): void {
    (this.subject$ as any) = undefined;
  }

  protected abstract getNewSubject(): TSubject;
}
