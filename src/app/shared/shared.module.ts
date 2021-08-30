import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { SubscriberComponent } from './components/subscriber/subscriber.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SubscriberParentComponent } from './components/subscriber-parent/subscriber-parent.component';
import { FormsModule } from '@angular/forms';
import { TargetComponent } from './components/target/target.component';
import { CardWithNoButtonComponent } from './components/card-with-no-button/card-with-no-button.component';
import { TargetParentComponent } from './components/target-parent/target-parent.component';

@NgModule({
  declarations: [
    SubscriberComponent,
    SubscriberParentComponent,
    TargetComponent,
    CardWithNoButtonComponent,
    TargetParentComponent
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
    TargetComponent,
    CardWithNoButtonComponent,
    TargetParentComponent
  ]
})
export class SharedModule { }
