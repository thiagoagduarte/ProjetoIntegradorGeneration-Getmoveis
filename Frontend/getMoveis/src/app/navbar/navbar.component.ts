import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Produto } from '../model/Produto';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { UserLogin } from '../model/UserLogin';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userLogin: UserLogin = new UserLogin();
  faUser = faUser
  faShoppingCart = faShoppingCart
  faSearch = faSearch

  nome: string

  produtos: string

  // login: boolean = false;

  // errologin: boolean = false;

  // erroacessocarrinho: string = localStorage.getItem("erroacessocarrinho");

  // adicaocarrinho: string = localStorage.getItem("adicaocarrinho");

  pagprodutos: string = localStorage.getItem("pagprodutos");

  usuario: string = localStorage.getItem('usuario');

  listaProdutos: Produto[]

  constructor(public authService: AuthService, private produtoService: ProdutoService, public router: Router) { }

  ngOnInit() {
    this.produtos = localStorage.getItem('produtos');
  }

  pesquisarPorNome() {
    localStorage.setItem('nome', this.nome);
    this.router.navigate(['/produtos']);
    location.assign('/produtos');
  }

  entrar() {
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp;
      localStorage.setItem('token', this.userLogin.token);
      localStorage.setItem('usuario', this.userLogin.usuario);
      localStorage.setItem('tipo', this.userLogin.tipo);
      // this.login = true;
      alert("Você está logado!")
      location.assign('/home')
    }, err => {
      // this.errologin = true;
      alert("Erro ao logar! Verifique os dados inseridos!")
    });
  }

  sair() {
    this.router.navigate(['/home']);
    localStorage.clear();
  }

  CadastroEAlteracaoDeProdutos() {
    // alert(`tipo: ${this.userLogin.tipo}`)
    this.router.navigate(['/cadastrodeprodutos']);
  }

  buscaSofas() {
    localStorage.setItem('nome', "sofa");
    location.assign('/produtos');
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

  buscaTodos() {
    localStorage.setItem('nome', "a");
    location.assign('/produtos');
  }

  ReloadLogin() {
    location.assign('/home');
  }

  ReloadErroAcessoCarrinho() {
    localStorage.removeItem('erroacessocarrinho');
    location.assign('/home');
  }

  // VerificacaoAcessoCarrinho() {
  //   if (localStorage.getItem('usuario') == null) {
  //     this.erroacessocarrinho = "sim";
  //   }
  // }


}


