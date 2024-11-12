// home-card-detail.component.ts
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Produto } from '../models/produto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-card-detail',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './home-card-detail.component.html',
  styleUrl: './home-card-detail.component.css'
})
export class HomeCardDetailComponent {
  applyForm!: FormGroup;
  produtoLocation!: Produto;
  id!: number;
  isEditing = false;

  produtoService = inject(ProdutoService);
  router = inject(Router);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.produtoLocation = this.produtoService.find(this.id);

    this.applyForm = new FormGroup({
      nome: new FormControl(this.produtoLocation.nome, Validators.required),
      descricao: new FormControl(this.produtoLocation.descricao, Validators.required),
      preco: new FormControl(this.produtoLocation.preco, [Validators.required, Validators.min(0)]),
      photo: new FormControl(this.produtoLocation.photo, Validators.required)
    });
  }

  comprar() {
    alert('Produto comprado com sucesso!');
  }

  editar() {
    this.isEditing = true;
  }

  deleteProduto() {
    if (confirm('Deseja realmente excluir este produto?')) {
      this.produtoService.delete(this.id);
      alert('Produto excluído com sucesso!');
      this.router.navigate(['/']);
    }
  }

  cancelar() {
    this.isEditing = false;
    this.applyForm.reset({
      nome: this.produtoLocation.nome,
      descricao: this.produtoLocation.descricao,
      preco: this.produtoLocation.preco,
      photo: this.produtoLocation.photo
    });
  }

  submitApplication() {
    if (this.applyForm.valid) {
      const updatedProduto: Produto = {
        id: this.produtoLocation.id,
        nome: this.applyForm.value.nome,
        descricao: this.applyForm.value.descricao,
        preco: this.applyForm.value.preco,
        photo: this.applyForm.value.photo
      };

      this.produtoService.updateProduto(updatedProduto);
      alert('Produto atualizado com sucesso!');
      this.isEditing = false;
      this.router.navigate(['/']);
    } else {
      alert('Por favor, preencha todos os campos corretamente!');
    }
  }
}
