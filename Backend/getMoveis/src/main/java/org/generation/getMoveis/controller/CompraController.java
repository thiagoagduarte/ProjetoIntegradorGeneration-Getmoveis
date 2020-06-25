package org.generation.getMoveis.controller;

import java.util.List;

import org.generation.getMoveis.model.Compra;
import org.generation.getMoveis.repository.CompraRepository;
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
@RequestMapping("/compra")
@CrossOrigin("*")
public class CompraController {
	
	@Autowired
	private CompraRepository repositoryCompra;
	
	@GetMapping
	public ResponseEntity<List<Compra>> GetAll(){
		return ResponseEntity.ok(repositoryCompra.findAll());
	}
	
	@GetMapping("/{codigoDaCompra}")
	public ResponseEntity<Compra> GetById(@PathVariable long codigoDaCompra){
		return repositoryCompra.findById(codigoDaCompra)
				.map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping
	public ResponseEntity<Compra> post (@RequestBody Compra compra){
		return ResponseEntity.status(HttpStatus.CREATED).body(repositoryCompra.save(compra));
	}
	
	@PutMapping
	public ResponseEntity<Compra> put (@RequestBody Compra compra){
		return ResponseEntity.status(HttpStatus.OK).body(repositoryCompra.save(compra));
	}
	
	@DeleteMapping("/{codigoDaCompra}")
	public void delete(@PathVariable long codigoDaCompra) {
		repositoryCompra.deleteById(codigoDaCompra);
	}

}
