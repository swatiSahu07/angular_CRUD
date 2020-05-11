import { Component, OnInit, Inject } from '@angular/core';
import { Item } from './../interface/Item';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemService } from './../services/ItemService';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {
  
 
  form_data:any;
  items:Item[]=[];

  quoteForm = new FormGroup({
    name: new FormControl(),
    price: new FormControl()
  });
    constructor(private fb: FormBuilder,private _item : ItemService,@Inject(LOCAL_STORAGE) private localStorage: any) { }

  ngOnInit(): void {
    
    // this.form_data = window.history.state;
    // if(this.form_data){
    //   console.log('data-found');
    // }
  }

  personalDetail(form_data){
    if(form_data === 1){
      form_data= this.quoteForm.value;
      this._item.addItem(form_data).subscribe(result=>{
        console.log(result);
        this.localStorage.setItem('personaldetail',JSON.stringify(form_data));
        // this.items.push(result);
      });
      
    }
  }
}
