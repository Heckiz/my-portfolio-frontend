import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvWebModule } from './modules/cv-web/cv-web.module';
import { OnePageScrollModule } from './modules/one-page-scroll/one-page-scroll.module';


import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AuthService } from './shared/services/auth.service';
import { UserMenuComponent } from './shared/components/user-menu/user-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    UserMenuComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    OnePageScrollModule,
    CvWebModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
