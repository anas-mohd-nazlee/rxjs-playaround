import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationsRoutingPaths } from './creations-routing-paths';
import { EmptyComponent } from './empty/empty.component';
import { FromComponent } from './from/from.component';
import { OfComponent } from './of/of.component';

const routes: Routes = [
  {
    path: CreationsRoutingPaths.of,
    component: OfComponent
  },
  {
    path: CreationsRoutingPaths.empty,
    component: EmptyComponent
  },
  {
    path: CreationsRoutingPaths.from,
    component: FromComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreationsRoutingModule { }
