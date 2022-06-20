import { AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
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

@Output () pageChange = new EventEmitter<string>();

observer = new IntersectionObserver((entries)=>{
if(entries[0].isIntersecting){
  this.pageChange.emit('about')
}
}, {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
})

  constructor() { }
  ngAfterViewInit() {
  this.observer.observe(this.about.aboutSection.nativeElement)
  }

}
