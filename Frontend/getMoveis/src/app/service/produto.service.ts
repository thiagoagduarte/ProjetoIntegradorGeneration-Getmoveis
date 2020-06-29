import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  // Implementação do CRUD

  //Read
  getAllProdutos() {
    return this.http.get('http://localhost:8080/produtos')
  }

  GetByNome(nome: string) {
    return this.http.get(`http://localhost:8080/produtos/nome/${nome}`)
  }

  GetById(codigoDoProduto: number) {
    return this.http.get(`http://localhost:8080/produtos/${codigoDoProduto}`)
  }

  GetByCarrinho(carrinho: string) {
    return this.http.get(`http://localhost:8080/produtos/carrinho/usuario/${carrinho}`)
  }

  putProduto(produto: Produto) {
    return this.http.put('http://localhost:8080/produtos', produto)
  }

  delete(codigoDoProduto: number) {
    return this.http.delete(`http://localhost:8080/produtos/${codigoDoProduto}`)
  }

  deleteByCarrinho(carrinho: string) {
    return this.http.delete(`http://localhost:8080/deletar/carrinho/${carrinho}`)
  }

}

