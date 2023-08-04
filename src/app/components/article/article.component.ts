import { Component, Input } from '@angular/core';
import { Technique } from 'src/app/models/technique';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  @Input() uneTechAAfficher!: Technique;

}
