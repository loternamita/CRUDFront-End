import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorGeneralComponent } from './informacion-cliente/Exception/error-general.component';


const routes: Routes = [
  {
    path: 'cliente',
    loadChildren: () => import('./informacion-cliente/informacion-Cliente.module').then(m => m.InformacionClienteModule)
  },
  {
    path: '**',
    component: ErrorGeneralComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
