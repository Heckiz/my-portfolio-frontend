import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { InterseptorPageService } from './services/interseptor-page.service';

@Component({
  selector: 'app-one-page-scroll',
  templateUrl: './one-page-scroll.component.html',
  styleUrls: ['./one-page-scroll.component.scss'],
})
export class OnePageScrollComponent implements AfterViewInit {

  // The Dom elements are brought with the @viewchild property
  @ViewChild(HomeComponent) home!: HomeComponent;
  @ViewChild(AboutComponent) about!: AboutComponent;
  @ViewChild(ContactComponent) contact!: ContactComponent;

  observer: IntersectionObserver | undefined;


  constructor(interseptorPage: InterseptorPageService) {
  // Interceptor that verifies in which screen section is located
  this.observer = new IntersectionObserver((entries) => {
    entries.forEach((entry=>{
      if(entry.isIntersecting) interseptorPage.changePageActive = entry.target.id;
    }))
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  })
  }
  ngAfterViewInit() {
    //The observer is told to observe the desired elements
    this.observer?.observe(this.about.aboutSection.nativeElement)
    this.observer?.observe(this.home.homeSection.nativeElement)
    this.observer?.observe(this.contact.contactSection.nativeElement)

  }

}


