import { Component, ElementRef, ViewChild } from '@angular/core';
import { Technique } from 'src/app/models/technique';
import { TechniqueService } from 'src/app/services/technique.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent {
  techniques!: Technique[];
  message: string[] = [];
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

  lieuxOptions: string[] = ['','Domicile', 'Travail', 'Extérieur'];
  nombreOptions: string[] = ['','Seul', 'En groupe'];

  @ViewChild('messageInput', {static: true}) messageInput!: ElementRef;
  selectedTechnique: string = '';
  selectedLieu: string = '';
  selectedNombre: string = '';

  addMessage(techniqueValue: string, lieuValue: string, nombreValue: string):void{
    const message= this.messageInput.nativeElement.value
    if(message.trim() !== ''){
      this.message.push(message);
      this.messageInput.nativeElement.value='';
    console.log(this.messageInput);

      this.selectedTechnique = techniqueValue;
      this.selectedLieu = lieuValue;
      this.selectedNombre = nombreValue;
    }
    

  }

  getTechName(techniqueId:number):string {
    const selectedTechnique = this.techniques.find((technique) => technique.id === techniqueId)
    return selectedTechnique ? selectedTechnique.name :'';
  }


}
