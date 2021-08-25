import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SubscriberParentComponent } from './subscriber-parent/subscriber-parent.component';
import { FormsModule } from '@angular/forms';
import { TargetComponent } from './target/target.component';

@NgModule({
  declarations: [
    SubscriberComponent,
    SubscriberParentComponent,
    TargetComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    SubscriberComponent,
    FlexLayoutModule,
    SubscriberParentComponent,
    FormsModule,
    TargetComponent
  ]
})
export class SharedModule { }
