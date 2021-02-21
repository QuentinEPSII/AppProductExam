import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/Model/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page-detail',
  templateUrl: './product-page-detail.component.html',
  styleUrls: ['./product-page-detail.component.scss']
})
export class ProductPageDetailComponent implements OnInit {

  constructor(private r: ActivatedRoute, private ProductService: ProductService) { }

  id: number;
  product: Product;

  ngOnInit(): void {

    this.id = parseInt(this.r.snapshot.paramMap.get('id'));
    this.product = this.ProductService.getProductById(this.id)
  }
}
