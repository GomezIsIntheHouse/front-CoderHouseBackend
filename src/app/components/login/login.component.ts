import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!:FormGroup
  loading:boolean=false;
  validButtonForm:boolean=true;
  durationInSeconds: number=1;

  constructor(private fb:FormBuilder, private _snackBar:MatSnackBar, private router:Router, private cs:CartService) {
    this.form = this.fb.group({

      usuario: ['', Validators.required],
      password: ['', Validators.required]

    })
   }

  ngOnInit(): void {
  }

  ingresar(){
    console.log(this.form);
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    console.log(usuario, password);

    if(usuario=="jgomez" && password=="123"){
      let user = localStorage.setItem('user', usuario)
      this.cs.createCart(user)

      this.loading=true
      // redirect to dash
      this.fackeLoading()


    }else{

      // mostramos msj error
      this.error()
      this.form.reset();
    }

  }

  error(){
    this._snackBar.open('Invalid user or password', '',{
      duration: this.durationInSeconds * 1000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    });
  }


  fackeLoading(){
    this.loading = true;
    setTimeout(() => {
      // redireccionamos al dashboard

      this.router.navigate(['dashboard']);
    }, 1500);
  }
  }

