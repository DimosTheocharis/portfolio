import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {
  RoundProgressModule,
  } from 'angular-svg-round-progressbar';

import { AppComponent } from './app.component';

import { AboutComponent } from './Sections/aboutSection/about.component';
import { ExperienceComponent } from './Sections/experienceSection/experience.component';
import { ProjectsComponent } from './Sections/projectsSection/projects.component';
import { EducationComponent } from './Sections/educationSection/education.component';
import { SkillsComponent } from './Sections/skillsSection/skills.component';

import { HeaderComponent } from './Components/header/header.component';
import { SectionHeaderComponent } from './Components/section-header/section-header.component';
import { TimelineComponent } from './Components/timeline/timeline.component';
import { ProjectComponent } from './Components/project/project.component';
import { SkillComponent } from './Components/skill/skill.component';
import { TechnologyComponent } from './Components/technology/technology.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    EducationComponent,
    SectionHeaderComponent,
    ExperienceComponent,
    TimelineComponent,
    ProjectsComponent,
    ProjectComponent,
    SkillsComponent,
    SkillComponent,
    TechnologyComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RoundProgressModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
    //   space: -10,
    //   radius: 50,
    //   outerStrokeWidth: 10,
    //   innerStrokeWidth: 10,
    //   outerStrokeColor: "#4882c2",
    //   innerStrokeColor: "#e7e8ea",
    //   clockwise: false,
    //   animation: true,
    //   animationDuration: 3000,
    //   lazy: true,
     })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
