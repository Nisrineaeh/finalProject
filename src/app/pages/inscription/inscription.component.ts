import { Component } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateursService } from 'src/app/services/utilisateurs.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalInscriptionComponent } from 'src/app/components/modal-inscription/modal-inscription.component';


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

  constructor(private utilisateurService: UtilisateursService, public modalService: BsModalService){}

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



    
  }
  
  
  openModal(){
    this.modalService.show(ModalInscriptionComponent, {
      class: 'modal-dialog-centered',
      initialState:{
        //passe de donnée initial à la fenetre modal
      }
    });
  }

}
