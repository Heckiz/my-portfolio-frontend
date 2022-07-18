import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvWebComponent } from './modules/cv-web/cv-web.component';
import { OnePageScrollComponent } from './modules/one-page-scroll/one-page-scroll.component';

const routes: Routes = [{
  path: '', component: OnePageScrollComponent
},
{
  path: 'cv-web', component: CvWebComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
