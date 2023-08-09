import { HttpClient, HttpParams } from '@angular/common/http';
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
    const params = new HttpParams()
      .set('email', email)
      .set('mot_de_passe', mot_de_passe);

    return this.http.get<ConnexionResponse>('http://localhost:8080/api/utilisateurs', { params });
  }
}
