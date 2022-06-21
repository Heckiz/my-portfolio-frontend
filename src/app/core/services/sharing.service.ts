import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharingService {
  private pageActiveObservable: BehaviorSubject<string> = new BehaviorSubject<string>('home');
  static changePageActive: any;
  constructor() { }

  get pageActive() {
    return this.pageActiveObservable.asObservable();
  }
  set changePageActive(page: string) {
    this.pageActiveObservable.next(page);
  }
}
