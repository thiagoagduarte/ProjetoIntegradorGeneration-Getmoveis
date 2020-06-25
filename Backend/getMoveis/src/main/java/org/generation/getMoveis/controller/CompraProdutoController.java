package org.generation.getMoveis.controller;

import java.util.List;

import org.generation.getMoveis.model.CompraProduto;
import org.generation.getMoveis.repository.CompraProdutoRepository;
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
@RequestMapping("/compraproduto")
@CrossOrigin("*")
public class CompraProdutoController {
	
	@Autowired
	private CompraProdutoRepository repositoryCompraProduto;
	
	@GetMapping
	public ResponseEntity<List<CompraProduto>> GetAll(){
		return ResponseEntity.ok(repositoryCompraProduto.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<CompraProduto> GetById(@PathVariable long id){
		return repositoryCompraProduto.findById(id)
				.map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}
	

	@PostMapping
	public ResponseEntity<CompraProduto> post (@RequestBody CompraProduto compraProduto){
		return ResponseEntity.status(HttpStatus.CREATED).body(repositoryCompraProduto.save(compraProduto));
	}
	
	@PutMapping
	public ResponseEntity<CompraProduto> put (@RequestBody CompraProduto compraProduto){
	return ResponseEntity.status(HttpStatus.OK).body(repositoryCompraProduto.save(compraProduto));
	}
	
	@DeleteMapping("/{codigoCompraProduto}")
	public void delete(@PathVariable long codigoCompraProduto) {
		repositoryCompraProduto.deleteById(codigoCompraProduto);
	}

}
