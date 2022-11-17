import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductServicesService } from 'src/app/services/product-services.service';
import Swal from 'sweetalert2';

export interface Products {
  uuid:any;
  timestamp:any;
  name: string;
  price: number;
  stock: number;
  thumbnails: any;

}

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.scss']
})
export class NuevoProductoComponent implements OnInit {
  producto: Products | undefined;
  templateController:boolean=false;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter();
  form = new FormGroup({});

  constructor(private fb:FormBuilder,
    private ps:ProductServicesService,
     public dialogRef: MatDialogRef<any>,
     @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.crearFormulario(this.data.data);
    this.producto = this.data.data

    if(this.data.data){
      console.log(this.data.data);
      this.templateController=true;

      // this.form.controls['uuid'].setValue(this.data.data.uuid);
      // {this.data.data.thumbnails?this.form.controls['thumbnails'].setValue(this.data.data.thumbnails):this.form.controls['thumbnails'].setValue("");}
      // // this.form.controls['thumbnails'].setValue(this.data.data.thumbnails);
      // this.form.controls['name'].setValue(this.data.data.name);
      // this.form.controls['price'].setValue(this.data.data.price);
      // {this.data.data.stock?this.form.controls['stock'].setValue(this.data.data.stock):this.form.controls['stock'].setValue("");}


    }
  }
  crearFormulario(data?:any) {

  console.log(data);

    this.form = this.fb.group({
      uuid:[data?data.uuid:''],
      timestamp:[data?data.timestamp:''],
      thumbnails:[data?data.thumbnails:''],
      name:[data?data.name:'', Validators.required],
      price:[data?data.price:'', Validators.required],
      stock:[data?data.stock:'',Validators.required]

    })
  }

  guardarProducto(){
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach(control => {

        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
        Swal.fire({
          title: 'Ingreso Inválido',
          text: 'El post no se registró, valide los datos ingresados.',
          icon: 'info',
          allowOutsideClick: false,
        });

        return;
      });

    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info'
    });

    let peticion;
    // peticion = this.ps.crearProducto(this.form.value)
    if (this.form.value.uuid) {
      console.log('ACT',this.form.value, this.form.value.uuid);
      peticion = this.ps.actualizarProduct(this.form.value.uuid, this.form.value )
    } else {
      peticion = this.ps.crearProducto(this.form.value)
    }
    peticion.subscribe((_resp: any) => {

      Swal.fire({
        position: 'center',
        title: `Publicación ${this.form.value._id ? 'actualizada!' : 'guardada'} con éxito! `,
        icon: 'success',
        showConfirmButton: false,
        background: '#303030',
        color: '#fff',
        timer: 1500,
      })
      this.dialogRef.close();
    });


  }

  close() {
    this.dialogRef.close();
  }

}
