import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserMenuService {

  // Observable that is responsible for sharing access to the user menu 
  private accessAllowObserver: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }
  
  // Access return
  get accessAllow() {
    return this.accessAllowObserver.value;
  }

  
  openMenu() {
    this.accessAllowObserver.next(true);
  }

  closeMenu(){
    this.accessAllowObserver.next(false);
  }
}
