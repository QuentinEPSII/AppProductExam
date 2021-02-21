import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { Product } from '../Model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsList: Product[] = [];
  public selectedProduct:Product;

  constructor(private http: HttpClient) {
    // Pour supprimer l'erreur "has no initializer and is not definitely assigned"
    this.selectedProduct = new Product;
    if (this.productsList && this.productsList.length){
      this.selectedProduct = this.productsList[0];
    }
  }

  private getAllProduct$ = this.http.get<Product[]>('assets/products.json').pipe(
    map((data : Product[])=>{
      const result: Product[] = [];
      data.forEach(element => {
        result.push(new Product(element));
      });
      this.productsList = result;
      return result;
    }),
    shareReplay(1),
    map((d)=> this.productsList)
  );

  getAllProduct(){
    return this.getAllProduct$;
  }

  public getProductById(idd : number){
    return this.getAllProduct$.pipe(
      map((data : Product[])=>{
        var prod = new Product;
        data.forEach(element => {
          if (element.id = idd) {
            prod = element;
          }
        });
        return prod;
      })
    );
  }

  selectProduct(pr: Product) {
    this.selectedProduct = pr;
  }

  UpdateProduct(Product: Product) {

    if (Product.id==0)
    {
      Product.id=Math.max(0, ...this.productsList.map(pr=>pr.id))+1;
      this.productsList.push(Product);
    }
    else
    {
      const ProductIndex = this.productsList.findIndex(pr=>pr.id == Product.id);
      this.productsList[ProductIndex]=Product;
    }
  }
}
