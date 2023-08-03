import { Component } from '@angular/core';
import { Technique } from 'src/app/models/technique';
import { TechniqueService } from 'src/app/services/technique.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent {
  techniques!: Technique[];
  message: string = "";
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
