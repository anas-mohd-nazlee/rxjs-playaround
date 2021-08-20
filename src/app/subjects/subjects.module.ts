import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AsyncSubjectComponent } from './async-subject.component';
import { BehaviorSubjectComponent } from './behavior-subject.component';
import { ReplaySubjectComponent } from './replay-subject.component';
import { SubjectComponent } from './subject.component';


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
