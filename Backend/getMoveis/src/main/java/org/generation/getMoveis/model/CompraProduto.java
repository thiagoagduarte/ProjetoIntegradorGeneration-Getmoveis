package org.generation.getMoveis.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class CompraProduto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="codigoDaCompra", referencedColumnName="codigoDaCompra")	
	private Compra compra;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="codigoDoProduto", referencedColumnName="codigoDoProduto")	
	private Produto produto;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Compra getCompra() {
		return compra;
	}

	public void setCompra(Compra compra) {
		this.compra = compra;
	}

	public Produto getProduto() {
		return produto;
	}

	public void setProduto(Produto produto) {
		this.produto = produto;
	}
	
	

	
}
