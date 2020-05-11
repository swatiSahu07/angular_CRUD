import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StorageServiceModule } from 'ngx-webstorage-service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { EducationalDetailComponent } from './educational-detail/educational-detail.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductGetComponent } from './product-get/product-get.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductsService } from './services/products.service';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailComponent,
    EducationalDetailComponent,
    ProductAddComponent,
    ProductGetComponent,
    ProductEditComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, HttpClientModule,ReactiveFormsModule,StorageServiceModule ,SlimLoadingBarModule
    ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
