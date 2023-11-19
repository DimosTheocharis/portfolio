import { Injectable } from '@angular/core';
import { EducationModel } from '../../Models/education/educationModel';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private educationData: EducationModel[] = [
    {
      title: "Secondary School",
      attendancePeriod: "2015 - 2018",
      text: "I went to the 9th Secondary School of Larissa. I didn't have any interest in programming yet and studied\
             all subjects equally.",
      class: "wrapper leftWrapper",
      arrowClass: "rightArrow"
    },
    {
      title: "High School",
      attendancePeriod: "2018 - 2021",
      text: "I went to the 7th General High School of Larissa. There, i picked the IT major and gave emphasis to subjects\
             like Informatics, Maths, Finances etc. I graduated with 19.9/20 degree and scored 18731/20000 points at the\
             final panhellenic exams.",
      class: "wrapper rightWrapper",
      arrowClass: "leftArrow"
    },
    {
      title: "University",
      attendancePeriod: "2021 - till now",
      text: "I currently attend the Department of Informatics of Aristotle University of Thessaloniki. I am taking courses\
             like Object Oriented Programming, Data Structures, Algorithms, Artificial Intelligence, Databases, \
             Operating System, Software Engineering etc.",
      class: "wrapper leftWrapper",
      arrowClass: "rightArrow"
    }
  ]

  constructor() { }

  public getEducation(): EducationModel[] {
    return this.educationData;
  }
}
