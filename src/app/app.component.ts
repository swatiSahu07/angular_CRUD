import { Component } from '@angular/core';
import { Item } from './interface/Item';
import { NgForm } from '@angular/forms';
import { ItemService } from './services/ItemService';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { NavigationCancel,
        Event,
        NavigationEnd,
        NavigationError,
        NavigationStart,
        Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Laravel Angular 4 App';
  items:Item[] =[];
  selectedItem:Item={
    name : "",
    price : null
  };
  
  constructor(private _item : ItemService,private loadingBar: SlimLoadingBarService, private router: Router) { this.router.events.subscribe((event: Event) => {
    this.navigationInterceptor(event);
  }); }
  
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this.loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this.loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this.loadingBar.stop();
    }
  }


  // onSubmit(obj: NgForm) {
  //   obj = obj.value;
  //   this._item.addItem(obj).subscribe(result=>{
  //     console.log(result);
  //     // this.items.push(result);
  //   });
  // }
  
}