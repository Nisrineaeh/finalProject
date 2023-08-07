import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Technique } from '../models/technique';


@Injectable({
  providedIn: 'root'
})
export class TechniqueService {
  private apiUrl ='http://localhost:3000/techniques';

  constructor(private http: HttpClient) { }

  getTechnique(): Observable<Technique[]>{
    return this.http.get<Technique[]>(this.apiUrl)
  }

  getMeditationById(id: number): Observable<Technique> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }


}
