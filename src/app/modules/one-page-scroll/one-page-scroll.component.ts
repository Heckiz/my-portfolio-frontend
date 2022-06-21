import { AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { SharingService } from 'src/app/core/services/sharing.service';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-one-page-scroll',
  templateUrl: './one-page-scroll.component.html',
  styleUrls: ['./one-page-scroll.component.scss'],
})
export class OnePageScrollComponent implements AfterViewInit {

  
  @ViewChild(HomeComponent) home!: HomeComponent;
  @ViewChild(AboutComponent) about!: AboutComponent;
  @ViewChild(ContactComponent) contact!: ContactComponent;

  observer: IntersectionObserver | undefined;


  constructor(sharingService: SharingService) {
  // Interceptor that verifies in which screen section is located
  this.observer = new IntersectionObserver((entries) => {
    entries.forEach((entry=>{
      if(entry.isIntersecting) sharingService.changePageActive = entry.target.id;
    }))
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  })
  }
  ngAfterViewInit() {
    this.observer?.observe(this.about.aboutSection.nativeElement)
    this.observer?.observe(this.home.homeSection.nativeElement)
    this.observer?.observe(this.contact.contactSection.nativeElement)

  }

}


