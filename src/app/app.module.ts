import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvWebModule } from './modules/cv-web/cv-web.module';
import { OnePageScrollModule } from './modules/one-page-scroll/one-page-scroll.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    OnePageScrollModule,
    CvWebModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
