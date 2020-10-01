import { Component, OnInit , ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

@ViewChild('sidenav',{static: false}) sidenav: MatSidenav;

  constructor() { }

  ngOnInit() {

  }

  close(reason: string) {
    this.sidenav.close();
  }


  
  
}