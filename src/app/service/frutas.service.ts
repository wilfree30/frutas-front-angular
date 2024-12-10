import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fruta } from '../interface/fruta'

@Injectable({
  providedIn: 'root'
})
export class FrutasService {

  private apiUrl = 'http://localhost:5050';

  constructor (private http: HttpClient) {}

  getFrutas(): Observable<Fruta[]> {
 
    // Endpoint de la API
    return this.http.get<Fruta[]>(`${this.apiUrl}/fruitlist`);
 
  }

  getFruta(id: number): Observable<Fruta>{
    return this.http.get<Fruta>(`${this.apiUrl}/fruitlist/${id}`)
  }
}
