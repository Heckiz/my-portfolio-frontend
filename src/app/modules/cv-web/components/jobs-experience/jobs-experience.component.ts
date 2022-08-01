import { Component, OnInit } from '@angular/core';
import { JobsExperience, RootObject } from '../../models/cv-web';
import { CvWebService } from '../../services/cv-web.service';

@Component({
  selector: 'app-jobs-experience',
  templateUrl: './jobs-experience.component.html',
  styleUrls: ['./jobs-experience.component.scss']
})
export class JobsExperienceComponent implements OnInit {

  constructor(private jobsExperience: CvWebService) { }

  jobsExperienceData!: JobsExperience[]
  ngOnInit(): void {
    this.jobsExperience.getData().subscribe((data: RootObject) => {
      this.jobsExperienceData = data.faboData.jobsExperience
    })
  }
}


