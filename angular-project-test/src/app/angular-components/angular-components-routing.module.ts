import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { StepperComponent } from './stepper/stepper.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { HostComponent } from './host/host.component';

const routes: Routes = [
  { path: 'product-list', component: ProductListComponent },
  { path: 'auto-complete', component: AutoCompleteComponent },
  { path: 'host', component: HostComponent },
  { path: 'stepper', component: StepperComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularComponentsRoutingModule {}
