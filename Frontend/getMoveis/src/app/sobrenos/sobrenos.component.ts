import { Component, OnInit } from '@angular/core';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


@Component({
  selector: 'app-sobrenos',
  templateUrl: './sobrenos.component.html',
  styleUrls: ['./sobrenos.component.css']
})
export class SobrenosComponent implements OnInit {

  faLinkedinIn = faLinkedinIn
  faGithub = faGithub


  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0)

    localStorage.setItem('pagprodutos', "nao");
  }

  sobrenosM: string = "assets/img/Sobrenos/MVV/missao.png"
  sobrenosV: string = "assets/img/Sobrenos/MVV/visao.png"
  sobrenosVl: string = "assets/img/Sobrenos/MVV/valores.png"

  fundadorGabriel: string = "assets/img/Fundadores/GabrielFernando.jpeg"
  fundadorThiago: string = "assets/img/Fundadores/ThiagoDuarte.png"
  fundadorLucivaldo: string = "assets/img/Fundadores/LucivaldoQueiroz.jpeg"
}
