import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';
import { TableProductoComponent } from './table-producto/table-producto.component';
import { PublicProductosComponent } from './public-productos/public-productos.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    ProductosComponent,
    CarritoComponent,
    AboutComponent,
    NuevoProductoComponent,
    TableProductoComponent,
    PublicProductosComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers:[
    ProductServicesService
  ]

})
export class DashboardModule { }
