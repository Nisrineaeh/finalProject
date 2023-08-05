import { Component, Input, OnInit } from '@angular/core';
import { Technique } from 'src/app/models/technique';
import { TechniqueService } from 'src/app/services/technique.service';

@Component({
  selector: 'app-btn-inscription',
  templateUrl: './btn-inscription.component.html',
  styleUrls: ['./btn-inscription.component.css']
})
export class BtnInscriptionComponent{

  techniques!: Technique[];

  constructor(private techniquesService: TechniqueService) { }

  ngOnInit() {
    // Chargez les techniques de méditation lors de l'initialisation du composant
    this.loadMeditationTechniques();
  }

  loadMeditationTechniques() {

    this.techniquesService.getTechnique().subscribe((technique) => {
      this.techniques = technique;
      console.log(this.techniques)
    })
  }

  
}
