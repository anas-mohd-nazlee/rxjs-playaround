import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';
import { FilterComponent } from './filter/filter.component';
import { FilteringRoutingPaths } from './filtering-routing-paths';
import { TakeUntilComponent } from './take-until/take-until.component';
import { TakeComponent } from './take/take.component';

const routes: Routes = [
  { path: FilteringRoutingPaths.filter, component: FilterComponent },
  { path: FilteringRoutingPaths.take, component: TakeComponent },
  { path: FilteringRoutingPaths.takeUntil, component: TakeUntilComponent },
  { path: FilteringRoutingPaths.distinctUntilChanged, component: DistinctUntilChangedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilteringRoutingModule { }
