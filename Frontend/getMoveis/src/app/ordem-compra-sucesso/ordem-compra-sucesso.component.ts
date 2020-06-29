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

  carrinho: string = localStorage.getItem('usuario')

  valortotalcarrinhoString: string = localStorage.getItem('totalcarrinho')

  @Input() public idPedidoCompra: number

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.pesquisarPorCarrinho()
  }

  pesquisarPorCarrinho() {
    this.produtoService.GetByCarrinho(this.carrinho).subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

  FinalizarCompra() {
    this.listaProdutos = []
    location.assign('/ordemcompra');
  }


}




