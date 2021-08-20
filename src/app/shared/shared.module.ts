import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeTableComponent } from './time-table/time-table.component';
import { MaterialModule } from './material.module';
import { AgGridModule } from 'ag-grid-angular';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SubscriberParentComponent } from './subscriber-parent/subscriber-parent.component';
import { FormsModule } from '@angular/forms';
import { TargetComponent } from './target/target.component';

@NgModule({
  declarations: [
    TimeTableComponent,
    SubscriberComponent,
    SubscriberParentComponent,
    TargetComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AgGridModule.withComponents([]),
    FlexLayoutModule,
    FormsModule
  ],
  exports: [
    TimeTableComponent,
    MaterialModule,
    AgGridModule,
    SubscriberComponent,
    FlexLayoutModule,
    SubscriberParentComponent,
    FormsModule,
    TargetComponent
  ]
})
export class SharedModule { }
