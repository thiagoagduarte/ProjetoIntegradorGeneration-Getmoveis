package org.generation.getMoveis.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class UsuarioCompra {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="idUsuario", referencedColumnName="idUsuario")
	private Usuario usuario;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="codigoDaCompra", referencedColumnName="codigoDaCompra")	
	private Compra compra;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public Compra getCompra() {
		return compra;
	}

	public void setCompra(Compra compra) {
		this.compra = compra;
	}
		
	

	
}
