import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {
  private bddUrl = 'http://localhost:8080/utilisateurs';
  
  constructor(private http: HttpClient) { }

  getAllUtilisateurs(): Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(this.bddUrl);
  }

  inscription(utilisateur: Utilisateur): Observable<Utilisateur>{
    return this.http.post<Utilisateur>(this.bddUrl, utilisateur);
  }

  majUtilisateur(id: number, utilisateur: Utilisateur): Observable<Utilisateur>{
    return this.http.patch<Utilisateur>(this.bddUrl, utilisateur);
  }

  suppUtilisateur (id:number): Observable<void>{
    return this.http.delete<void>(this.bddUrl);
  }
}
