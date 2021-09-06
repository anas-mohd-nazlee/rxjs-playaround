import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { MapComponent } from './map/map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { TransformationsRoutingPaths } from './transformations-routing-paths';

const routes: Routes = [
  { path: TransformationsRoutingPaths.concatMap, component: ConcatMapComponent },
  { path: TransformationsRoutingPaths.map, component: MapComponent },
  { path: TransformationsRoutingPaths.mergeMap, component: MergeMapComponent },
  { path: TransformationsRoutingPaths.switchMap, component: SwitchMapComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransformationsRoutingModule { }
