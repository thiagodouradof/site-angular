// produto.service.ts
import { Injectable } from '@angular/core';
import { Produto } from './models/produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  produtos: Produto[] = [];

  constructor() {
    const produtosSalvos = localStorage.getItem('produtos');
    if (produtosSalvos) {
      this.produtos = JSON.parse(produtosSalvos);
    } else {
      // Caso seja a primeira vez e o localStorage esteja vazio, salva os produtos padrão
      this.produtos = [
        { id: 1, nome: 'Camiseta Pinguim', preco: 50.0, descricao: 'Camisa Nova', photo: 'camiseta-1.jpg' },
        { id: 2, nome: 'Camiseta 2', preco: 50.0, descricao: 'Camisa Nova', photo: 'camiseta-2.jpg' },
        { id: 3, nome: 'Camiseta 3', preco: 100.0, descricao: 'Camisa Nova', photo: 'camiseta-3.jpg' },
      ];
      this.atualizarLocalStorage();
    }
  }

  private atualizarLocalStorage() {
    localStorage.setItem('produtos', JSON.stringify(this.produtos));
  }

  getAll() {
    return this.produtos;
  }

  find(id: number) {
    return this.produtos.find((produto) => produto.id === id) as Produto;
  }

  adicionarProduto(produto: Produto) {
    produto.id = this.produtos.length ? Math.max(...this.produtos.map(p => p.id)) + 1 : 1;
    this.produtos.push(produto);
    this.atualizarLocalStorage();
  }

  updateProduto(updatedProduto: Produto): void {
    const index = this.produtos.findIndex(produto => produto.id === updatedProduto.id);
    if (index !== -1) {
      this.produtos[index] = updatedProduto;
      this.atualizarLocalStorage();
    }
  }

  delete(id: number): void {
    this.produtos = this.produtos.filter(produto => produto.id !== id);
    this.atualizarLocalStorage();
  }
}
