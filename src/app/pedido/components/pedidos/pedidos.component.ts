import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/model/product.model';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  products: Product[] = [];

  constructor() { }

  ngOnInit() {
    this.products = [
      {
          _id: 1,
          title: 'Frutilla',
          price: 100,
          image: 'assets/products/frutilla.jpg',
          description: 'quiero frutillas un poquito mas maduras',
          _stock: 2,
          _cant: 1
      },
      {
          _id: 1,
          title: 'Lechuga',
          price: 100,
          image: 'assets/products/lechuga.jpg',
          description: 'quiero lechuga un poquito mas maduras',
          _stock: 2,
          _cant: 1
      },
      {
          _id: 1,
          title: 'Manzanas',
          price: 100,
          image: 'assets/products/manzana.jpg',
          description: 'quiero manzanas  un poquito mas maduras',
          _stock: 2,
          _cant: 1
      },
      {
          _id: 1,
          title: 'Papas',
          price: 100,
          image: 'assets/products/papa.jpg',
          description: 'quiero papas un poquito mas maduras',
          _stock: 2,
          _cant: 1
      },
      {
          _id: 1,
          title: 'Tomate',
          price: 100,
          image: 'assets/products/tomate.jpg',
          description: 'quiero tomate un poquito mas maduras',
          _stock: 2,
          _cant: 1
      }
    ];
  }

}
