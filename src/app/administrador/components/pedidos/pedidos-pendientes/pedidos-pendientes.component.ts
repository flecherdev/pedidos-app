import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import jspdf from 'jspdf';
import html2canvas from 'html2canvas';



var pedido_pendiente_seleccionado : PedidoList;

@Component({
  selector: 'app-pedidos-pendientes',
  templateUrl: './pedidos-pendientes.component.html',
  styleUrls: ['./pedidos-pendientes.component.scss']
})
export class PedidosPendientesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  pendingOrdersColumn = ['position','code', 'name','adress','status', 'details', 'action'];
  pendingOrders = PENDING_ORDERS;

  confirmedOrdersColumn = ['position','code', 'name','adress','status', 'details', 'action'];
  confirmedOrders = CONFIRMED_ORDERS;

  openDialog( pedido : PedidoList) {

    pedido_pendiente_seleccionado = pedido;
    const dialogRef = this.dialog.open(DialogPedidoPendiente);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
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


@Component({
  selector: 'dialog-pedido-pendiente',
  templateUrl: 'dialog-pedido-pendiente.html',
})

export class DialogPedidoPendiente 
{
  pedido = pedido_pendiente_seleccionado;

}