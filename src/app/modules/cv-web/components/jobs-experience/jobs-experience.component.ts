import { Component, OnInit } from '@angular/core';
import { ExperienceModel } from '../../models/experience';
import { ExperienceService } from '../../services/experience.service';

@Component({
  selector: 'app-jobs-experience',
  templateUrl: './jobs-experience.component.html',
  styleUrls: ['./jobs-experience.component.scss']
})
export class JobsExperienceComponent implements OnInit {

  constructor(private jobsExperience: ExperienceService) { }

  jobsExperienceData!: ExperienceModel[]
  ngOnInit(): void {
    this.jobsExperience.getAllExperiences().subscribe((data: ExperienceModel[]) =>
      this.jobsExperienceData = data
    )
  }
}


