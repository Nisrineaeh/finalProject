import { Component, Input, OnInit } from '@angular/core';
import { Technique } from 'src/app/models/technique';
import { TechSelectService } from 'src/app/services/tech-select.service';

@Component({
  selector: 'app-meditation-detail',
  templateUrl: './meditation-detail.component.html',
  styleUrls: ['./meditation-detail.component.css']
})
export class MeditationDetailComponent{
  @Input() uneTechAAfficher!: Technique;


}
