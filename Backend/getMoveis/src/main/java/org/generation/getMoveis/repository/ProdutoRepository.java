package org.generation.getMoveis.repository;

import java.util.List;

import org.generation.getMoveis.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long>{
	public List<Produto> findAllByNomeContainingIgnoreCase(String nome);
	public List<Produto> findAllByCarrinhoContainingIgnoreCase(String carrinho);
	public List<Produto> deleteAllByCarrinhoContainingIgnoreCase(String carrinho);
}

