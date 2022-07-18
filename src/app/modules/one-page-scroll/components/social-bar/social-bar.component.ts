import { Component } from '@angular/core';

@Component({
  selector: 'app-social-bar',
  templateUrl: './social-bar.component.html',
  styleUrls: ['./social-bar.component.scss']
})
export class SocialBarComponent {

  socialBarOpen: boolean = false;

  linkedinIcon: string = "linkedin";
  githubIcon: string = "github";
  twitterIcon: string = "twitter";

  iconWithColor(flag: boolean, icon: string) {
    switch (icon) {

      case "linkedin": {
        this.linkedinIcon = flag ? "linkedin_color" : "linkedin";
      } break;
      case "github": {
        this.githubIcon = flag ? "github_color" : "github";
      } break;
      case "twitter": {
        this.twitterIcon = flag ? "twitter_color" : "twitter";
      }
    }
  }

  toggleSocialBar() {
    this.socialBarOpen = !this.socialBarOpen;
    console.log(this.socialBarOpen)
  }
}
