import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TapComponent } from './tap/tap.component';
import { UtilitiesRoutingPaths } from './utilities-routing-paths';

const routes: Routes = [
  {
    path: UtilitiesRoutingPaths.tap,
    component: TapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilitiesRoutingModule { }
