import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Product {
  uuid:any;
  timestamp:any;
  name: string;
  price: number;
  stock: number;
  thumbnails: any;

}
const url: string = environment.api_url
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  createCart(user:any){
   return this.http.post(`${url}/carrito`, user)

  }
  getCart(){
    return this.http.get(`${url}/carrito`)
  }
  updateCart(){

  }
  deleteCart(){

  }
  deleteOneProductToCart(){

  }
  addToCart(idCart:any, data:any){

  }
}
