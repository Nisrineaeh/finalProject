import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chronometre',
  templateUrl: './chronometre.component.html',
  styleUrls: ['./chronometre.component.css']
})
export class ChronometreComponent{
  // timer: any;
  // seconds: number = 0;
  // formattedTime: string = '';

  constructor() { }

  timer: any;
  isRunning = false;
  elapsedTime = 0; // en secondes

  startTimer() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.timer = setInterval(() => {
        this.elapsedTime++;
      }, 1000);
    }
  }

  stopTimer() {
    if (this.isRunning) {
      clearInterval(this.timer);
      this.isRunning = false;
    }
  }

  resetTimer() {
    this.elapsedTime = 0;
    this.isRunning = false;
    clearInterval(this.timer);
  }

  getFormattedTime(): string {
    const hours = Math.floor(this.elapsedTime / 3600);
    const minutes = Math.floor((this.elapsedTime % 3600) / 60);
    const seconds = this.elapsedTime % 60;

    return `${this.twoDigits(hours)}:${this.twoDigits(minutes)}:${this.twoDigits(seconds)}`;
  }

  twoDigits(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
  // ngOnInit(): void {
  //   this.timer = setInterval(() => {
  //     this.seconds++;
  //     this.formattedTime = this.formatTime(this.seconds);
  //   }, 1000);
  // }

  // ngOnDestroy(): void {
  //   clearInterval(this.timer);
  // }

  // private formatTime(totalSeconds: number): string {
  //   const hours = Math.floor(totalSeconds / 3600);
  //   const minutes = Math.floor((totalSeconds % 3600) / 60);
  //   const seconds = totalSeconds % 60;
  //   return `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}`;
  // }

  // private padZero(value: number): string {
  //   return value.toString().padStart(2, '0');
  // }

  // @Output() startClicked = new EventEmitter<void>();
  // @Output() stopClicked = new EventEmitter<void>();
  // @Output() resetClicked = new EventEmitter<void>();
 

  // onStartClick(): void{
  //   this.startClicked.emit();
  // }

  // onStopClick():void{
  //   this.stopClicked.emit();
  // }

  // onResetClick(): void{
  //   this.stopClicked.emit();
  //   this.seconds = 0;
  //   this.formattedTime = this.formatTime(this.seconds);
  //   this.resetClicked.emit();
  // }

  
}
