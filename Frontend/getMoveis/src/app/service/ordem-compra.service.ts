import {Pedido} from '../service/pedido.model'
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from'@angular/common/http'
import { Observable} from 'rxjs'

@Injectable()
export class OrdemCompraService {

    url = 'http://localhost:3000/pedidos';

    constructor(private httpClient: HttpClient) {}

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }
      

    public efetivarCompra(pedido:Pedido): Observable<any> {
        return this.httpClient.post<Pedido>(this.url, JSON.stringify(pedido), 
        this.httpOptions)
    } 
    
}