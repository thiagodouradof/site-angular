import { Component, inject, OnInit } from '@angular/core';
import { Produto } from '../models/produto';
import { HomeCardComponent } from '../home-card/home-card.component';
import { ProdutoService } from '../produto.service';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';  // Importando apenas o NgFor
import { FormsModule } from '@angular/forms';  // Importando o FormsModule corretamente

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, RouterLink, FormsModule, HomeCardComponent],  // Agora importando FormsModule corretamente
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchTerm: string = '';  // Armazenando o termo de pesquisa
  produtos: Produto[] = [];  // Lista de todos os produtos
  produtosFiltrados: Produto[] = [];  // Lista dos produtos filtrados

  produtoService = inject(ProdutoService);

  ngOnInit() {
    // Carrega todos os produtos do serviço
    this.produtos = this.produtoService.getAll();
    this.produtosFiltrados = [...this.produtos];  // Inicializa os produtos filtrados com todos os produtos
  }

  buscarProduto() {
    // Filtra os produtos com base no nome (pelo menos 3 letras)
    if (this.searchTerm.length >= 3) {
      this.produtosFiltrados = this.produtos.filter(produto =>
        produto.nome.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.produtosFiltrados = [...this.produtos];  // Caso contrário, exibe todos os produtos
    }
  }
}
