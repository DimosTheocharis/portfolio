import { Injectable } from '@angular/core';
import { ExperienceModel } from '../../Models/experience/experienceModel';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private experienceData: ExperienceModel[] = [
    {
      title: "Software Engineer",
      workPeriod: "November 2022 - March 2024",
      text: "In my role as a Software Engineer in SGA I contribute in the development of informatic systems used by \
             various greek chambers like the 'Professional Chamber of Thessaloniki'. The technlogies that I use are \
             Angular, Nest.js, Typescript, SQL, C#, .NET and more.",
      class: "wrapper leftWrapper",
      arrowClass: "rightArrow",
      imagePath: "assets/images/sga.png"
    },
    {
      title: "Software Engineer",
      workPeriod: "March 2025 - Now",
      text: "I contribute to the maintaining, debugging and development of AUTH's e-university services, such as \
             the digital services for students, teachers, secretaries etc. The technologies that I use are \
             Angular, Typescript, SQL, Postman API, Formio and more.",
      class: "wrapper rightWrapper",
      arrowClass: "leftArrow",
      imagePath: "assets/images/auth.png"
    }
  ]

  constructor() { }

  public getExperience(): ExperienceModel[] {
    return this.experienceData;
  }
}
