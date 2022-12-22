export interface clienteResponseInterface {
  code: number;
  messageCode: string;
  cliente: Cliente;
}

export interface Cliente {
  primerNombre: string;
  segundoNombre: string;
  primerApellido: string;
  segundoApellido: string;
  telefono: string;
  direccion: string;
  ciudadResidencia: string;
}
