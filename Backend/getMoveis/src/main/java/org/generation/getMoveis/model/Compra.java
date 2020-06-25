package org.generation.getMoveis.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name= "TB_COMPRA")
public class Compra {
	
	@Column(name = "codigoDaCompra")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long codigoDaCompra;
	
	@NotNull
	private float valorTotal;
	
	@NotNull
	private int tiposDeProdutos;

	public long getCodigoDaCompra() {
		return codigoDaCompra;
	}

	public void setCodigoDaCompra(long codigoDaCompra) {
		this.codigoDaCompra = codigoDaCompra;
	}

	public float getValorTotal() {
		return valorTotal;
	}

	public void setValorTotal(float valorTotal) {
		this.valorTotal = valorTotal;
	}

	public int getTiposDeProdutos() {
		return tiposDeProdutos;
	}

	public void setTiposDeProdutos(int tiposDeProdutos) {
		this.tiposDeProdutos = tiposDeProdutos;
	}
	
	
	
}
