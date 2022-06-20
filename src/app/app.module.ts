import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { SocialBarComponent } from './layout/social-bar/social-bar.component';
import { OnePageScrollModule } from './modules/one-page-scroll/one-page-scroll.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SocialBarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnePageScrollModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
