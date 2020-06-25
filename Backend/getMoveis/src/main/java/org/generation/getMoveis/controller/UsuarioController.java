package org.generation.getMoveis.controller;

import java.util.List;
import java.util.Optional;

import org.generation.getMoveis.model.UserLogin;
import org.generation.getMoveis.model.Usuario;
import org.generation.getMoveis.repository.UsuarioRepository;
import org.generation.getMoveis.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UsuarioController {

	@Autowired
	private UsuarioService usuarioService;
	
	@PostMapping("/logar")
	public ResponseEntity<UserLogin> Autentication(@RequestBody Optional<UserLogin> user){
		return usuarioService.Logar(user).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
	}
	
	@PostMapping("/cadastrar")
	public ResponseEntity<Usuario> Post(@RequestBody Usuario usuario) {
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(usuarioService.CadastrarUsuario(usuario));
	}
	
	@Autowired
	private UsuarioRepository repositoryUsuario;
	
	@GetMapping
	public ResponseEntity<List<Usuario>> GetAll(){
		return ResponseEntity.ok(repositoryUsuario.findAll());
	}
	
	@GetMapping("/{idUsuario}")
	public ResponseEntity<Usuario> GetById(@PathVariable long idUsuario){
		return repositoryUsuario.findById(idUsuario)
				.map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("/nome/{nomeCliente}")
	public ResponseEntity<List<Usuario>> GetByNome(@PathVariable String nomeCliente){
		return ResponseEntity.ok(repositoryUsuario.findAllByNomeClienteContainingIgnoreCase(nomeCliente));
	}
	
	@GetMapping("/tipo/{tipo}")
	public ResponseEntity<List<Usuario>> GetByTipo(@PathVariable String tipo){
		return ResponseEntity.ok(repositoryUsuario.findAllByTipoContainingIgnoreCase(tipo));
	}
	
	@PostMapping
	public ResponseEntity<Usuario> post (@RequestBody Usuario usuario){
		return ResponseEntity.status(HttpStatus.CREATED).body(repositoryUsuario.save(usuario));
	}
	
	@PutMapping
	public ResponseEntity<Usuario> put (@RequestBody Usuario usuario){
		return ResponseEntity.status(HttpStatus.OK).body(repositoryUsuario.save(usuario));
	}
	
	@DeleteMapping("/{idUsuario}")
	public void delete(@PathVariable long idUsuario) {
		repositoryUsuario.deleteById(idUsuario);
	}
}
