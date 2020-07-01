import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  listaProdutos: Produto[]

  produto: Produto = new Produto

  valortotal: number

  usuario: string = localStorage.getItem('usuario')

  nome: string = localStorage.getItem('nome')

  codigoDoProdutoString: string

  totalcarrinho: number = parseInt(localStorage.getItem('totalcarrinho'))

  constructor(private produtoService: ProdutoService, public router: Router, public authService: AuthService) { }

  ngOnInit() {


    localStorage.setItem('produtos', "sim");
    this.pesquisarPorNome();

    localStorage.setItem('nome', "a");
    // if (localStorage.getItem('totalcarrinho') == null) {
    //   localStorage.setItem('totalcarrinho', "0")
    // }
  }

  // findallProdutos() {
  //   this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
  //     this.listaProdutos = resp
  //   })
  // }

  pesquisarPorNome() {
    this.produtoService.GetByNome(this.nome).subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
    localStorage.setItem('produtos', "nao");
  }

  buscaCadeiras() {
    localStorage.setItem('nome', "cadeira");
    location.assign('/produtos');
  }

  buscaMesas() {
    localStorage.setItem('nome', "mesa");
    location.assign('/produtos');
  }

  buscaPoltronas() {
    localStorage.setItem('nome', "poltrona");
    location.assign('/produtos');
  }

  buscaSofas() {
    localStorage.setItem('nome', "sofa");
    location.assign('/produtos');
  }

  findByCodigoDoProduto(codigoDoProduto: number) {
    this.produtoService.GetById(codigoDoProduto).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }

  AdicionarAoCarrinho(produto: Produto) {
    produto.carrinho = localStorage.getItem('usuario')
    this.produtoService.putProduto(produto).subscribe((resp: Produto) => {
      this.produto = resp

    })
    localStorage.setItem('adicaocarrinho', "sim")
    location.href = "/produtos"
  }

  getTotal() {
    let total = 0;
    for (var i = 0; i < this.listaProdutos.length; i++) {
      if (this.listaProdutos[i].valor) {
        total += this.listaProdutos[i].valor;
        this.valortotal = total;
      }
    }
    return total;
  }

  EditarProduto(codigoDoProduto: number) {
    this.codigoDoProdutoString = codigoDoProduto.toString()
    localStorage.setItem('editarProduto', this.codigoDoProdutoString)
    location.assign('/cadastrodeprodutos')
    window.scroll(0, 0);
  }

}

