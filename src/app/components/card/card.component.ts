import { Component, Input, OnInit } from '@angular/core';
import { Technique } from 'src/app/models/technique';
import { TechSelectService } from 'src/app/services/tech-select.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() uneTechAAfficher!: Technique;

  constructor(private techS: TechSelectService) { }

  ngOnInit(): void { }

  OnTechSelected(uneTechAAfficher: Technique){
    this.techS.setSelectedTech(uneTechAAfficher);
    console.log(this.uneTechAAfficher)
  }
}