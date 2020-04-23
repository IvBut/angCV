import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {TypingAnimationDirective, TypingAnimationModule} from 'angular-typing-animation';
import {MglTimelineModule} from 'angular-mgl-timeline';
import { FooterComponent } from './components/footer/footer.component';
import { DialogComponent } from './components/dialog/dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MainBannerComponent} from '../main-banner/main-banner.component';



@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    TypingAnimationModule,
    MglTimelineModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  exports: [
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    BrowserModule,
    TypingAnimationModule,
    TypingAnimationDirective,
    MglTimelineModule,
    FooterComponent,
    DialogComponent,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MainBannerComponent
  ],
  declarations: [FooterComponent, DialogComponent, MainBannerComponent]
})
export class SharedModule {

}
