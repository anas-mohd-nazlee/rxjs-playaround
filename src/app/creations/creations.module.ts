import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreationsRoutingModule } from './creations-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OfComponent } from './of/of.component';
import { EmptyComponent } from './empty/empty.component';
import { FromComponent } from './from/from.component';


@NgModule({
  declarations: [
    OfComponent,
    EmptyComponent,
    FromComponent
  ],
  imports: [
    CommonModule,
    CreationsRoutingModule,
    SharedModule
  ]
})
export class CreationsModule { }
