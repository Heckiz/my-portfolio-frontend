import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { InterseptorPageService } from '../../services/interseptor-page.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  pageActive$: Observable<string>;
  toggleTheme!: boolean;

  constructor(private interseptorPage: InterseptorPageService) {
    this.pageActive$ = interseptorPage.pageActive;
  }

  ngOnInit(): void {
    document.documentElement.setAttribute('data-theme', localStorage.getItem('data-theme') || 'dark')
    // I update the state of checkbox according to the theme mode
    localStorage.getItem('data-theme') === 'dark' ? this.toggleTheme = true : this.toggleTheme = false;

  }

  changeTheme(event: Event) {
    // As Event does not guarantee to have a 'checked' property we can issue your target as HTMLInputElement
    if ((event.target as HTMLInputElement).checked) {
      localStorage.setItem('data-theme', 'dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      localStorage.setItem('data-theme', 'light')
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }

}
function theme_mode(theme_mode: any) {
  throw new Error('Function not implemented.');
}

