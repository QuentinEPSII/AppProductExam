import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Product } from 'src/app/Model/product';
import { ProductService } from 'src/app/services/product.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})

export class ProductFormComponent implements OnInit {
  
  @Output() done = new EventEmitter();


  private _Product:Product;
  @Input() set Product(value:Product){
    this._Product = value;
    this.ProductForm.setValue(this.Product);
  }

  get Product(){
    return this._Product;
  }

  constructor(private fb: FormBuilder, private _ProductService: ProductService) {
    // Pour supprimer l'erreur "has no initializer and is not definitely assigned"
    this._Product = new Product;
  }

  ProductForm = this.fb.group({
    id:[''],
    name:['', [Validators.required]],
    texture:[''],
    grammage:['', [Validators.required]],
    color:['', [Validators.required]]

  })

  ngOnInit(): void {
  }

  onCancel(){
    this.done.emit();
  }
  submit(): void {
      this.Product =  new Product(this.ProductForm.value);
      this._ProductService.UpdateProduct(this.Product);
      this._ProductService.selectProduct(this.Product);
      this.done.emit();
  }

  shouldShowRequiredError(control: AbstractControl){
    return !control.pristine && control.hasError('required');
  }

  shouldShowError(control: AbstractControl){
    return !control.pristine && control.invalid;
  }
}
