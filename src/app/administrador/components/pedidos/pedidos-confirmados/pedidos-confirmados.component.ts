import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos-confirmados',
  templateUrl: './pedidos-confirmados.component.html',
  styleUrls: ['./pedidos-confirmados.component.scss']
})
export class PedidosConfirmadosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pendingOrdersColumn = ['position','code', 'name','adress','status', 'details', 'action'];
  pendingOrders = PENDING_ORDERS;

  confirmedOrdersColumn = ['position','code', 'name','adress','status', 'details', 'action'];
  confirmedOrders = CONFIRMED_ORDERS;

}




const PENDING_ORDERS: PedidoList[] = [
  {position: 1, code: 'SEP18-40', name: 'Mirta Legrand', adress:'Longchamps',  status: 'Pendiende'},
  {position: 2, code: 'SEP18-41', name: 'Mirta Legrand', adress:'Monte Grande',  status: 'Pendiende'},
  {position: 3, code: 'SEP18-41', name: 'Mirta Legrand', adress:'Lanus',  status: 'Pendiende'},
  {position: 3, code: 'SEP18-41', name: 'Mirta Legrand', adress:'Lanus',  status: 'Pendiende'},
  {position: 3, code: 'SEP18-41', name: 'Mirta Legrand', adress:'Lanus',  status: 'Pendiende'},
  {position: 3, code: 'SEP18-41', name: 'Mirta Legrand', adress:'Lanus',  status: 'Pendiende'},
  {position: 1, code: 'SEP18-40', name: 'Mirta Legrand', adress:'Longchamps',  status: 'Pendiende'},
  {position: 2, code: 'SEP18-41', name: 'Mirta Legrand', adress:'Monte Grande',  status: 'Pendiende'},
  {position: 3, code: 'SEP18-41', name: 'Mirta Legrand', adress:'Lanus',  status: 'Pendiende'},
  {position: 3, code: 'SEP18-41', name: 'Mirta Legrand', adress:'Lanus',  status: 'Pendiende'},
  {position: 3, code: 'SEP18-41', name: 'Mirta Legrand', adress:'Lanus',  status: 'Pendiende'},
  {position: 3, code: 'SEP18-41', name: 'Mirta Legrand', adress:'Lanus',  status: 'Pendiende'},
];


const CONFIRMED_ORDERS: PedidoList[] = [
  {position: 1, code: 'SEP18-40', name: 'Mirta Legrand', adress:'Longchamps',  status: 'En preparacion'},
  {position: 2, code: 'SEP18-41', name: 'Mirta Legrand', adress:'Monte Grande',  status: 'En preparacion'},
  {position: 3, code: 'SEP18-41', name: 'Mirta Legrand', adress:'Lanus',  status: 'En preparacion'},
  {position: 3, code: 'SEP18-41', name: 'Mirta Legrand', adress:'Lanus',  status: 'En preparacion'},
  {position: 3, code: 'SEP18-41', name: 'Mirta Legrand', adress:'Lanus',  status: 'En preparacion'},
  {position: 3, code: 'SEP18-41', name: 'Mirta Legrand', adress:'Lanus',  status: 'En preparacion'},
  {position: 1, code: 'SEP18-40', name: 'Mirta Legrand', adress:'Longchamps',  status: 'En preparacion'},
  {position: 2, code: 'SEP18-41', name: 'Mirta Legrand', adress:'Monte Grande',  status: 'En preparacion'},
  {position: 3, code: 'SEP18-41', name: 'Mirta Legrand', adress:'Lanus',  status: 'En preparacion'},
  {position: 3, code: 'SEP18-41', name: 'Mirta Legrand', adress:'Lanus',  status: 'En preparacion'},
  {position: 3, code: 'SEP18-41', name: 'Mirta Legrand', adress:'Lanus',  status: 'En preparacion'},
  {position: 3, code: 'SEP18-41', name: 'Mirta Legrand', adress:'Lanus',  status: 'En preparacion'},
];

export interface PedidoList {
  code: string;
  name: string;
  adress: string;
  position: number;
  status: string;
}
