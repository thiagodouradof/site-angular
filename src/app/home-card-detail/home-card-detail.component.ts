import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { House } from '../models/house';
import { Produto } from '../models/produto';
import { ActivatedRoute } from '@angular/router';
import { HouseService } from '../house.service';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-home-card-detail',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home-card-detail.component.html',
  styleUrl: './home-card-detail.component.css'
})
export class HomeCardDetailComponent {

  applyForm!: FormGroup;

  housingLocation!: House;

  produtoLocation!: Produto;

  id!: number;

  houseService = inject(HouseService);
  produtoService = inject(ProdutoService);

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.housingLocation = this.houseService.find(this.id);
    this.produtoLocation = this.produtoService.find(this.id);
    this.applyForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('')
    });
  }

  submitApplication() {
    alert(JSON.stringify(this.applyForm.value));
  }

  clearForm() {
    // this.applyForm.reset();
    this.applyForm.setValue({
      firstName: '',
      lastName: '',
      email: ''
    });
  }
}
