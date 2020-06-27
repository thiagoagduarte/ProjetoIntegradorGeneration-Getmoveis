import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FAQComponent } from './faq/faq.component';
import { ContatoComponent } from './contato/contato.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { CadastroEUsuariosComponent } from './cadastro-eusuarios/cadastro-eusuarios.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { EditarComponent } from './editar/editar.component';
import { DeletarComponent } from './deletar/deletar.component';
import { SofasComponent } from './sofas/sofas.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { OrdemCompraSucessoComponent } from './ordem-compra-sucesso/ordem-compra-sucesso.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FAQComponent,
    ContatoComponent,
    SobrenosComponent,
    CadastroEUsuariosComponent,
    EditarComponent,
    DeletarComponent,
    SofasComponent,
    ProdutosComponent,
    CarrinhoComponent,
    OrdemCompraSucessoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
