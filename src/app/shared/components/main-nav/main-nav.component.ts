import {Component, HostListener, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {RouterMessage} from '../../../services/routerMessage.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]);
  isScrolled: boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private routerMessage: RouterMessage,
    private router: Router,
    private  activeRoute: ActivatedRoute
    ) { }


  ngOnInit() {
  }

  handleSkills() {
    this.routerMessage.sendMessage({
      start: this.router.url.substr(1,this.router.url.length),
      end: 'skills'
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: Event) {
    window.pageYOffset > 80? this.isScrolled = true: this.isScrolled = false;
  }

  handleExperience() {
    this.routerMessage.sendMessage({
      start: this.router.url.substr(1,this.router.url.length),
      end: 'experience'
    });
  }

  handleAbout() {
    this.routerMessage.sendMessage({
      start: this.router.url.substr(1,this.router.url.length),
      end: 'about'
    });
  }
}
