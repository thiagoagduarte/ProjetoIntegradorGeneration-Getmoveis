import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-ordem-compra-sucesso',
  templateUrl: './ordem-compra-sucesso.component.html',
  styleUrls: ['./ordem-compra-sucesso.component.css']
})
export class OrdemCompraSucessoComponent implements OnInit {

  listaProdutos: Produto[]

  produto: Produto = new Produto

  valortotal: number

  carrinho: string = localStorage.getItem('usuario')

  @Input() public idPedidoCompra: number

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.pesquisarPorCarrinho()
  }

  pesquisarPorCarrinho() {
    this.produtoService.GetByCarrinho(this.carrinho).subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

  FinalizarCompra() {
    this.produtoService.deleteCarrinho(this.carrinho).subscribe(() => {

    })
    alert(`Obrigado por comprar com a GETMóveis!`)
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



