import { Component } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateursService } from 'src/app/services/utilisateurs.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  utilisateur: Utilisateur = {
    nom: '',
    prenom: '',
    username: '',
    email: '',
    mot_de_passe: '',
    date: new Date(),
  };

  constructor(private utilisateurService: UtilisateursService){}

  onSubmit(){
    this.utilisateurService.inscription(this.utilisateur).subscribe({
      next: (newUtilisateur: Utilisateur) => {
        console.log('Utilisateur enregistré avec succès :', newUtilisateur);
      },
      error: (error) => {
        console.error('Erreur lors de l\'inscription :', error);
      },
      complete: () => {
        // Code à exécuter lorsque l'Observable est terminé (optionnel)
      },

    })
    alert('Ca fonctionne !');
  }


}
