import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  @Input() id: string = "";
  @Input() items: any[] = [];
  private windowHeight: number = window.innerHeight;
  private enteredViewport: boolean = false;
  private wrapperChildren!: HTMLCollection;
  private timeline: any; //the element with class timeline itself

  ngOnInit() {
    this.timeline = document.getElementById(this.id)?.children[0];
  }

  @HostListener("document:scroll", ["$event"])
  public onViewportScroll() {
    //here we want to add the animation classes when the upper part of the timeline element enters the viewport
    const timelineTop = this.timeline!.getBoundingClientRect().top;

    if (timelineTop <= this.windowHeight - 100 && !this.enteredViewport) {
      this.enteredViewport = true;

      this.wrapperChildren = this.timeline!.children; //get the children of the timeline so as to add the animation class: wrapperAnimation

      this.timeline!.classList.add("timelineAnimation");
      for (let i = 0; i < this.wrapperChildren.length; i++) {
        this.wrapperChildren[i].classList.add("wrapperAnimation");
      }
    }
  }
}
