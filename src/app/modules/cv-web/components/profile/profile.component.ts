import { Component, OnInit } from '@angular/core';
import { ProfileModel } from '../../models/profile';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService: ProfileService) { }
  profileData!: ProfileModel;
  ngOnInit(): void {
    this.profileService.getProfile("1").subscribe(data =>
      this.profileData = data
    )

  }

}
