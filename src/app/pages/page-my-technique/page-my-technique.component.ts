import { Component, OnInit } from '@angular/core';
import { Technique } from 'src/app/models/technique';
import { TechniqueService } from 'src/app/services/technique.service';

@Component({
  selector: 'app-page-my-technique',
  templateUrl: './page-my-technique.component.html',
  styleUrls: ['./page-my-technique.component.css']
})
export class PageMyTechniqueComponent implements OnInit {
  techniqueToDisplay: Technique[] = [];

  constructor(private techService : TechniqueService){}

  ngOnInit(): void {
    this.techService.getTechnique().subscribe((techniques)=> {
      this.techniqueToDisplay = techniques;
      console.log(this.techniqueToDisplay);
    })
  }

}
