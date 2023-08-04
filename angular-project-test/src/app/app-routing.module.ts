import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout-examples/home/home.component';
import { AboutComponent } from './layout-examples/about/about.component';
import { GridComponent } from './angular-components/grid/grid.component';
import { ParentComponent } from './shared-data/parent/parent.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'grid', component: GridComponent },
  { path: 'parent', component: ParentComponent},
  { path: 'product', component: ProductListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
