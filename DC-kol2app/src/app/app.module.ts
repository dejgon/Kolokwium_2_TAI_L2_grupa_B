import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopDCComponent } from './shop-dc/shop-dc.component';
import { ShopItemDCComponent } from './shop-item-dc/shop-item-dc.component';
import { ShopDetailsDCComponent } from './shop-details-dc/shop-details-dc.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShopDCComponent,
    ShopItemDCComponent,
    ShopDetailsDCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
