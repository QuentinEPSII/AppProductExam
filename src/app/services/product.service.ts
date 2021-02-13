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
  public nom="Titi";
  constructor(private http: HttpClient) {
    if (this.productsList && this.productsList.length){
      this.selectedProduct = this.productsList[0];
    }

  }


  private getAllProduct$ = this.http.get<Product[]>('assets/products.json').pipe(
    map((data : Product[])=>{
      // création d'un autre tableau
      const result: Product[] = [];
      data.forEach(element => {
        result.push(new Product(element));
      });
      this.productsList = result;
      return result;
      // autre méthode (plus élégante mais attention à la confusion avec map (rxjs) et map (sur les tableaux))
      //  => équivalent du .Select en c# avec Linq => cette fonction map s'applique sur les tableaux
      return data.map(e=>new Product(e));
    }),
    shareReplay(1),
    map((d)=> this.productsList)
  );

  getAllProduct(){
    return this.getAllProduct$;
    // 1. problème du format des données reçues
    // 2. Est-ce que l'adresse existe => est-elle atteignable
    // 3. Sécurisation du serveur
    //return this.http.get<Product[]>('assets/ProductList.json')

  }


  public getById(id : number){
    return this.getAllProduct$.pipe(
      // faire le job pour retourner uniquement le bon joueur
      // à vous d'inventer le code pour la question 5 !
      map((d)=>d.length)

    )
  }


  selectProduct(pr: Product) {
    this.selectedProduct = pr;
  }

  UpdateProduct(Product: Product) {

    if (Product.id==0){
      Product.id=Math.max(0, ...this.productsList.map(pr=>pr.id))+1;
      this.productsList.push(Product);
    }else{
      const ProductIndex = this.productsList.findIndex(pr=>pr.id == Product.id);
      this.productsList[ProductIndex]=Product;
    }

  }
}
