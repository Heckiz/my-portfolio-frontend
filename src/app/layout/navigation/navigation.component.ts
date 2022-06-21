import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharingService } from 'src/app/core/services/sharing.service';

document.documentElement.setAttribute('data-theme', 'dark');

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

   pageActive$: Observable<string>;
  constructor(private sharingService: SharingService) {
      this.pageActive$ = sharingService.pageActive;
    }
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
