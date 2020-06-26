import { Component, OnInit } from '@angular/core';
import {  faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {  faUser} from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  faEnvelope = faEnvelope
  faUser = faUser
  faMapMarkerAlt = faMapMarkerAlt
  faPhone = faPhone

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0)
  }

}
