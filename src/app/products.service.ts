import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from '../app/product';

const httpOptions = {
  headers : new HttpHeaders({ 'Content-type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private inventoryURL = 'https://efa-gardenapp-backend.herokuapp.com/api/product';
  constructor(
    private http : HttpClient,
    ) { }

    getProducts (): Observable<Product[]>{
      return this.http.get<Product[]>(this.inventoryURL)
        .pipe(
          catchError(this.handleError('getProducts', []))
        )

    }

    // handleError
}
