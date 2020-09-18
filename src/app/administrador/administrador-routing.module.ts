import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministradorDashboardComponent } from './components/administrador-dashboard/administrador-dashboard.component';


const routes: Routes = [
  {
    path: '/admin-dashboard',
    component: AdministradorDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
