import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap, interval, take, timer } from 'rxjs';
import { Technique } from 'src/app/models/technique';
import { TechSelectService } from 'src/app/services/tech-select.service';
import { TechniqueService } from 'src/app/services/technique.service';

@Component({
  selector: 'app-meditation-detail',
  templateUrl: './meditation-detail.component.html',
  styleUrls: ['./meditation-detail.component.css']
})
export class MeditationDetailComponent implements OnInit{
  @Input() meditations!: Technique;
  keywords: string[] = [];
  displayedWords: string[]=[]

  constructor(
    private route: ActivatedRoute,
    private meditationService: TechniqueService,
  ) { }

  ngOnInit(): void {
    const meditationId = Number(this.route.snapshot.paramMap.get('id'));
    if (meditationId !== null){
      this.meditationService.getMeditationById(meditationId).subscribe((donnee)=>{
        this.meditations= donnee;
        this.keywords = this.meditations.mot_clefs;
        this.displayWords();
      })
    }
  }

  isChronoRunning: boolean = false;

  onStartClicked(): void {
    this.isChronoRunning = true;
  }

  onStopClicked(): void {
    this.isChronoRunning = false;
  }

  onResetClicked(): void {
    this.isChronoRunning = false;
    // Réinitialiser les valeurs du chronomètre si nécessaire
  }

  displayWords():void{
    interval(10000)
    .pipe(
      take(this.meditations.mot_clefs.length) // Display 1 à 1
    )
      .subscribe(index => {
        this.displayedWords.push(this.meditations.mot_clefs[index]);
      });
  }

}



