import {  Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  // Define a reference to the container element HTML of the about 
  @ViewChild('aboutSection') aboutSection!: ElementRef;

  ngOnInit(): void {
  }  



}
