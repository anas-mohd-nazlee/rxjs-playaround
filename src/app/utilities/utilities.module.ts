import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilitiesRoutingModule } from './utilities-routing.module';
import { TapComponent } from './tap/tap.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TapComponent
  ],
  imports: [
    CommonModule,
    UtilitiesRoutingModule,
    SharedModule
  ]
})
export class UtilitiesModule { }
