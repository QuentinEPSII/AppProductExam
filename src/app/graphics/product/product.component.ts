import { HttpClient, HttpHandler } from '@angular/common/http';
import { StmtModifier, ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent  {
  public selectedProduct: Product;
  public isEditing=false;
  constructor(public router: Router, private _ProductService: ProductService){
      // Pour supprimer l'erreur "has no initializer and is not definitely assigned"
      this.selectedProduct = new Product;
  }

  onSelectionChanged(data:Product){
    setTimeout(() => {
      this.selectedProduct = data;
    },0);
  }

  onUpdate(){
    this.isEditing = true;
  }
  onAdd(){
    this.selectedProduct = new Product();
    this.isEditing = true;
  }
  formDone(){
    this.isEditing=false;
    this.onSelectionChanged(this._ProductService.selectedProduct);
  }
}
