import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private httpClient: HttpClient) { }
  getProductList(){
   return this.httpClient.get('https://fakestoreapi.com/products');
  } 
}
