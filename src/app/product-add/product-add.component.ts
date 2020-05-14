// import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { Product } from '../interface/product.interface';
import { Router } from '@angular/router';



@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  angForm:FormGroup;
  product:Product;
  alert:boolean=false;
  
  // public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });
  constructor(private router: Router,private fb: FormBuilder, private _product: ProductsService) { 
    this.createForm();
  }

  ngOnInit(): void {
    this.angForm = this.fb.group({
      'name' : [null, Validators.required],
      'description' : [null, Validators.required],
      'price' : [null, Validators.required],
      'image' : [null, Validators.required]
    });
  }

  //Create Product Form
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      description: ['', Validators.required ],
      price: ['', Validators.required ]
    });
  }

  //store the product data
  addProduct(product){
    this._product.addProduct(product).subscribe(result=>{
      console.log(result);
      // this.router.navigate(['/products']);
      this.alert = true;
      this.angForm.reset({});
    });
  }

  //alert close
  closeAlert(){
    this.alert=false;
  }


  onSelectedFile(event){
    console.log(event.target.files);
  }
}
