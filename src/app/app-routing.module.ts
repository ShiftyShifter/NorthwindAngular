import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'landing', component: LandingComponent},
  {path: '', redirectTo: 'landingComponent', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
