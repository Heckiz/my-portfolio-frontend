import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserMenuService } from '../../services/user-menu.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  constructor(public userMenuService: UserMenuService, public authService: AuthService) {}

  ngOnInit(): void {
  }

  getUser() {
    return console.log(this.authService.getUserData)
  }

}
