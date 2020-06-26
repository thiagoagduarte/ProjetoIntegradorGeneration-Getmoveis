import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/Produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  listaProdutos: Produto[]

  produto: Produto = new Produto

  carrinho: string = localStorage.getItem('usuario')

  constructor(private produtoService: ProdutoService, public router: Router) { }

  ngOnInit() {
    this.pesquisarPorCarrinho()
    let token = localStorage.getItem('token');
    if (token == null) {
      alert('Login necessário');
      this.router.navigate(['/home'])
    }


  }

  pesquisarPorCarrinho() {
    this.produtoService.GetByCarrinho(this.carrinho).subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

  Remover(produto: Produto) {
    produto.carrinho = null
    this.produtoService.putProduto(produto).subscribe((resp: Produto) => {
      this.produto = resp
    })
    location.assign('carrinho')
  }

  findByCodigoDoProduto(codigoDoProduto: number) {
    this.produtoService.GetById(codigoDoProduto).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }

}
