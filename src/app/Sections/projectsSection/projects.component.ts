import { Component } from '@angular/core';
import { ProjectModel } from "../../Models/project/projectModel";
import { ProjectsService } from "../../Services/projects/projects.service"; 

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  public projects: ProjectModel[] = [];

  constructor(
    private projectsService: ProjectsService
  ) {}

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
  }
}
