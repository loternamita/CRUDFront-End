import { Component } from '@angular/core';
import { clienteResponseInterface } from 'src/app/interfaces/clienteInterface.interface';
import { ServiceClienteService } from 'src/app/services/service-cliente.service';
import { ClienteID } from '../../../interfaces/clienteID.interface';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styles: [
  ]
})
export class ActualizarClienteComponent {

  public lista: string[] = ["Cedula de ciudadania", "Pasaporte"];
  public seleccionadoHtml: string = "";
  public numberDniHtml?: string;
  public id!: number;
  public typeDniConvert!: string;
  public clienteInterface: clienteResponseInterface | undefined;
  public buscarClienteId: ClienteID[] = [];
  public validate: boolean = false;
  public modalMostrar: boolean = false;

  public clienteUpdate: ClienteID = {
    id: 0,
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

  constructor(private serviceCliente: ServiceClienteService) { }

  public actualizarCliente() {

    this.modalMostrar = true;

    if (this.seleccionadoHtml == "Cedula de ciudadania") {
      this.typeDniConvert = "C";
    } else if (this.seleccionadoHtml == "Pasaporte") {
      this.typeDniConvert = "P";
    }

    this.serviceCliente.findAll().subscribe(clienteID => {
      this.buscarClienteId = clienteID;

      for (const clientes of this.buscarClienteId) {
        if (clientes.numeroCedula == this.numberDniHtml && clientes.tipoCedula == this.typeDniConvert) {
          this.id = clientes.id;
          this.clienteUpdate.tipoCedula = this.typeDniConvert;
          this.clienteUpdate.numeroCedula = this.numberDniHtml;
          this.serviceCliente.updateClient(this.clienteUpdate, this.id)
            .subscribe(cliente => {
              this.clienteInterface = cliente;
              this.validate = true;
            });
        } else {
          this.validate = false;
        }
      }
    });
  }

}
