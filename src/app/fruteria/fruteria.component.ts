import { Component } from '@angular/core';
import { FrutasService } from '../service/frutas.service';
import { Fruta } from '../interface/fruta';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fruteria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fruteria.component.html',
  styleUrl: './fruteria.component.scss'
})
export class FruteriaComponent {


  constructor(private frutasService: FrutasService) {}

  frutas: Fruta[] = [];

  ngOnInit(): void {
    this.frutasService.getFrutas().subscribe((frutas) => {
      this.frutas = frutas;
      console.log(frutas)
    })
  }
}
