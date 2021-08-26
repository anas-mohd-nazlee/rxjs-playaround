import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationsRoutingPaths } from './creations-routing-paths';
import { DeferComponent } from './defer/defer.component';
import { EmptyComponent } from './empty/empty.component';
import { FromComponent } from './from/from.component';
import { IntervalComponent } from './interval/interval.component';
import { OfComponent } from './of/of.component';
import { TimerComponent } from './timer/timer.component';

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
  },
  {
    path: CreationsRoutingPaths.defer,
    component: DeferComponent
  },
  {
    path: CreationsRoutingPaths.interval,
    component: IntervalComponent
  },
  {
    path: CreationsRoutingPaths.timer,
    component: TimerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreationsRoutingModule { }
