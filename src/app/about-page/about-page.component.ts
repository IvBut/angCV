import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('About');
    this.meta.updateTag(
      {name:'description',
        content: 'CV ivan butko heroku developer salesforce Belarus Hrodna job frontend about work'
      });
    this.meta.updateTag({name:'keywords', content:'angular salesforce CV development node js Grodno Hrodna Belarus salesfoce-developer work job vacancy about me  резюме frontend вакансии работа разработка Иван Бутько сайт'});
  }

  get dateOfBirth() {
    let diff_ms = Date.now() - new Date(1994,1,10).getTime();
    let age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
}
