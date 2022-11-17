import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { NuevoProductoComponent } from '../nuevo-producto/nuevo-producto.component';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],

})
export class ProductosComponent implements OnInit {
  updateData: boolean = false;

  constructor(private ps:ProductServicesService,private dialogRef: MatDialog) { }

  ngOnInit(): void {

  }



  openModal(){
    this.dialogRef.open(NuevoProductoComponent, {
      width: '600px',
      data: {
        publicacion: null
      },
    }).afterClosed().subscribe( resp => {
      this.updateData = !this.updateData;
    });
  }

}
