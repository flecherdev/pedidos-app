import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pedido } from 'src/app/core/model/pedido.model';
import { Producto } from 'src/app/core/model/producto.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.scss']
})
export class PedidoFormComponent implements OnInit {

  form: FormGroup;
  pedido: Pedido;
  producto: Producto[] = [];
  productoLista: Producto[] = [];
  selectedValue: number;


  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.producto = [
      { id: 1, cod: 'PROD-A', name: 'Un Producto', stock: 100 },
      { id: 2, cod: 'PROD-B', name: 'Otro Producto', stock: 10 },
      { id: 3, cod: 'PROD-C', name: 'Tercer Producto', stock: 0 }
    ];

    this.pedido = {};
  }

  saveProduct() {
    const pedidoValue: Pedido = this.form.value;

    let prod: Producto[] =  this.producto.filter( prod => prod.id === this.selectedValue);

    prod[0].cant = pedidoValue.cant;
    if (prod[0].cant < prod[0].stock) {
      this.productoLista.push(prod[0]);
    } else {
      this.openSnackBar('No hay suficiente stock', 'ok');
    }

    console.log(this.productoLista);

  }

  enviarPedido(event: Event) {
    // event.preventDefault();
    if (this.form.valid) {
      let pedido: Pedido = this.form.value;
      if (this.productoLista.length >= 1) {
        pedido.productos = this.productoLista;
        console.log(pedido)
        this.pedido = pedido
        this.openSnackBar('Se envia pedido', 'ok');
      } else {
        this.openSnackBar('tine que seleccionar un producto como minimo', 'ok');
      }
    }
  }

  // validacion de formulario
  private buildForm() {
    this.form = this.formBuilder.group({
      producto: ['', [Validators.required]],
      dni: [''],
      cant: ['', [Validators.required]],
      nombre: [''],
      fecha: [''],
      description: [''],
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
