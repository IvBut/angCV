import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {RouterMessage} from '../services/routerMessage.service';
import {MatDialog, MatSnackBarConfig} from '@angular/material';
import {DialogComponent} from '../shared/components/dialog/dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.css']
})
export class MainBannerComponent implements OnInit {
  startImage: string = '';
  endImage: string = '';

  showSecondImage: boolean = false;
  hideSecondImage: boolean = false;

  isAbout: boolean = false;
  aboutText: string = '';
  isSkills: boolean = false;
  skillsText: string = '';
  isExperience: boolean = false;
  experienceText: string = '';

  constructor(private routerMessage: RouterMessage, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit() {
    let curentPath = this.getCurentRoute();
    if (curentPath !=='/about' && curentPath !== '/skills' && curentPath!=='/experience'){
        curentPath = '/about';
    }

    console.log('Path ', curentPath);
    this.startImage = `/assets/images${curentPath}.jpg`;
    this.endImage = `/assets/images${curentPath}.jpg`;
    this.outputText;

    this.routerMessage.getMessage().subscribe(data => {
      this.startImage =  `/assets/images/${data.start}.jpg`;
      this.endImage = `/assets/images/${data.end}.jpg`;
      this.hideSecondImage = true;
      this.showSecondImage = false;
      setTimeout(()=> {
        this.hideSecondImage = false;
        this.showSecondImage = true;
        this.outputText;
      },1000);

    });
  }

  get outputText() {
    let curentPath = this.getCurentRoute();
    let result = '';
    switch (curentPath) {
      case '/about':
        result = `Hi there! I\'m Butko Ivan, I\'m a self-taught developer`;
        this.aboutText = result;
        this.isExperience = false;
        this.isSkills = false;
        this.isAbout = true;
        break;
      case '/skills':
        result = `\u00ABAnyone who stops learning is old, whether at twenty or eighty\u00BB ${String.fromCharCode(0x0097)} Henry Ford`;
        this.skillsText = result;
        this.isAbout = false;
        this.isExperience = false;
        this.isSkills = true;
        break;
      case '/experience':
        result = `\u00ABExperience is one thing you can't get for nothing\u00BB ${String.fromCharCode(0x0097)} Oscar Wilde`;
        this.experienceText = result;
        this.isAbout = false;
        this.isSkills = false;
        this.isExperience = true;
        break;
    }
    return result;
  }


  private getCurentRoute():string {
    return  window.location.href.substring(window.location.href.lastIndexOf('/'));
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '75vw',
      maxWidth: '600px',
      minHeight: '400px',
      maxHeight: '600px',
      hasBackdrop: true,
      closeOnNavigation: true,
      disableClose: true,
      panelClass: 'dialog-overlay'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result === 'success'){
        this.snackBar.open('Thank you for your message! I will reply as soon as possible.', '', this.createSnackbar('snackbar_success'));
      }else if (result === 'error'){
        this.snackBar.open('Something goes wrong, please try again later =(', '', this.createSnackbar('snackbar_error'));
      }
    });
  }

  private createSnackbar(snackBarClass: string): MatSnackBarConfig{
    const config = new MatSnackBarConfig();
    config.duration = 5000;
    config.verticalPosition = 'bottom';
    config.horizontalPosition = 'center';
    config.panelClass = snackBarClass;
    return config;
  }
}
