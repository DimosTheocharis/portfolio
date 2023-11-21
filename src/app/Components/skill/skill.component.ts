import { Component, Input, HostListener } from '@angular/core';
import { SkillModel } from 'src/app/Models/skill/skillModel';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  @Input() skill!: SkillModel;
  @Input() duration!: number;

  public currentValue: number = 0; // the current value of the progress bar animation
  private timeStep!: number; // the amount of milliseconds that should pass between 2 consecutive steps of the animation
  private progressBar!: HTMLElement;

  private windowHeight: number = window.innerHeight;
  private enteredViewport: boolean = false;

  ngOnInit() {
    this.progressBar = document.getElementById(this.skill.id)?.getElementsByTagName("app-progress-bar")[0] as unknown as HTMLElement;
    this.timeStep = Math.round(this.duration / this.skill.percentage);
  }

  @HostListener("document:scroll", ["$event"])
  public onViewportScroll() {
    //here we want to add the animation classes when the upper part of the progress-bar element enters the viewport
    const progressBarTop = this.progressBar!.getBoundingClientRect().top + this.progressBar.clientHeight;

    if (progressBarTop <= this.windowHeight && !this.enteredViewport) {
      this.enteredViewport = true;

      const intervalID = setInterval(() => {
        if (this.currentValue < this.skill.percentage) {
          this.currentValue += 1;
        } else {
          clearInterval(intervalID)
        }
      }, this.timeStep)
    }
  }

}
