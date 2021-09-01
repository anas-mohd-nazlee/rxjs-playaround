import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilteringRoutingModule } from './filtering-routing.module';
import { FilterComponent } from './filter/filter.component';
import { SharedModule } from '../shared/shared.module';
import { TakeComponent } from './take/take.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';


@NgModule({
  declarations: [
    FilterComponent,
    TakeComponent,
    TakeUntilComponent,
    DistinctUntilChangedComponent
  ],
  imports: [
    CommonModule,
    FilteringRoutingModule,
    SharedModule
  ]
})
export class FilteringModule { }
