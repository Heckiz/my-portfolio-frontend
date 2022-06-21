import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 
  // Define a reference to the container element HTML of the about 
  @ViewChild('contactSection') contactSection!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

}
