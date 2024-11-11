import { Injectable } from '@angular/core';
import { Produto } from './models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  constructor() { }

  produtos: Produto[] = [{
    id: 1,
    nome: 'Camiseta Pinguim',
    preco: 50.00,
    descricao: 'IL',
    photo: "../../assets/camiseta-1"
  },
  {
    id: 2,
    nome: 'A113 Transitional Housing',
    preco: 50.00,
    descricao: 'CA',
    photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`
  },
  {
    id: 3,
    nome: 'Warm Beds Housing Support',
    preco: 100.00,
    descricao: 'AK',
    photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`
  },
  {
    id: 4,
    nome: 'Homesteady Housing',
    preco: 100.00,
    descricao: 'IL',
    photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`
  },
  {
    id: 5,
    nome: 'Happy Homes Group',
    preco: 50.00,
    descricao: 'IN',
    photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`
  },
  {
    id: 6,
    nome: 'Hopeful Apartment Group',
    preco: 50.00,
    descricao: 'CA',
    photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`
  },
];

  find(id: number) {
    return this.produtos.find(produto => produto.id == id) as Produto;
  }

  getAll() {
    return this.produtos;
  }
}
