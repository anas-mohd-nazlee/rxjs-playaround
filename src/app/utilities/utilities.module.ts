import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilitiesRoutingModule } from './utilities-routing.module';
import { TapComponent } from './tap/tap.component';
import { SharedModule } from '../shared/shared.module';
import { FinalizeComponent } from './finalize/finalize.component';
import { RepeatComponent } from './repeat/repeat.component';


@NgModule({
  declarations: [
    TapComponent,
    FinalizeComponent,
    RepeatComponent
  ],
  imports: [
    CommonModule,
    UtilitiesRoutingModule,
    SharedModule
  ]
})
export class UtilitiesModule { }
