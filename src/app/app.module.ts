import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './graphics/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './graphics/product-form/product-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './graphics/product-detail/product-detail.component';
import { ProductListComponent } from './graphics/product-list/product-list.component';
import { ProductPageListComponent } from './graphics/product-page-list/product-page-list.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductPageDetailComponent } from './graphics/product-page-detail/product-page-detail.component';
import { HomepageComponent } from './graphics/homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductFormComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductPageListComponent,
    ProductPageListComponent,
    ProductPageDetailComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
