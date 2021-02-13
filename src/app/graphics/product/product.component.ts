import { HttpClient, HttpHandler } from '@angular/common/http';
import { StmtModifier, ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/Model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent  {

  constructor(private _tProductService: ProductService){}
  public selectedProduct: Product;

  public isEditing=false;

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
    this.onSelectionChanged(this._tProductService.selectedProduct);
  }
}
