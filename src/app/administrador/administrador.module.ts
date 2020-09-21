import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AdministradorDashboardComponent } from './components/administrador-dashboard/administrador-dashboard.component';
import { MaterialModule } from '../material/material.module';

import { SharedModule } from '../shared/shared.module';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';



const routes: Routes = [
  {
    path: '',
    component: ProductosComponent
  },
  {
    path: 'admin-pedidos',
    component: PedidosComponent
  },
  {
    path: 'admin-productos',
    component: ProductosComponent
  },
  {
    path: 'admin-configuracion',
    component: ConfiguracionComponent
  }
];

@NgModule({
  declarations: [AdministradorDashboardComponent, PedidosComponent, ProductosComponent, ConfiguracionComponent],
  imports: [
    SharedModule,
    MaterialModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdministradorModule { }
