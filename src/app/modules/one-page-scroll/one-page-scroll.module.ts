import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnePageScrollComponent } from './one-page-scroll.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SocialBarComponent } from './components/social-bar/social-bar.component';
import { InterseptorPageService } from './services/interseptor-page.service';




@NgModule({
  declarations: [
    OnePageScrollComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavigationComponent,
    SocialBarComponent
    
  ],
  imports: [
    CommonModule,
  ],
  providers:[InterseptorPageService]
})
export class OnePageScrollModule { }
