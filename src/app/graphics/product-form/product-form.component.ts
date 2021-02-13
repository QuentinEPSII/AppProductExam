import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Product } from 'src/app/Model/product';
import { ProductService } from 'src/app/services/product.service';

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


  constructor(private fb: FormBuilder, private _tProductService: ProductService) {

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
      this._tProductService.UpdateProduct(this.Product);
      this._tProductService.selectProduct(this.Product);
      this.done.emit();
  }


  shouldShowRequiredError(control: AbstractControl){
    return !control.pristine && control.hasError('required');
  }

  shouldShowError(control: AbstractControl){
    return !control.pristine && control.invalid;
  }

  getNom(){
    return this._tProductService.nom;
  }

}
