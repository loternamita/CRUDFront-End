import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ClienteComponent } from './cliente/Listar/Buscar/cliente.component';
import { InformacionClienteRoutingModule } from './informacion-cliente-routing.module';
import { ClienteRegistrarComponent } from './cliente/Registrar/cliente-registrar.component';
import { ActualizarClienteComponent } from './cliente/Actualizar/actualizar-cliente.component';
import { ClienteComponentInfo } from './cliente/Listar/informacion/cliente-info.component';

@NgModule({
  declarations: [
    ClienteComponent,
    ClienteRegistrarComponent,
    ActualizarClienteComponent,
    ClienteComponentInfo
  ],
  imports: [
    CommonModule,
    FormsModule,
    InformacionClienteRoutingModule,
    FlexLayoutModule
  ]
})
export class InformacionClienteModule { }
