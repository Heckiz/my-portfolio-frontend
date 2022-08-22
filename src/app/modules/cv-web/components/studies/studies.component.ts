import { Component, OnInit } from '@angular/core';
import { StudyModel } from '../../models/study';
import { StudiesService } from '../../services/study.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent implements OnInit {

  constructor(private studies: StudiesService) { }
  studiesData!: StudyModel[]
  ngOnInit(): void {
    this.studies.getAllStudies().subscribe((data: StudyModel[]) =>
      this.studiesData = data
    )
  }

}
