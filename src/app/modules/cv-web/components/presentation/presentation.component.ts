import { Component, OnInit } from '@angular/core';
import { CvWebService } from '../../services/cv-web.service';
import { Presentation, RootObject } from '../../models/cv-web'
@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  presentationData!: Presentation;
  pictureUrl!: string;
  constructor(private presentation: CvWebService) { }
  ngOnInit(): void {
    this.presentation.getData().subscribe((data: RootObject) => {
      this.presentationData = data.faboData.presentation
    })
  }

}
