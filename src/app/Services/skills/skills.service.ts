import { Injectable } from '@angular/core';
import { SkillModel } from 'src/app/Models/skill/skillModel';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skillsData: SkillModel[] = [
    {
      name: "Python",
      percentage: 80,
      text: "Built 6 personal projects and 2 university projects for the subject: 'Arithmetic Analysis' implementing \
              root finding and function approaching algorithms.",
      id: "python"
    },
    {
      name: "Javascript",
      percentage: 85,
      text: "Built 3 personal projects and took course about intermediate concepts like asychronous programming, \
             promises etc, from Codecademy.",
      id: "javascript"
    },
    {
      name: "Html",
      percentage: 75,
      text: "With html i have built 3 personal projects and 2 portfolio-like websites.",
      id: "html"
    },
    {
      name: "Css",
      percentage: 70,
      text: "Built 3 personal projects in which i used flex and grid layouts, animations etc and \
             tried to provide responsive layouts for both pc and smartphone screens.",
      id: "css"
    },
    {
      name: "React",
      percentage: 60,
      text: "Built 2 personal projects using component-based architecture, routers, drag and drop system \
              and more.",
      id: "react",
    },
    {
      name: "Angular",
      percentage: 50,
      text: "One of the main technologies i use in my current job as SW in SGA. I create custom components, with props \
             coming from parent-components, and use directives to achieve the desired result.",
      id: "angular"
    },
    {
      name: "Nest.js",
      percentage: 55,
      text: "One of the main technologies i use in my current job as SW in SGA. I create, debug and extend controllers and \
             services. I use entities to describe data from database and repositories (TypeORM) to easily get access and \
             manipulate them.",
      id: "nestjs"
    },
    {
      name: "Typescript",
      percentage: 80,
      text: "Built 1 personal project and also this website with typescript. In job, i create and use enums and custom types to\
             efficiently describe our data.",
      id: "typescript"
    }
  ]
  constructor() { }

  public getSkillsData(): SkillModel[] {
    return this.skillsData;
  }
}
