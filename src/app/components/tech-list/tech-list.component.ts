import { Component, Input, OnInit } from '@angular/core';
import { Technique } from 'src/app/models/technique';

@Component({
  selector: 'app-tech-list',
  templateUrl: './tech-list.component.html',
  styleUrls: ['./tech-list.component.css']
})
export class TechListComponent implements OnInit {
  @Input() techniqueRecupDeMyTech!: Technique[];

  constructor(){}

  ngOnInit(): void {
    
  }

}
