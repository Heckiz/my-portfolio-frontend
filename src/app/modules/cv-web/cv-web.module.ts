import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvWebComponent } from './cv-web.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { PresentationComponent } from './components/presentation/presentation.component';



@NgModule({
  declarations: [
    CvWebComponent,
    ContactInfoComponent,
    PresentationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CvWebModule { }
