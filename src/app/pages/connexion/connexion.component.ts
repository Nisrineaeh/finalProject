import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';



@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  connexionForm!: FormGroup;

  constructor(private authService: AuthServiceService){}
  ngOnInit(): void {
    this.initialForm();
  }

  private initialForm(): void{
    this.connexionForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      mdp: new FormControl('', [Validators.required])
    });
  }
  


  onSubmit() {
    if (this.connexionForm.valid) {
      const email = this.connexionForm.value.email;
      const motDePasse = this.connexionForm.value.mdp;
      
      this.authService.connexion(email, motDePasse)
        .subscribe({
          next: success => {
            if (success) {
              alert('Vous êtes connecté !');
              console.log('connexion ok');
              // Ici, vous pouvez également rediriger l'utilisateur vers une autre page, si nécessaire.
            } else {
              alert('E-mail ou mot de passe incorrect.');
              console.log('connection ko :( ')
            }
          },
          error: error => {
            console.error('Une erreur est survenue lors de la vérification de la connexion :', error);
            alert('Une erreur est survenue lors de la vérification de la connexion. Veuillez réessayer plus tard.');
          }
        });
    }
  }
  }
