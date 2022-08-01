import { Component, OnInit } from '@angular/core';
import { RootObject, Studies } from '../../models/cv-web';
import { CvWebService } from '../../services/cv-web.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent implements OnInit {

  constructor(private studies:CvWebService) { }
  studiesData!:Studies[]
  ngOnInit(): void {
    this.studies.getData().subscribe((data: RootObject) => {
      this.studiesData = data.faboData.studies
    })
  }

}
