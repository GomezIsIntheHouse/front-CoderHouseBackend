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
export class ProductServicesService {


  constructor(private http: HttpClient) { }

  crearProducto(data:Product){

    return this.http.post(`${url}/products`, data);
  }

  getProducts():Observable<any>{

    return this.http.get<any>(`${url}/products`);

  }

  actualizarProduct(id:any, data:Product){

    return  this.http.put(`${url}/products/${id}`, data)
  }

  deleteProduct(id:any){
    return this.http.delete(`${url}/products/${id}`)
  }
}
