import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

interface ConnexionResponse{
  exists:boolean;
  message?:string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  connexion(email: string, mot_de_passe: string): Observable<ConnexionResponse> {
    return this.http.post<ConnexionResponse>('http://localhost:8080/api/utilisateurs/connexion', { email, mot_de_passe });
  }
}
