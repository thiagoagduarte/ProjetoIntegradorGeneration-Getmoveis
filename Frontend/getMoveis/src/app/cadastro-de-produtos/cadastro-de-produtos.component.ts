import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-cadastro-de-produtos',
  templateUrl: './cadastro-de-produtos.component.html',
  styleUrls: ['./cadastro-de-produtos.component.css']
})
export class CadastroDeProdutosComponent implements OnInit {

  listaProdutos: Produto[]

  produto: Produto = new Produto

  valortotal: number

  alerta: boolean = false

  constructor(public router: Router, private produtoService: ProdutoService) { }

  ngOnInit() {
    let tipo = localStorage.getItem('tipo');
    let codigoDoProduto = parseInt(localStorage.getItem('editarProduto'))

    if (tipo == null) {
      alert('área exclusiva para funcionários');
      this.router.navigate(['/home']);
    }

    this.findallProdutos();
    this.editarByCodigoDoProduto(codigoDoProduto);
    localStorage.removeItem('editarProduto')
  }

  salvar() {
    this.produtoService.putProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
      alert("Produto cadastrado!")
      location.assign('/cadastrodeprodutos');
    }, err => {
      alert('Houve um erro ao cadastrar o produto, verifique os atributos inseridos');
      // alert(`Usuario: ${this.userLogin.usuario}`);
      // alert(`Senha: ${this.userLogin.senha}`);
      // alert(`Tipo: ${this.userLogin.tipo}`);
    })
  }

  findByCodigoDoProduto(codigoDoProduto: number) {
    this.produtoService.GetById(codigoDoProduto).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }

  editarByCodigoDoProduto(codigoDoProduto: number) {
    this.produtoService.GetById(codigoDoProduto).subscribe((resp: Produto) => {
      this.produto = resp
    })
    window.scroll(0, 0);
  }

  findallProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

  deletar(codigoDoProduto: number) {
    this.produtoService.delete(codigoDoProduto).subscribe(() => {

    })
    location.assign('/cadastrodeprodutos');
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

}
