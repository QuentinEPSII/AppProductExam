import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Product } from 'src/app/Model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Output() selectionChanged = new EventEmitter<Product>();

  @Input() canChangeSelection=true;
  isReady = false;


  myProductList$: Observable<Product[]>;
  productsListCount: number;

  constructor(private _ProductService:ProductService) {
    // Pour supprimer l'erreur "has no initializer and is not definitely assigned"
    this.myProductList$ = new Observable();
    this.productsListCount = 0;
   }

  ngOnInit(): void {
    this.myProductList$ = this._ProductService.getAllProduct()
    .pipe(
      tap((data)=>{
        this.isReady = true;
        this.productsListCount = data.length;
        if (data.length)
        this.selectProduct(data[0])
      }));
    }

    getSelectedProduct(){
      return this._ProductService.selectedProduct;
    }

    public selectProduct(pr: Product) {
      this._ProductService.selectProduct(pr);
      this.selectionChanged.emit(pr);
    }

    onSelectionChange(pr:Product){
      if (this.canChangeSelection)
      {
        this.selectProduct(pr);
      }
    }
    isSelected(pr: Product){
      return  pr == this._ProductService.selectedProduct;
    }

  }

