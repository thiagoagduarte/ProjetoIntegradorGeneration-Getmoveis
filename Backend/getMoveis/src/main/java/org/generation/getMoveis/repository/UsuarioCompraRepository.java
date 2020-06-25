package org.generation.getMoveis.repository;


import org.generation.getMoveis.model.UsuarioCompra;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioCompraRepository extends JpaRepository<UsuarioCompra, Long>{
	//public List<Usuario_Compra> findAllByCodigoUsuarioCompraContainingIgnoreCase(String codigoUsuarioCompra);

}
