import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SharedDataRoutingModule } from './shared-data-routing.module'; // Import the routing module


@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    SharedDataRoutingModule
  ]
})
export class SharedDataModule { }
