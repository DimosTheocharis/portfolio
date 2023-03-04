import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { AboutComponent } from './Sections/aboutSection/about.component';
import { EducationComponent } from './Sections/educationSection/education.component';
import { SectionHeaderComponent } from './Components/section-header/section-header.component';
import { ExperienceComponent } from './Sections/experienceSection/experience.component';
import { TimelineComponent } from './Components/timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    EducationComponent,
    SectionHeaderComponent,
    ExperienceComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
