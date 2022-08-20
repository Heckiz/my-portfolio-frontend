import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserMenuService } from './shared/services/user-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';

  constructor(private route: ActivatedRoute, private userMenuService: UserMenuService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      params['admin'] == "fabo" ? this.userMenuService.openMenu() : this.userMenuService.closeMenu();
    })
  }
}
