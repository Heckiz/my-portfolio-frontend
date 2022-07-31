import { Component, OnInit } from '@angular/core';
import { HardSkills, RootObject, SoftSkills } from '../../models/cv-web';
import { CvWebService } from '../../services/cv-web.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  softSkill!: SoftSkills;
  hardSkills!: HardSkills;
  constructor(private skills: CvWebService) { }
  ngOnInit(): void {

    this.skills.getData().subscribe((data: RootObject) => {
      console.log(data.faboData.skills)
      this.softSkill = data.faboData.skills.softSkills
      this.hardSkills = data.faboData.skills.hardSkills
    })
  }
}
