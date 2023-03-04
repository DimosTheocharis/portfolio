import { Component } from '@angular/core';
import { ExperienceModel } from 'src/app/Models/experience/experienceModel';
import { ExperienceService } from 'src/app/Services/experience/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  public experience: ExperienceModel[] = [];

  constructor(
    private experienceService: ExperienceService
  ) {}

  ngOnInit() {
    this.experience = this.experienceService.getExperience();
  }

}
