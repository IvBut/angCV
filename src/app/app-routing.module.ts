import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutPageComponent} from './about-page/about-page.component';
import {SkillsPageComponent} from './skills-page/skills-page.component';
import {ExperiencePageComponent} from './experience-page/experience-page.component';


const routes: Routes = [
  {path: '', redirectTo: 'about', pathMatch: 'full'},
  {path: 'about', component: AboutPageComponent},
  {path: 'skills', component: SkillsPageComponent},
  {path: 'experience', component: ExperiencePageComponent},
  { path: '**', component: AboutPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
