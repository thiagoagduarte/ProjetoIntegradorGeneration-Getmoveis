import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/Produto';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})


export class CarrinhoComponent implements OnInit {


  listaProdutos: Produto[]

  produto: Produto = new Produto

  carrinho: string = localStorage.getItem('usuario')

  //Template Form com view Child
  @ViewChild('formulario') public formulario: NgForm
  //controlar botão confirmar compra

  constructor(private produtoService: ProdutoService, public router: Router) { }

  ngOnInit() {
    this.pesquisarPorCarrinho()
    let token = localStorage.getItem('token');
    if (token == null) {
      alert('Login necessário');
      this.router.navigate(['/home'])
    }
    let tipo = localStorage.getItem('tipo');
    if (tipo == "admin") {
      alert('Funcionários não tem acesso a função carrinho');
      this.router.navigate(['/home'])
    }


  }

  // Validações 

  public confirmarCompra(): void {
    console.log(this.formulario)
  }

  //total do carrinho

  

 


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
