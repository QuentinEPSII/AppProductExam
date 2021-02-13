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
  /**
  * Envoi un événement à chauqe  modification de la sélection
  */
  @Output() selectionChanged = new EventEmitter<Product>();

  @Input() canChangeSelection=true;


  isReady = false;
  /**
  * liste des joueurs
  */

  myProductList$: Observable<Product[]>;
  myProduct: Product[];
  myStrings : string[] = ['to'];
  productsListCount: number;

  constructor(private _tProductService:ProductService) { }

  ngOnInit(): void {
    // récupération de la liste des joueurs
    console.log('avant le subscribe');


    this.myProductList$ = this._tProductService.getAllProduct()
    .pipe(
      tap((data)=>{
        this.isReady = true;
        this.productsListCount = data.length;
        if (data.length)
        this.selectProduct(data[0])
      }));
    }

    /**
    * permet d'obtenir le joueur sélectionné
    */
    getSelectedProduct(){
      return this._tProductService.selectedProduct;
    }

    /**
    * Permet la selection du joueur
    * @param pl : joueur à sélectionner
    */
    public selectProduct(pl: Product) {
      this._tProductService.selectProduct(pl);
      this.selectionChanged.emit(pl);
    }

    /**
    * Sélection par l'interface, possible uniquement si on peut changer la sélection
    */
    onSelectionChange(pl:Product){
      if (this.canChangeSelection)
      {
        this.selectProduct(pl);
      }
    }
    /**
    * Indique si le joueur donné est sélectionné ou non
    * @param pl
    */
    isSelected(pl: Product){
      return  pl == this._tProductService.selectedProduct;
    }

  }

