import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobrenos',
  templateUrl: './sobrenos.component.html',
  styleUrls: ['./sobrenos.component.css']
})
export class SobrenosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0)
  }

  sobrenosM:string ="assets/img/Sobrenos/MVV/missao.png"
  sobrenosV:string ="assets/img/Sobrenos/MVV/visao.png"
  sobrenosVl:string ="assets/img/Sobrenos/MVV/valores.png"
}
