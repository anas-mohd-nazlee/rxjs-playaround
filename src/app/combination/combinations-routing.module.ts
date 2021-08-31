import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombinationsRoutingPaths } from './combinations-routing-paths';
import { ConcatComponent } from './concat/concat.component';
import { EndWithComponent } from './end-with/end-with.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { MergeComponent } from './merge/merge.component';
import { PairwiseComponent } from './pairwise/pairwise.component';
import { StartWithComponent } from './start-with/start-with.component';

const routes: Routes = [
  {
    path: CombinationsRoutingPaths.startWith,
    component: StartWithComponent
  },
  {
    path: CombinationsRoutingPaths.endWith,
    component: EndWithComponent
  },
  {
    path: CombinationsRoutingPaths.pairwise,
    component: PairwiseComponent
  },
  {
    path: CombinationsRoutingPaths.merge,
    component: MergeComponent
  },
  {
    path: CombinationsRoutingPaths.concat,
    component: ConcatComponent
  },
  {
    path: CombinationsRoutingPaths.forkJoin,
    component: ForkJoinComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CombinationsRoutingModule { }
