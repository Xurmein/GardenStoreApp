import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './admin-model';
import { Product } from './product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers : new HttpHeaders({ 'Content-type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginURL = 'https://efa-gardenapp-backend.herokuapp.com/api/auth/login';
  private deleteURL = 'https://efa-gardenapp-backend.herokuapp.com/api/product/:id'
  constructor(private http : HttpClient) { }

  signIn (username : string, password : string): Observable<User[]>{
    return this.http.post<User[]>(this.loginURL, {username, password}, httpOptions)
      .pipe(map(user => {
        if(username === 'wer@odikepki.pr' && password === 'test'){
          localStorage.setItem('admin', JSON.stringify(user))
        }
        return user;
      }))
  }

  deleteProduct (productid : number): Observable<Product[]>{
    return this.http.delete<Product[]>(this.deleteURL)
  }

}
