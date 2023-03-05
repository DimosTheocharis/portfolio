import { Component, Input } from '@angular/core';
import { ProjectModel } from 'src/app/Models/project/projectModel';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() project!: ProjectModel;
}
