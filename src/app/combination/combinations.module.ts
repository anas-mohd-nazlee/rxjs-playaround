import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CombinationsRoutingModule } from './combinations-routing.module';
import { StartWithComponent } from './start-with/start-with.component';
import { SharedModule } from '../shared/shared.module';
import { EndWithComponent } from './end-with/end-with.component';
import { PairwiseComponent } from './pairwise/pairwise.component';
import { MergeComponent } from './merge/merge.component';
import { ConcatComponent } from './concat/concat.component';


@NgModule({
  declarations: [
    StartWithComponent,
    EndWithComponent,
    PairwiseComponent,
    MergeComponent,
    ConcatComponent
  ],
  imports: [
    CommonModule,
    CombinationsRoutingModule,
    SharedModule
  ]
})
export class CombinationsModule { }
