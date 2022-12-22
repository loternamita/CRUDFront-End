import { Component, Input } from '@angular/core';
import { ServiceClienteService } from 'src/app/services/service-cliente.service';
import { Cliente, clienteResponseInterface } from '../../../../interfaces/clienteInterface.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: [
  ]
})
export class ClienteComponent {

  public lista: string[] = ["Cedula de ciudadania", "Pasaporte"];

  public seleccionadoHtml: string = "";
  public typeDniConvert: string = "";
  public numberDniHtml: string = "";
  public disabled: string = "";

  public componentInfoPadre!: clienteResponseInterface;

  constructor(private serviceCliente: ServiceClienteService) { }

  public findByNumberAndTypeC(seleccionado: string, numberDni: string) {

    seleccionado = this.seleccionadoHtml;
    numberDni = this.numberDniHtml;

    if (seleccionado == "" || numberDni == "") {
      return;
    }

    if (seleccionado == "Cedula de ciudadania") {
      this.typeDniConvert = "C";
    } else if (seleccionado == "Pasaporte") {
      this.typeDniConvert = "P";
    }

    this.serviceCliente.findByTypeNumberService(this.typeDniConvert, numberDni)
      .subscribe(cliente => this.componentInfoPadre = cliente);
  }
}


