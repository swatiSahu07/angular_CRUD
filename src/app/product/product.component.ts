import { ProductsService } from '../services/products.service';
import { Product } from '../interface/product.interface'; import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  data:Array<Product>;
  totalRecords:number;
  page:number=1;
  isLoadingResults = true;
  constructor(private router: Router,private _product: ProductsService) { 
    this.data = new Array<Product>();
  }

  displayedColumns: string[] = ['name', 'description', 'price'];
 
  
  ngOnInit(): void {
    this._product.getProducts()
      .subscribe(res => {
        this.data = res;
        this.totalRecords=res.length;
        // console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
     
    }
  
  deletePro(product: Product) {
    // const index  = this.data.indexOf(product);  
    this.isLoadingResults = true;
    this._product.deleteProduct(product.id)
      .subscribe(res => {
        this.isLoadingResults = false;
        console.log(res);
        location.reload();
        // this.data.splice(index, 1);
        // this.router.navigate(['/products']);
     });  
  }

  edit(product: Product){
    window.localStorage.removeItem("editProductId");
    window.localStorage.setItem("editProductId", product.id.toString());
    this.router.navigate(['/product/edit']);
  };


}
