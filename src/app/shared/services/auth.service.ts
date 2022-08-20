import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: firebase.default.User  | null = null;

  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
  ) {

    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }


   // Returns true when user is looged in and email is verified
   get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }
  //User data is obtained
  get getUserData(): any{
    return this.userData
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  async AuthLogin(provider: GoogleAuthProvider) {
    try {
      const result = await this.afAuth
        .signInWithPopup(provider);
      console.log('You have been successfully logged in!');
    } catch (error) {
      console.log(error);
    }
  }

  // Sign out 
  async SignOut() {
    await this.afAuth.signOut();
    this.userData = null;
    localStorage.removeItem('user');
    this.router.navigate(['cv-web']);
  }
}