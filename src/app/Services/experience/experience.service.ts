import { Injectable } from '@angular/core';
import { ExperienceModel } from '../../Models/experience/experienceModel';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private experienceData: ExperienceModel[] = [
    {
      title: "Software Engineer",
      workPeriod: "November 2022 - till now",
      text: "In my role as a Software Engineer in SGA i contribute in the development of informatic systems used by \
             various greek chambers like the 'Professional Chamber of Thessaloniki'. The technlogies that i use are \
             Angular, Nest.js, Typescript, SQL and more.",
      class: "wrapper leftWrapper",
      arrowClass: "rightArrow",
      imagePath: "assets/images/sga.png"
    }
  ]

  constructor() { }

  public getExperience(): ExperienceModel[] {
    return this.experienceData;
  }
}
