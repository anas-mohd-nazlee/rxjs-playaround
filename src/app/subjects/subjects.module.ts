import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SubjectComponent } from './subject/subject.component';
import { AsyncSubjectComponent } from './async-subject.component';
import { BehaviorSubjectComponent } from './subject/behavior-subject.component';
import { ReplaySubjectComponent } from './subject/replay-subject.component';


@NgModule({
  declarations: [
    SubjectComponent,
    AsyncSubjectComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent
  ],
  imports: [
    CommonModule,
    SubjectsRoutingModule,
    SharedModule
  ]
})
export class SubjectsModule { }
