import { Component, Input } from '@angular/core';
import { ServiceClienteService } from 'src/app/services/service-cliente.service';
import { Cliente, clienteResponseInterface } from '../../../../interfaces/clienteInterface.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente-info',
  templateUrl: 'cliente-info.component.html',
  styles: [
  ]
})
export class ClienteComponentInfo {
  @Input() infoCliente!: clienteResponseInterface;
}


