import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/Model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input() public selectedProduct: Product;
  
  constructor() { 
  }

  ngOnInit(): void {
  }

}
