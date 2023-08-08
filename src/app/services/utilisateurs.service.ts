import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';

import * as bcrypt from 'bcrypt';



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

  // async verifierConnexion(email: string, motDePasse: string): Promise<boolean> {
  //   // Récupérer l'utilisateur par email depuis l'API
  //   const utilisateur = await this.http.get<Utilisateur>(`${this.bddUrl}?email=${email}`).toPromise();

  //   if (utilisateur) {
  //     // Comparer le mot de passe fourni avec le mot de passe haché dans la base de données
  //     const match = await bcrypt.compare(motDePasse, utilisateur.mot_de_passe);
  //     return match;
  //   }

  //   return false; // Aucun utilisateur trouvé
  // }

  
}
