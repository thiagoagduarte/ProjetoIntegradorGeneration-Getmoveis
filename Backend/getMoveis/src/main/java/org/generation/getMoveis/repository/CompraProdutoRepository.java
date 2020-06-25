package org.generation.getMoveis.repository;

import org.generation.getMoveis.model.CompraProduto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompraProdutoRepository extends JpaRepository<CompraProduto, Long>{
	//public List<Compra_Produto> findAllByCodigoCompraProdutoContainingIgnoreCase(String codigoCompraProduto);
}
