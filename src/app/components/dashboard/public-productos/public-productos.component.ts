import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductServicesService } from 'src/app/services/product-services.service';

export interface Products {
  uuid:any;
  name: string;
  price: number;
  stock: number;
  thumbnails: number;
  symbol: string;
}
@Component({
  selector: 'app-public-productos',
  templateUrl: './public-productos.component.html',
  styleUrls: ['./public-productos.component.scss']
})
export class PublicProductosComponent implements OnInit {
  productosPublicados:any=[];
  constructor(private ps:ProductServicesService,
    private cs:CartService) { }

  ngOnInit(): void {
    this.getProductos();

  }

  getProductos(){
    this.ps.getProducts().subscribe((resp:any)=>{
      console.log(resp.data);

      this.productosPublicados = resp.data
    })


  }
  // this.cs.createCart(localStorage.getItem('user')).subscribe((resp)=>{

  // })
   createCart(){
    this.cs.getCart().subscribe((resp:any)=>{
          resp.data.map((i:any)=>{
              if(i.name != localStorage.getItem('user')){
              this.cs.createCart(localStorage.getItem('user')).subscribe((resp)=>{
                            console.log('carrito creado');
              })
              }else{
                return;
              }
          })
    })
  }
  async addToCart(idCart:any,data:any){
    try {
       this.createCart();
       this.cs.addToCart(idCart,data);
    } catch (error) {

    }

  }

}
