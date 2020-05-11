import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';  
import { Item } from './../interface/Item';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class ItemService {

    constructor(private _http: HttpClient){}

    addItem(obj){
    console.log(obj);
        return this._http.post<any>("http://localhost:8000/api/item", obj);
    }

    emptyItem() {
        return { 
          name : "",
          price : null

        }
    }

}
