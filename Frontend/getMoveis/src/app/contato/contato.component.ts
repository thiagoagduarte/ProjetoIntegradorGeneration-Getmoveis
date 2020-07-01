import { Component, OnInit, ViewChild } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm

  faEnvelope = faEnvelope
  faUser = faUser
  faMapMarkerAlt = faMapMarkerAlt
  faPhone = faPhone

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0)

    localStorage.setItem('pagprodutos', "nao");
  }

  public ConfirmarEnvio(formulario: NgForm): void {
    console.log(this.formulario)

  }
}
