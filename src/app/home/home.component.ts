import { Component } from '@angular/core';
import { Fruta } from '../interface/fruta';
import { FrutasService } from '../service/frutas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  titulo: string = '';
  
  ngOnInit(): void {
    this.titulo = 'Api de frutas jeje'
  }
  
}