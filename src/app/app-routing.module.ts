import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './graphics/product/product.component';
import { ProductListComponent } from './graphics/product-list/product-list.component';
import { ProductPageListComponent } from './graphics/product-page-list/product-page-list.component';
import { ProductPageDetailComponent } from './graphics/product-page-detail/product-page-detail.component';
import { ProductFormComponent } from './graphics/product-form/product-form.component';
import { HomepageComponent } from './graphics/homepage/homepage.component';

// ng generate module app-routing --flat --module=app
const routes: Routes = [
  { path:'Products', component: ProductComponent  },
  { path:'', component: HomepageComponent  },
  { path:'ProductsListPropre', component: ProductListComponent  },
  { path:'ProductsList', component: ProductPageListComponent  },
  { path:'ProductsFormList', component: ProductFormComponent  },
  { path:'ProductsDetail/:id', component: ProductPageDetailComponent  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
