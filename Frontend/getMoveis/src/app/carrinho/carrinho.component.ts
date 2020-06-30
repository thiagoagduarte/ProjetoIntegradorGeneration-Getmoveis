import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/Produto';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdemCompraService } from '../service/ordem-compra.service'
import { Pedido } from '../service/pedido.model';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
  providers: [OrdemCompraService]
})


export class CarrinhoComponent implements OnInit {


  listaProdutos: Produto[]

  produto: Produto = new Produto

  valortotal: number

  alerta: boolean = false

  carrinho: string = localStorage.getItem('usuario')

  valortotalcarrinhoString: string = localStorage.getItem('totalcarrinho')

  totalcarrinho: number = parseFloat(localStorage.getItem('totalcarrinho'))

  //Botoes do formulario de dados :

  public idPedidoCompra: number

  public endereco: string = ''
  public numero: string = ''
  public complemento: string = ''
  public formaPagamento: string = ''

  //controles de validação dos campos

  public enderecoValido: boolean
  public numeroValido: boolean
  public complementoValido: boolean
  public formaPagamentoValido: boolean

  //estados primitivos dos campos
  public enderecoEstadoPrimitivo: boolean = true
  public numeroEstadoPrimitivo: boolean = true
  public formaPagamentoEstadoPrimitivo: boolean = true

  //controlar botão confirmar compra
  public formEstado: string = 'disabled'

  constructor(private produtoService: ProdutoService, public router: Router,
    private ordemCompraService: OrdemCompraService, private route: ActivatedRoute) { }

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
    if (this.valortotal === undefined) {
      this.alerta = true
    }

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
      console.log(codigoDoProduto)
    })
  }

  // Controle dos formulários de envio:

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco

    this.enderecoEstadoPrimitivo = false

    if (this.endereco.length > 3) {
      this.enderecoValido = true
    } else {
      this.enderecoValido = false
    }
    this.habilitaForm()
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero

    this.numeroEstadoPrimitivo = false

    if (this.numero.length > 0) {
      this.numeroValido = true
    } else {
      this.numeroValido = false
    }
    this.habilitaForm()
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento
    if (this.complemento.length > 0) {
      this.complementoValido = true
    }
  }

  public atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento

    this.formaPagamentoEstadoPrimitivo = false

    if (this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true
    } else {
      this.formaPagamentoValido = false
    }
    this.habilitaForm()
  }

  public habilitaForm(): void {
    if (this.enderecoValido === true && this.numeroValido === true && this.formaPagamentoValido === true) {
      this.formEstado = ''
    } else {
      this.formEstado = 'disabled'
    }

  }



  public confirmarCompra(): void {

    this.pedido.endereco = this.endereco
    this.pedido.numero = this.numero
    this.pedido.complemento = this.complemento
    this.pedido.formaPagamento = this.formaPagamento

    this.ordemCompraService.efetivarCompra(this.pedido).subscribe(pedido => { this.idPedidoCompra = pedido.id })

  }

  public pedido: Pedido = new Pedido('', '', '', '')



}




