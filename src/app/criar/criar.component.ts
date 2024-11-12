import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule para usar *ngFor
import { FormsModule } from '@angular/forms';  // Importa FormsModule para usar ngModel
import { Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css'],
  standalone: true,  // Marca o componente como standalone
  imports: [CommonModule, FormsModule]  // Adiciona CommonModule e FormsModule para usar ngModel e *ngFor
})
export class CriarComponent {
  novoProduto: Produto = {
    id: 0,
    nome: '',
    descricao: '',
    preco: 0,
    photo: '' // Inicialmente sem imagem
  };

  imagens = [
    'camiseta-1.jpg',
    'camiseta-2.jpg',
    'camiseta-3.jpg',
    'camiseta-4.jpg',
    'camiseta-5.jpg',
    'camiseta-6.jpg',
    'camiseta-7.jpg',
    'camiseta-8.jpg',
    'camiseta-9.jpg'
  ];

  constructor(private produtoService: ProdutoService, private router: Router) {}

  salvarProduto() {
    // Chama o serviço para salvar o produto e redireciona para a página principal
    this.produtoService.adicionarProduto(this.novoProduto);
    this.router.navigate(['/']);
  }

  selecionarImagem(imagem: string) {
    // Atribui a imagem selecionada ao modelo do produto
    this.novoProduto.photo = imagem;
  }
}
