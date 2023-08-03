import { Injectable } from '@angular/core';
import { Technique } from '../models/technique';

@Injectable({
  providedIn: 'root'
})
export class TechSelectService {
  private selectedTech: Technique[]=[];

  getSelectedTech(): Technique[] {
    return this.selectedTech;
  }
  setSelectedTech(tech: Technique){
    this.selectedTech.push(tech);
  }
}
