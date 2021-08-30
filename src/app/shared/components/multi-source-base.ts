import { Observable } from "rxjs";
import { PlayGroundBase } from "./playground-base";

export abstract class MultiSourceBase extends PlayGroundBase {
  protected subjects$!: Observable<any>[];

  onPublishersChange(publishers$: Observable<any>[]) {
    this.subjects$ = publishers$;
  }
}
