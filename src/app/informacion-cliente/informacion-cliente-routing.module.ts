import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/Listar/Buscar/cliente.component';
import { ErrorGeneralComponent } from './Exception/error-general.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'findByTypeAndNumber',
        component: ClienteComponent
      },
      {
        path: '**',
        component: ErrorGeneralComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformacionClienteRoutingModule { }
