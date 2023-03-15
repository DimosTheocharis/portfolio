import { Injectable } from '@angular/core';
import { SkillModel } from 'src/app/Models/skill/skillModel';


// With python i have built 6 personal projects and did 2 university projects for the subject: \
//               'Arithmetic Analysis' where we had to write algorithms for root-approaching such as Newton-Raphson, \
//               Bisection and Secant Method. Also we had to write algorithms that approach the solution of linear systems \
//               using iterating methods such as Gauss-Seidel and more..

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skillsData: SkillModel[] = [
    {
      name: "Python",
      percentage: 90,
      text:  "Built 6 personal projects and did 2 university projects for the subject: 'Arithmetic Analysis' implementing \
              root finding and function approaching algorithms.",
      id: "skill1"
    },
    {
      name: "Javascript",
      percentage: 80,
      text: "Built 3 personal projects and took course about intermediate concepts like asychronous programming, \
             promises etc, from Codecademy.",
      id: "skill2"
    },
    {
      name: "Html",
      percentage: 75,
      text: "With html i have built 3 personal projects and 2 portfolio-like websites.",
      id: "skill3"
    },
    {
      name: "Css",
      percentage: 70,
      text: "Built 3 personal projects in which i used flex and grid layouts, animations etc and \
             tried to provide responsive layouts for both pc and smartphone screens.",
      id: "skill4"
    },
    {
      name: "React",
      percentage: 60,
      text: "Built 2 personal projects using component-based architecture, routers, drag and drop system \
              and more.",
      id: "skill5",
    },
    {
      name: "Angular",
      percentage: 50,
      text: "The main technology i use in my current job as SW in SGA where i get my hands dirty with components \
             from Bootstrap, PrimeNG, DevExtreme.",
      id: "skill6"
    }
  ]
  constructor() { }

  public getSkillsData(): SkillModel[] {
    return this.skillsData;
  }
}
