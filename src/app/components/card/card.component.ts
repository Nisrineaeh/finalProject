import { Component, Input, OnInit } from '@angular/core';
import { Technique } from 'src/app/models/technique';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() uneTechAAfficher!: Technique;

  constructor() { }

  ngOnInit(): void { }
}