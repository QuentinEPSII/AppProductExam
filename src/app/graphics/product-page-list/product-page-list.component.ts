import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Product } from 'src/app/Model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page-list',
  templateUrl: './product-page-list.component.html',
  styleUrls: ['./product-page-list.component.scss']
})
export class ProductPageListComponent implements OnInit {
  /**
  * Envoi un événement à chaque  modification de la sélection
  */
  @Output() selectionChanged = new EventEmitter<Product>();

  @Input() canChangeSelection=true;


  isReady = false;
  /**
  * liste des joueurs
  */

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

    public selectProduct(prod: Product) {
      this._ProductService.selectProduct(prod);
      this.selectionChanged.emit(prod);
    }

    onSelectionChange(prod:Product){
      if (this.canChangeSelection)
      {
        this.selectProduct(prod);
      }
    }

    isSelected(prod: Product){
      return  prod == this._ProductService.selectedProduct;
    }

  }

