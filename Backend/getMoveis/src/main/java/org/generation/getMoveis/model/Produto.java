package org.generation.getMoveis.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name= "TB_PRODUTO")
public class Produto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long codigoDoProduto;
	
	@NotNull
	@Size(min =2, max = 100)
	private String nome;

	@Size(min =2, max = 300)
	private String modelo;
	
	@Size(min =2, max = 100)
	private String cor;
	
	private float valor;
	
	private int qtdEstoque;
	
	@Size(min=0, max=255)
	private String descricaoProduto;
	
	@Size(min =2, max = 100)
	private String categoria;
	
	private String imagem;
	
	private String carrinho;

	public long getCodigoDoProduto() {
		return codigoDoProduto;
	}

	public void setCodigoDoProduto(long codigoDoProduto) {
		this.codigoDoProduto = codigoDoProduto;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public String getCor() {
		return cor;
	}

	public void setCor(String cor) {
		this.cor = cor;
	}

	public float getValor() {
		return valor;
	}

	public void setValor(float valor) {
		this.valor = valor;
	}

	public int getQtdEstoque() {
		return qtdEstoque;
	}

	public void setQtdEstoque(int qtdEstoque) {
		this.qtdEstoque = qtdEstoque;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}

	public String getDescricaoProduto() {
		return descricaoProduto;
	}

	public void setDescricaoProduto(String descricaoProduto) {
		this.descricaoProduto = descricaoProduto;
	}

	public String getCarrinho() {
		return carrinho;
	}

	public void setCarrinho(String carrinho) {
		this.carrinho = carrinho;
	}
	
	
		
}
