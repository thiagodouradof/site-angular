import { Component, Input } from '@angular/core';
import { Produto } from '../models/produto';  // Agora importa o modelo Produto
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [RouterLink, MatButtonModule, CommonModule],
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent {
  @Input() produto!: Produto;  // Agora o componente recebe o produto, não a casa
}
