import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { House } from '../models/house';
import { Produto } from '../models/produto';
import { HomeCardComponent } from "../home-card/home-card.component";
import { HouseService } from '../house.service';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, HomeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  houses!: House[];
  produtos!: Produto[];
  houseService = inject(HouseService);
  ProdutoService = inject(ProdutoService);

  ngOnInit() {
    this.houses = this.houseService.getAll();
    this.produtos = this.ProdutoService.getAll();
  }

}
