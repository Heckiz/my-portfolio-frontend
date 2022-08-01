import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvWebComponent } from './cv-web.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { SkillsComponent } from './components/skills/skills.component';
import { JobsExperienceComponent } from './components/jobs-experience/jobs-experience.component';
import { StudiesComponent } from './components/studies/studies.component';



@NgModule({
  declarations: [
    CvWebComponent,
    ContactInfoComponent,
    PresentationComponent,
    SkillsComponent,
    JobsExperienceComponent,
    StudiesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CvWebModule { }
