import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilisateursService } from 'src/app/services/utilisateurs.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  connexionForm!: FormGroup;

  constructor(private utilisateurService: UtilisateursService){}
  ngOnInit(): void {
    this.connexionForm=new FormGroup({
       email: new FormControl('', [Validators.required, Validators.email]),
       mdp: new FormControl('', [Validators.required])
     });
  }
  


  async onSubmit() {
    if (this.connexionForm.valid) {
      const email = this.connexionForm.value.email;
      const motDePasse = this.connexionForm.value.mdp;

    //   try {
    //     const estConnecte = await this.utilisateurService.verifierConnexion(email, motDePasse);
    //     if (estConnecte) {
    //       alert('Vous êtes connecté !');
    //     } else {
    //       alert('Informations de connexion incorrectes. Veuillez réessayer !');
    //     }
    //   } catch (error) {
    //     console.error('Une erreur est survenue lors de la vérification de la connexion :', error);
    //     alert('Une erreur est survenue lors de la vérification de la connexion. Veuillez réessayer plus tard.');
    //   }
    // }
  }
  }








}
