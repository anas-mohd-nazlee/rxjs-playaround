import { Observable, Subscription } from "rxjs";

export abstract class PlayGroundBase {

  constructor() { }

  abstract get target$(): Observable<any>;
}
