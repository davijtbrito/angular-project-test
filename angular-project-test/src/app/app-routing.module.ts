import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout-examples/home/home.component';
import { AboutComponent } from './layout-examples/about/about.component';
import { GridComponent } from './angular-components/grid/grid.component';
import { CompanyComponent } from './company/company.component';
import { ParentComponent } from './shared-data/parent/parent.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Home page route
  { path: 'about', component: AboutComponent },  // About page route
  { path: 'grid', component: GridComponent },  // Grid grid route
  { path: 'parent', component: ParentComponent},
  { path: 'product', component: ProductListComponent},
  { path: 'find-company', component: CompanyComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
