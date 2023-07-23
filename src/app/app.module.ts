import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { IntroComponent } from './intro/intro.component';
import {NavigationComponent} from './navigation/navigation.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    NavigationComponent,
    ProductListComponent,
    CreateProductComponent,
    DeleteProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
