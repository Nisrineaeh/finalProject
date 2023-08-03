import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Technique } from '../models/technique';


@Injectable({
  providedIn: 'root'
})
export class TechniqueService {

  constructor(private http: HttpClient) { }

  getTechnique(): Observable<Technique[]>{
    return this.http.get<Technique[]>("http://localhost:3000/techniques")
  }
}
