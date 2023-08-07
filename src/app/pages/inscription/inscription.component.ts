import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateursService } from 'src/app/services/utilisateurs.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalInscriptionComponent } from 'src/app/components/modal-inscription/modal-inscription.component';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit{

  inscriptionForm!: FormGroup;
 
  utilisateur: Utilisateur = {
    nom: '',
    prenom: '',
    username: '',
    email: '',
    mot_de_passe: '',
    date: new Date(),
  };

  constructor(private utilisateurService: UtilisateursService, public modalService: BsModalService){}
  ngOnInit(): void {
    this.inscriptionForm = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mot_de_passe: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }
  

  onSubmit() {
  
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
      });
   
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
