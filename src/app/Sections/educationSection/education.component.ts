import { Component } from '@angular/core';
import { EducationModel } from 'src/app/Models/education/educationModel';
import { EducationService } from 'src/app/Services/education/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  public education: EducationModel[] = [];

  constructor(
    private educationService: EducationService
  ) {}

  ngOnInit() {
    this.education = this.educationService.getEducation();
  }

}
