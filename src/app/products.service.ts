import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../app/product';



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
    }

    // handleError
}
