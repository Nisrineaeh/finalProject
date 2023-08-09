// // import { HttpClient, HttpParams } from '@angular/common/http';
// // import { Injectable } from '@angular/core';
// // import { Observable, map } from 'rxjs';
// // import { UtilisateursService } from './utilisateurs.service';
// // import {JwtService} from '@nestjs/jwt';
// // import * as bcrypt from 'bcrypt';
// // import {UnauthorizedException} from '@nestjs/common';

// // interface ConnexionResponse{
// //   exists:boolean;
// //   message?:string;
// // // }
// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class AuthServiceService {

// //   constructor(private http: HttpClient) { }

// //   connexion(email: string, mot_de_passe: string): Observable<ConnexionResponse> {
// //     const params = new HttpParams()
// //       .set('email', email)
// //       .set('mot_de_passe', mot_de_passe);

// //     return this.http.get<ConnexionResponse>('http://localhost:8080/api/utilisateurs', { params });
// //   }
// // }
//   // constructor(
//   //   private readonly utilisateursService: UtilisateursService,
//   //   private readonly jwtService: JwtService,
//   // ) { }

//   // async validateUser(email: string, password: string): Promise<any> {
//   //   const user = await this.utilisateursService.findByEmail(email);

//   //   if (user && await bcrypt.compare(password, user.mot_de_passe)) {
//   //     const { mot_de_passe, ...result } = user;
//   //     return result;
//   //   }

//   //   throw new UnauthorizedException('E-mail ou mot de passe incorrect.');
//   // }

//   // async generateToken(user: any): Promise<string> {
//   //   const payload = { sub: user.id };
//   //   return this.jwtService.sign(payload);
//   // }
// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { UtilisateursService } from './utilisateurs.service';  // Assurez-vous de mettre le chemin correct ici
// import { JwtService } from '@nestjs/jwt';
// import * as bcrypt from 'bcrypt';
// import { Observable } from 'rxjs';
// import { Utilisateur } from '../models/utilisateur';

// @Injectable()
// export class AuthServiceService {
//   constructor(
//     private readonly utilisateursService: UtilisateursService,
//     private readonly jwtService: JwtService,
//   ) { }

//   async validateUser(email: string, password: string): Promise<any> {
//     const userObservable: Observable<Utilisateur | null> = this.utilisateursService.findByEmail(email);

//     return userObservable.toPromise().then(async user => {
//       if (user && (await bcrypt.compare(password, user.mot_de_passe))) {
//         const { mot_de_passe, ...result } = user;
//         return result;
//       }

//       throw new UnauthorizedException('E-mail ou mot de passe incorrect.');
//     });
//   }

//   async generateToken(user: any): Promise<string> {
//     const payload = { sub: user.id };
//     return this.jwtService.sign(payload);
//   }
// }