import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {MainNavComponent} from './shared/components/main-nav/main-nav.component';
import {MatAnimatedIconComponent} from './shared/components/mat-animated-icon/mat-animated-icon.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import {RouterMessage} from './services/routerMessage.service';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MatAnimatedIconComponent,
    MainBannerComponent,
    AboutPageComponent,
    SkillsPageComponent,
    ExperiencePageComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  providers: [RouterMessage],
  bootstrap: [AppComponent]
})
export class AppModule { }
