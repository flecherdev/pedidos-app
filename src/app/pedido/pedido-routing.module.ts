import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidoFormComponent } from './components/pedido-form/pedido-form.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';


const routes: Routes = [
  {
    path: '',
    component: PedidosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
