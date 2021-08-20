import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncSubjectComponent } from './async-subject.component';
import { SubjectRoutingPaths } from './subject-routing-paths';
import { SubjectComponent } from './subject/subject.component';
import { BehaviorSubjectComponent } from './subject/behavior-subject.component';
import { ReplaySubjectComponent } from './subject/replay-subject.component';

const routes: Routes = [
  {
    path: SubjectRoutingPaths.subject,
    component: SubjectComponent
  },
  {
    path: SubjectRoutingPaths.async,
    component: AsyncSubjectComponent
  },
  {
    path: SubjectRoutingPaths.behavior,
    component: BehaviorSubjectComponent
  },
  {
    path: SubjectRoutingPaths.replay,
    component: ReplaySubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule { }
