import { Component } from '@angular/core';
import { Technique } from 'src/app/models/technique';
import { TechSelectService } from 'src/app/services/tech-select.service';

@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrls: ['./page-profil.component.css']
})
export class PageProfilComponent {
  matech: Technique[]=[];

  constructor(private techSS: TechSelectService){
    this.matech = this.techSS.getSelectedTech();
  }

}
