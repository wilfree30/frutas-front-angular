import { Component } from '@angular/core';
import { Fruta } from '../interface/fruta';
import { FrutasService } from '../service/frutas.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms'

@Component({
  selector: 'app-fruta',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './fruta.component.html',
  styleUrl: './fruta.component.scss'
})
export class FrutaComponent {

  fruta: Fruta | null = null;

  frutaIdControl = new FormControl('');

  constructor(private frutasService: FrutasService) {}

/*   ngOnInit(): void {
    this.frutasService.getFruta(this.fruta.id).subscribe((fruta) => {
      this.fruta = fruta;
      alert(JSON.stringify(this.fruta.name))
    })
  } */

  // Getting value 

  getFrutaId() {
    const frutaId = Number(this.frutaIdControl.value); 
    if(frutaId && !isNaN(frutaId)) {
      this.frutasService.getFruta(frutaId).subscribe({
        next: (fruta) => {
          this.fruta = fruta;
          alert(`Nombre de la fruta: ${this.fruta.name}`)
        },
        error: (error) => {
          console.error('Error al buscar fruta:', error)
          alert('No se encontró fruta');
        }
      });
    } else {
      alert('Por favor, ingrese un ID Válido');
    }
  }


}
