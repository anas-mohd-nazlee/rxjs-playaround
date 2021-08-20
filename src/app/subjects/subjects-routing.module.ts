import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncSubjectComponent } from './async-subject.component';
import { BehaviorSubjectComponent } from './behavior-subject.component';
import { ReplaySubjectComponent } from './replay-subject.component';
import { SubjectsRoutingPaths } from './subjects-routing-paths';
import { SubjectComponent } from './subject.component';

const routes: Routes = [
  {
    path: SubjectsRoutingPaths.subject,
    component: SubjectComponent
  },
  {
    path: SubjectsRoutingPaths.async,
    component: AsyncSubjectComponent
  },
  {
    path: SubjectsRoutingPaths.behavior,
    component: BehaviorSubjectComponent
  },
  {
    path: SubjectsRoutingPaths.replay,
    component: ReplaySubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule { }
