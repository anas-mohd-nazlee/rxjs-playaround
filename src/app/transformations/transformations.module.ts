import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransformationsRoutingModule } from './transformations-routing.module';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { SharedModule } from '../shared/shared.module';
import { MapComponent } from './map/map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';


@NgModule({
  declarations: [
    ConcatMapComponent,
    MapComponent,
    MergeMapComponent,
    SwitchMapComponent
  ],
  imports: [
    CommonModule,
    TransformationsRoutingModule,
    SharedModule
  ]
})
export class TransformationsModule { }
