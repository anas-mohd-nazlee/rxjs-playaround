import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MulticastingRoutingModule } from './multicasting-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MulticastComponent } from './multicast/multicast.component';
import { ShareComponent } from './share/share.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';


@NgModule({
  declarations: [
    MulticastComponent,
    ShareComponent,
    ShareReplayComponent
  ],
  imports: [
    CommonModule,
    MulticastingRoutingModule,
    SharedModule
  ]
})
export class MulticastingModule { }
