import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvWebComponent } from './cv-web.component';

import { SkillsComponent } from './components/skills/skills.component';
import { JobsExperienceComponent } from './components/jobs-experience/jobs-experience.component';
import { StudiesComponent } from './components/studies/studies.component';
import { ProfileComponent } from './components/profile/profile.component';



@NgModule({
  declarations: [
    CvWebComponent,
    SkillsComponent,
    JobsExperienceComponent,
    StudiesComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CvWebModule { }
