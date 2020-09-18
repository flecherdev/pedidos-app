import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorDashboardComponent } from './components/administrador-dashboard/administrador-dashboard.component';
import { MaterialModule } from '../material/material.module';

const routes: Routes = [
  {
    path: '',
    component: AdministradorDashboardComponent
  }
];

@NgModule({
  declarations: [AdministradorDashboardComponent],
  imports: [
    MaterialModule,
    CommonModule,
    AdministradorRoutingModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdministradorModule { }
