import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopDCComponent } from './shop-dc/shop-dc.component';
import { ShopDetailsDCComponent } from './shop-details-dc/shop-details-dc.component';

const routes: Routes = [
  {path: '', component: ShopDCComponent},
  { path: 'shop/detail/:id', component: ShopDetailsDCComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
