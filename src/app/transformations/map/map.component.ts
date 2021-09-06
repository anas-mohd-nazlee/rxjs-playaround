import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { SubjectBase } from '../../shared/components/subject-base';

@Component({
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent extends SubjectBase<Subject<string>> implements OnInit {

  constructor() {
    super();
  }

  get target$(): Observable<any> {
    return this.subject$.pipe(map(val => val.length));
  }

  ngOnInit(): void {
  }

  protected getNewSubject(): Subject<string> {
    return new Subject();
  }
}
