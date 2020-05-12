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
  alert:boolean=false;
  constructor(private router: Router,private fb: FormBuilder, private _product: ProductsService) { 
    this.createForm();
  }

  ngOnInit(): void {
    this.angForm = this.fb.group({
      'name' : [null, Validators.required],
      'description' : [null, Validators.required],
      'price' : [null, Validators.required]
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

  
  //Import Wizard function
  onFileChange(args) {
    const self = this, file = args.srcElement && args.srcElement.files && args.srcElement.files[0];
    console.log(self);
    
    // if (self.spread && file) {
    //   self.excelIO.open(file, (json) => {
    //     self.spread.fromJSON(json, {});
    //     setTimeout(() => {
    //       alert('load successfully');
    //     }, 0);
    //   }, (error) => {
    //     alert('load fail');
    //   });
    // }
  }

}
