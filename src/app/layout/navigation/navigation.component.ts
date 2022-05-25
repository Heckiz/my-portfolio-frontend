import { Component, OnInit } from '@angular/core';

document.documentElement.setAttribute('data-theme', 'dark');

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeTheme(event: Event) {
    // As Event does not guarantee to have a 'checked' property we can issue your target as HTMLInputElement
    (event.target as HTMLInputElement).checked ?

      document.documentElement.setAttribute('data-theme', 'dark')
      :
      document.documentElement.setAttribute('data-theme', 'light');

  }

}
