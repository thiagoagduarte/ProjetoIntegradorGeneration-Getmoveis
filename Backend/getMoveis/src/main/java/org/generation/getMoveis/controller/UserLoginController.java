package org.generation.getMoveis.controller;

import java.util.List;

import org.generation.getMoveis.model.UserLogin;
import org.generation.getMoveis.repository.UserLoginRepository;
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
@RequestMapping("/userlogin")
@CrossOrigin("*")
public class UserLoginController {
	
	@Autowired
	private UserLoginRepository repositoryUserLogin;
	
	@GetMapping
	public ResponseEntity<List<UserLogin>> GetAll(){
		return ResponseEntity.ok(repositoryUserLogin.findAll());
	}
	
	@GetMapping("/{idUserLogin}")
	public ResponseEntity<UserLogin> GetById(@PathVariable long idUserLogin){
		return repositoryUserLogin.findById(idUserLogin)
				.map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping
	public ResponseEntity<UserLogin> post (@RequestBody UserLogin userlogin){
		return ResponseEntity.status(HttpStatus.CREATED).body(repositoryUserLogin.save(userlogin));
	}
	
	@PutMapping
	public ResponseEntity<UserLogin> put (@RequestBody UserLogin userlogin){
		return ResponseEntity.status(HttpStatus.OK).body(repositoryUserLogin.save(userlogin));
	}
	
	@DeleteMapping("/{idUserLogin}")
	public void delete(@PathVariable long idUserLogin) {
		repositoryUserLogin.deleteById(idUserLogin);
	}

}
