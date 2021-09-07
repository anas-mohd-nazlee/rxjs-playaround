import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MulticastComponent } from './multicast/multicast.component';
import { MulticastingRoutingPaths } from './multicasting-routing-paths';
import { ShareReplayComponent } from './share-replay/share-replay.component';
import { ShareComponent } from './share/share.component';

const routes: Routes = [
  { path: MulticastingRoutingPaths.multicast, component: MulticastComponent },
  { path: MulticastingRoutingPaths.share, component: ShareComponent },
  { path: MulticastingRoutingPaths.shareReplay, component: ShareReplayComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MulticastingRoutingModule { }
