import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  usuario: Usuario = new Usuario

  alerta: boolean = false

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    let codigoCpf = this.route.snapshot.params['codigoCpf']
    this.findById(codigoCpf)

    window.scroll(0, 0)





  }

  findById(codigoCpf: number) {
    this.usuarioService.getByIdUsuario(codigoCpf).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  salvar() {


    this.usuarioService.putUsuario(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp
      this.router.navigate(['/cadastro'])
      location.assign('/cadastro')
    })

  }

}

