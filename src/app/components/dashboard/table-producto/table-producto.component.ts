import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductServicesService } from 'src/app/services/product-services.service';
import Swal from 'sweetalert2';
import { NuevoProductoComponent } from '../nuevo-producto/nuevo-producto.component';

export interface Products {
  uuid:any;
  name: string;
  price: number;
  stock: number;
  thumbnails: number;
  symbol: string;
}

@Component({
  selector: 'app-table-producto',
  templateUrl: './table-producto.component.html',
  styleUrls: ['./table-producto.component.scss']
})
export class TableProductoComponent implements OnInit, OnChanges {
  displayedColumns: string[] = ['name', 'price', 'fecha-carga','actions'];
  dataSource:any;
  @Input() updateData!: boolean;

  constructor(private ps:ProductServicesService,private dialogRef: MatDialog) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.warn(changes['updateData'].currentValue);
    console.warn(changes['updateData'].previousValue);

    if(changes['updateData'].currentValue != changes['updateData'].previousValue){
      this.getProductos();
    }
  }

  ngOnInit(): void {
    this.getProductos();
  }
  getProductos(){
    this.ps.getProducts().subscribe((resp:any)=>{
      console.log(resp.data);

      this.dataSource = resp.data
    })


  }
  openModalEdit(post: Products){
    console.log(post);
    this.dialogRef.open(NuevoProductoComponent, {
      width: '600px',
      data: {
        data: post
      },
    }).afterClosed().subscribe(() =>
      this.getProductos()
    );
  }
  deleteSeccion(post: Products){
    if(post.uuid){
      Swal.fire({
        title: `¿Estas seguro que deseas eliminar la sección ${post.name}?`,
        text: "No podrás revertir esta acción",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        background: '#303030',
        color: '#fff',
      }).then((result) => {
        if (result.isConfirmed && post.uuid) {
          this.ps.deleteProduct(post.uuid).subscribe(resp => {
            Swal.fire({
              title: 'Producto eliminado',
              icon: 'success',
              background: '#303030',
              color: '#fff',
              showConfirmButton: false,
              timer: 1500
            });
            this.getProductos();
          })
        }
      })
    }
  }

}

