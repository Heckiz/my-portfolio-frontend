import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnePageScrollComponent } from './one-page-scroll.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';



@NgModule({
  declarations: [
    OnePageScrollComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OnePageScrollModule { }
