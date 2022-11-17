import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CarritoComponent } from './carrito/carrito.component';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { PublicProductosComponent } from './public-productos/public-productos.component';

const routes: Routes = [

  {path:'', component: DashboardComponent,
  children:[
    {path:'', component:InicioComponent},
    {path:'productos', component:ProductosComponent},
    {path:'carrito', component:CarritoComponent},
    {path:'productosPublicos', component:PublicProductosComponent},
    {path:'about', component:AboutComponent},



  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
