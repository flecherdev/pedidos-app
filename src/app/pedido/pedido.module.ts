import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoRoutingModule } from './pedido-routing.module';
import { MaterialModule } from '../material/material.module';
import { PedidoFormComponent } from './components/pedido-form/pedido-form.component';

import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PedidoFormComponent],
  imports: [
    CommonModule,
    PedidoRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class PedidoModule { }
