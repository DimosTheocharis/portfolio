import { Component } from '@angular/core';
import { SkillModel } from 'src/app/Models/skill/skillModel';
import { SkillsService } from 'src/app/Services/skills/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  public skills: SkillModel[] = [];

  constructor(
    private skillsService: SkillsService
  ) {}

  ngOnInit() {
    this.skills = this.skillsService.getSkillsData();
  }
}
