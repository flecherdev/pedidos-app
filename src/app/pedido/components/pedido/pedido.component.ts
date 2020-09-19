import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../core/model/product.model';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
    // this.product = {
    //   _id: 1,
    //   title: 'Frutilla',
    //   price: 100,
    //   image: 'assets/frutilla.jpg',
    //   description: 'quiero frutillas un poquito mas maduras',
    //   _stock: 2,
    //   _cant: 1
    // }
  }

  addCart() {
    console.log('agrego el producto al carrito');
  }

}
