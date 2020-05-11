import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { Product } from '../interface/product.interface';
import { Router } from '@angular/router';
// import { Observable, of, throwError } from 'rxjs';



@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  angForm:FormGroup;
  product:Product;
  constructor(private router: Router,private fb: FormBuilder, private _product: ProductsService) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      description: ['', Validators.required ],
      price: ['', Validators.required ]
    });
  }

  addProduct(product){
    this._product.addProduct(product).subscribe(result=>{
      console.log(result);
      this.router.navigate(['/products']);
    });
  }

  ngOnInit(): void {

    this.angForm = this.fb.group({
      'name' : [null, Validators.required],
      'description' : [null, Validators.required],
      'price' : [null, Validators.required]
    });
  }

}
