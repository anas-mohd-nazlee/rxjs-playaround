import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreationsRoutingModule } from './creations-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OfComponent } from './of/of.component';
import { EmptyComponent } from './empty/empty.component';
import { FromComponent } from './from/from.component';
import { DeferComponent } from './defer/defer.component';
import { BaseCreationComponent } from './base-creation/base-creation.component';
import { IntervalComponent } from './interval/interval.component';
import { TimerComponent } from './timer/timer.component';


@NgModule({
  declarations: [
    OfComponent,
    EmptyComponent,
    FromComponent,
    DeferComponent,
    BaseCreationComponent,
    IntervalComponent,
    TimerComponent
  ],
  imports: [
    CommonModule,
    CreationsRoutingModule,
    SharedModule
  ]
})
export class CreationsModule { }
