import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvWebComponent } from './cv-web.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';



@NgModule({
  declarations: [
    CvWebComponent,
    ContactInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CvWebModule { }
