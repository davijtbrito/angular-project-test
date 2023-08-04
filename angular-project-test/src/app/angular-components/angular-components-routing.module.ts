import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: 'grid', component: GridComponent, },
  { path: 'product-list', component: ProductListComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularComponentsRoutingModule {}
