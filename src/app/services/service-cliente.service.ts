import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, retry, throwError } from 'rxjs';

import { Cliente, clienteResponseInterface } from '../interfaces/clienteInterface.interface';
import { CreateClientInterface } from '../interfaces/clienteCreate.interface';
import { catchError } from 'rxjs/operators';
import { ClienteID } from '../interfaces/clienteID.interface';


@Injectable({
  providedIn: 'root'
})
export class ServiceClienteService {

  private baseUrl: string = environment.baseUrl;
  private pathPrincipal: string = "/clientes"
  private params?: string;

  constructor(private http: HttpClient) {
  }

  private headers = {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTIONS, DELETE',
      'Access-Control-Allow-Headers': 'x-requested-with',
      'Access-Control-Max-Age': '3600',
      'Access-Control-Allow-Credentials': 'true'
    }
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Se ha producido un error del lado del cliente o de la red. Manéjalo como corresponde.
      console.log('Ha ocurrido un error:', error.error.message);
    } else {
      // El backend devolvió un código de respuesta fallido.
      // El cuerpo de la respuesta puede contener pistas sobre lo que salió mal,
      console.log(
        `El BackEnd retona el siguiente error:  ${error.status}, ` +
        `El body fue: ${error.error} ` +
        `El mensaje fue: ${error.message}` +
        `El mensaje fue: ${error.url}` +
        `El mensaje fue: ${error.name}` +
        `El mensaje fue: ${error.headers}`
      );
    }
    // devuelve un observable con un mensaje de error para el usuario
    return throwError(
      'Ha ocurrido algo malo; por favor, inténtalo más tarde.');
  };

  findByTypeNumberService(typeDni: string, numberDni: string): Observable<clienteResponseInterface> {
    this.params = `?tipoCedula=${typeDni}&numeroCedula=${numberDni}`
    return this.http.get<clienteResponseInterface>(`${this.baseUrl}${this.pathPrincipal}/listarTipoAndNumero${this.params}`, this.headers)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  saveClient(client: CreateClientInterface): Observable<clienteResponseInterface> {
    return this.http.post<clienteResponseInterface>(`${this.baseUrl}${this.pathPrincipal}/crearCliente`, client, this.headers)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  findAll(): Observable<ClienteID[]> {
    return this.http.get<ClienteID[]>(`${this.baseUrl}${this.pathPrincipal}/listar`, this.headers)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  updateClient(client: ClienteID, id: number): Observable<clienteResponseInterface> {
    return this.http.put<clienteResponseInterface>(`${this.baseUrl}${this.pathPrincipal}/actualizarCliente/${id}`, client, this.headers)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
}


