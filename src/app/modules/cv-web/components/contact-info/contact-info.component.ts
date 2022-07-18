import { Component, OnInit } from '@angular/core';
import { CvWebService } from '../../services/cv-web.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

  contactInfoData: any;
  constructor(private contactInfo: CvWebService) { }

  ngOnInit(): void {
   this.contactInfo.getData().subscribe(data => 
    this.contactInfoData = data.faboData.contactInfo
    )
  }

}
