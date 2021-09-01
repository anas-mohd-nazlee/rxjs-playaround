import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { SubjectBase } from '../../shared/components/subject-base';

@Component({
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent extends SubjectBase<Subject<string>> implements OnInit {

  canFilter = false;
  alphabetToFilter = "a";

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  get target$(): Observable<any> {
    return this.subject$.pipe(filter(val => !this.canFilter || this.isContainAlphabet(val)));
  }

  protected getNewSubject(): Subject<string> {
    return new Subject();
  }

  private isContainAlphabet(message: string): boolean {
    return message.toLowerCase().includes(this.alphabetToFilter)
  }
}
