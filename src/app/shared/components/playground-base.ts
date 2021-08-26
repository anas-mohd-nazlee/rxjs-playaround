import { Observable, Subscription } from "rxjs";

export abstract class PlayGroundBase {

  isTargetInitialized = false;

  constructor() { }

  abstract get target$(): Observable<any>;
}
