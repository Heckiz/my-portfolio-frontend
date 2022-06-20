import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnePageScrollComponent } from './modules/one-page-scroll/one-page-scroll.component';

const routes: Routes = [{
  path: '', component: OnePageScrollComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
