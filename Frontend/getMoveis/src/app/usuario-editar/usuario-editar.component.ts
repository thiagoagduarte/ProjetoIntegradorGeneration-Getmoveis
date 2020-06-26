import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent implements OnInit {

  user: Usuario = new Usuario

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id']
    this.findById(id)
  }

  findById(id: number) {
    this.usuarioService.getByIdUsuarios(id).subscribe((resp: Usuario) => {
      this.user = resp
    })
  }

  salvar() {
    this.usuarioService.putAllUsuarios(this.user).subscribe((resp: Usuario) => {
      this.user = resp
      this.router.navigate(['/cadastro'])
      location.assign('/cadastro')
    })
  }

}
