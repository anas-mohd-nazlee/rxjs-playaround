import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalizeComponent } from './finalize/finalize.component';
import { RepeatComponent } from './repeat/repeat.component';
import { TapComponent } from './tap/tap.component';
import { UtilitiesRoutingPaths } from './utilities-routing-paths';

const routes: Routes = [
  {
    path: UtilitiesRoutingPaths.tap,
    component: TapComponent
  },
  {
    path: UtilitiesRoutingPaths.finalize,
    component: FinalizeComponent
  },
  {
    path: UtilitiesRoutingPaths.repeat,
    component: RepeatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilitiesRoutingModule { }
