import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { Product } from '../interface/product.interface';
import { Router } from '@angular/router';
// import { Observable, of, throwError } from 'rxjs'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

productForm:FormGroup;
id:string='';
name:string='';
description:string='';
price:number=null;
isLoadingResults = false;

  constructor(private router: Router,private fb: FormBuilder, private _product: ProductsService) { }

  ngOnInit(): void {
    let productId = window.localStorage.getItem("editProductId");
    this.productForm = this.fb.group({
      'name' : [null, Validators.required],
      'description' : [null, Validators.required],
      'price' : [null, Validators.required]
    });
    console.log(productId);
    this._product.getProduct(+productId).subscribe(data => {
      this.id = data.id,
      this.productForm.setValue({
        name: data.name,
        description: data.description,
        price: data.price
      });
      // this.productForm.setValue(data.result);
    });
    
  }

  
  onFormSubmit(product) {
    // console.log(this.id);
    this.isLoadingResults = true;
    console.log(product);
    this._product.updateProduct(this.id, product)
      .subscribe(res => {
          let id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/products']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }



}
