import { Component, OnInit } from '@angular/core';
import { faPhoneVolume} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faHome} from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons'
import { faCcVisa } from '@fortawesome/free-brands-svg-icons'
import { faMoneyBillWaveAlt} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

// icones dos contatos

faPhoneVolume = faPhoneVolume
faEnvelope = faEnvelope
faHome = faHome

// icones das redes sociais

  faInstagram = faInstagram
  faFacebook = faFacebook
  faLinkedin = faLinkedin
  faTwitter = faTwitter

  // Icones das formas de pagamentos
  faCcVisa = faCcVisa
  faCcMastercard = faCcMastercard
  faMoneyBillWaveAlt = faMoneyBillWaveAlt


  constructor() { }

  ngOnInit(): void {
  }

}