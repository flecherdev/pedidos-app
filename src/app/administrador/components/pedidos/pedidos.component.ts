import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns = ['position','code', 'name','adress','status', 'details', 'action'];
  dataSource = ELEMENT_DATA;
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, code: 'SEP18-40', name: 'Mirta Legrand', adress:'Longchamps', weight: 1.0079, status: 'Pendiende'},
  {position: 2, code: 'SEP18-41', name: 'Mirta Legrand', adress:'Monte Grande', weight: 4.0026, status: 'Pendiende'},
  {position: 3, code: 'SEP18-41', name: 'Mirta Legrand', adress:'Lanus', weight: 6.941, status: 'Pendiende'},
  {position: 4, code: 'SEP18-42', name: 'Mirta Legrand', adress:'Lavallol', weight: 9.0122, status: 'Pendiende'},
  {position: 5, code: 'SEP18-43', name: 'Mirta Legrand', adress:'Temperley', weight: 10.811, status: 'Pendiende'},
  {position: 6, code: 'SEP18-44', name: 'Mirta Legrand', adress:'Laferrere', weight: 12.0107, status: 'Pendiende'},
  {position: 7, code: 'SEP18-45', name: 'Mirta Legrand', adress:'Merlo', weight: 14.0067, status: 'Pendiende'},
  {position: 8, code: 'SEP18-46', name: 'Mirta Legrand', adress:'Moreno', weight: 15.9994, status: 'Pendiende'},
  {position: 9, code: 'SEP18-47', name: 'Mirta Legrand', adress:'Caballito -CABA', weight: 18.9984, status: 'Pendiende'},
  {position: 10, code: 'SEP18-48', name: 'Mirta Legrand', adress:'Flores -CABA', weight: 20.1797, status: 'Pendiende'},
  
];

export interface PeriodicElement {
  code: string;
  name: string;
  adress: string;
  position: number;
  weight: number;
  status: string;
}