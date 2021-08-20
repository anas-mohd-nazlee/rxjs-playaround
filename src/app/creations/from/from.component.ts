import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EMPTY, from, Observable } from 'rxjs';
import { PlayGroundBase } from '../../shared/components/playground-base';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FromComponent extends PlayGroundBase implements OnInit {

  readonly fromTypes: Record<string, string> = {
    promiseResolve: "Promise - Resolve",
    promiseReject: "Promise - Reject",
    string: "String",
    array: "Array"
  };
  fromType = this.fromTypes.promiseResolve;

  constructor() {
    super();
  }

  get target$(): Observable<string> {
    switch(this.fromType) {
      case this.fromTypes.promiseResolve:
        return from(this.getWordInPromise());
      case this.fromTypes.promiseReject:
        return from(this.getReject());
      case this.fromTypes.string:
        return from(this.getWord());
      case this.fromTypes.array:
        return from(this.getWords());
      default:
        return EMPTY;
    }
  }

  ngOnInit(): void {
    this.isTargetInitialized = true;
  }

  private async getWordInPromise(): Promise<string> {
    return Promise.resolve("Hello World");
  }

  private getWord(): string {
    return "Hello World";
  }

  private getWords(): string[] {
    return ["Hello", "World"];
  }

  private async getReject(): Promise<string> {
    return Promise.reject("Rejected Promise");
  }
}
