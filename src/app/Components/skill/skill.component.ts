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

  public value: number = 0;
  private maxStroke: number = 312;
  private stepDecrement!: number;
  private timeStep!: number;
  private step!: number;
  private circle!: any;
  private windowHeight: number = window.innerHeight;
  private enteredViewport: boolean = false;

  ngOnInit() {
    this.circle = document.getElementById(this.skill.id)?.getElementsByTagName("circle")[0] as unknown as HTMLElement;
    this.step = this.maxStroke;
    this.timeStep = Math.round(this.duration / this.skill.percentage);
    this.stepDecrement = this.maxStroke / 100;
  }

  @HostListener("document:scroll", ["$event"])
  public onViewportScroll() {
    //here we want to add the animation classes when the upper part of the timeline element enters the viewport
    const circleTop = this.circle!.getBoundingClientRect().top;

    if (circleTop <= this.windowHeight && !this.enteredViewport) {
      this.enteredViewport = true;

      setInterval(() => {
        if (this.value < this.skill.percentage) {
          this.value += 1;
          this.step -= this.stepDecrement;
          this.circle!.style.strokeDashoffset = this.step.toString();
        } else {
          clearInterval(undefined)
        }
      }, this.timeStep)
    }
  }

}
