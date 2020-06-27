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

  usuario: string = localStorage.getItem('usuario');

  listaProdutos: Produto[]

  constructor(public authService: AuthService, private produtoService: ProdutoService, public router: Router) { }

  ngOnInit(): void {
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
      this.router.navigate(['home']);
      location.assign('/home');
      alert('Você está logado');
      // alert(`Usuario: ${this.userLogin.usuario}`);
      // alert(`Senha: ${this.userLogin.senha}`);
      // alert(`Tipo: ${this.userLogin.tipo}`);
    }, err => {
      alert('Houve um erro ao logar, verifique o usuário e a senha');
      // alert(`Usuario: ${this.userLogin.usuario}`);
      // alert(`Senha: ${this.userLogin.senha}`);
      // alert(`Tipo: ${this.userLogin.tipo}`);
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
}


