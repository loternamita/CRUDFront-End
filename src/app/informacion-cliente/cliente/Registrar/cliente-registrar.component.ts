import { Component } from '@angular/core';
import { CreateClientInterface } from 'src/app/interfaces/clienteCreate.interface';
import { ServiceClienteService } from '../../../services/service-cliente.service';
import { Cliente, clienteResponseInterface } from '../../../interfaces/clienteInterface.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cliente-registrar',
  templateUrl: './cliente-registrar.component.html',
  styles: [
  ]
})
export class ClienteRegistrarComponent {

  public lista: string[] = ["Cedula de ciudadania", "Pasaporte"];
  public seleccionadoHtml: string = "";

  public clienteCreate: CreateClientInterface = {
    tipoCedula: '',
    numeroCedula: '',
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    telefono: '',
    direccion: '',
    ciudadResidencia: ''
  }

  public client: Cliente = {
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    telefono: '',
    direccion: '',
    ciudadResidencia: ''
  };


  public response: clienteResponseInterface = {
    code: 0,
    messageCode: '',
    cliente: this.client
  }

  constructor(private serviceClient: ServiceClienteService) { }

  guardar() {

    if (this.seleccionadoHtml == "Cedula de ciudadania") {
      this.clienteCreate.tipoCedula = "C";
    } else if (this.seleccionadoHtml == "Pasaporte") {
      this.clienteCreate.tipoCedula = "P";
    }

    this.serviceClient.saveClient(this.clienteCreate)
      .subscribe(heroe => {
        this.response = heroe
      })
  }
}
