import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import {Product} from '../interface/product.interface';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  obj:Product;
  apiUrl = 'http://localhost:8000/api/product';

  constructor(private _http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getProducts (): Observable<Product[]> {
    return this._http.get<Product[]>(this.apiUrl)
      .pipe(
        tap(heroes => console.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      );
  }
  
  getProduct(id: number): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this._http.get<Product>(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  updateProduct (id, product): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this._http.put<any>(url, product);
    // return this._http.put().pipe(
    //   tap(_ => console.log(`updated product id=${id}`)),
    //   catchError(this.handleError<any>('updateProduct'))
    // );
  }

  addProduct(obj):Observable<Product>  {
      console.log(obj);
            return this._http.post<any>(`${this.apiUrl}`, obj);
  }

    deleteProduct(id: number): Observable<Product> {
      const url = `${this.apiUrl}/${id}`;
      return this._http.delete<Product>(url);
    }
    

  

}
