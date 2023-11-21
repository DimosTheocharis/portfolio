import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() progress!: number;

  public totalStages: number = 5;
  public fakeArray: Array<number> = Array(this.totalStages); //used to loop through it in html
  public currentProgressString!: string;

  constructor() { }

  ngOnInit(): void {
    this.currentProgressString = `${this.progress}%`;
  }

  /**
   * Every time the value of the input 'progress' changes, this function ensures the continuation of the animation by
   * changing the percentage appeared the frontend, and the width of the progress bar
   * @param changes 
   */
  ngOnChanges(changes: SimpleChanges): void {
    this.currentProgressString = `${this.progress}%`;
  }
}
