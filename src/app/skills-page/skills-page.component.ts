import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {state, style, trigger} from '@angular/animations';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.css'],
})
export class SkillsPageComponent implements OnInit, AfterViewInit {

  @ViewChildren("letter") letters: QueryList<ElementRef>;

  constructor(private title: Title, private meta: Meta) { }

   skillsData = [
     {
       name: 'Node js',
       level: 1
     },
     {
       name: 'Handlebars',
       level: 2
     },
     {
       name: 'JavaScript',
       level: 4
     },
     {
       name: 'HTML(5)',
       level: 4
     },
     {
       name: 'CSS(3)',
       level: 3
     },
     {
       name: 'JSON',
       level: 5
     },
     {
       name: 'Angular',
       level: 2
     },
     {
       name: 'Visualforce',
       level: 3
     },
     {
       name: 'Salesforce',
       level: 2
     },
     {
       name: 'Aura components',
       level: 4,
     },
     {
       name: 'LWC',
       level: 3
     },
     {
       name: 'Apex',
       level: 3
     },
     {
       name: 'SOQL',
       level: 3
     },
     {
       name: 'SQL',
       level: 2
     },
     {
       name: 'Java',
       level: 1
     },
     {
       name: 'SQLite',
       level: 2
     },
     {
       name: 'Visual Basic',
       level: 3
     },
     {
       name: 'REST',
       level: 3
     },
   ];
   languagesData = [
     {
       name: 'Russian (Mother tongue)',
       level: 5
     },
     {
       name: 'Belarusian',
       level: 3
     },
     {
       name: 'English (B1)',
       level: 2
     }
   ];
   toolsData = [
     {
       name: 'WebStorm',
       level: 3
     },
     {
       name: 'IntelliJ IDEA',
       level: 3
     },
     {
       name: 'VS code',
       level: 2
     },
     {
       name: 'Git',
       level: 2
     },
     {
       name: 'Jira',
       level: 2
     },
     {
       name: 'Postman',
       level: 3
     },
     {
       name: 'Windows',
       level: 5
     },
     {
       name: 'MS Office',
       level: 5
     },
     {
       name: 'Linux Mint',
       level: 3
     }
   ];
  ngOnInit() {
    this.title.setTitle('Work Experience');
    this.meta.updateTag(
      {name:'Skills',
        content: 'Single page application angular + node.On this page you will find indo about my skills: Salesforce, Apex, Lightning,' +
          'LWC, Node js, Angular, Git, Html5, JS, CSS3. Belarus, Grodno, Hrodna. Work, job, development.'
      });
    this.meta.updateTag({name:'keywords', content:'angular salesforce CV development node js Grodno Belarus salesfoce-developer резюме frontend вакансии работа разработка Иван Бутько сайт'});
  }

  ngAfterViewInit(){
    this.animateLetters();
    setInterval(()=>{
      this.animateLetters();
    },this.letters.length * 850);

  }

  private animateLetters(){
    this.letters.forEach(item=>{item.nativeElement.classList.remove('active')});
    this.letters.forEach((letter:ElementRef, idx)=>{
      setTimeout(()=>{
        letter.nativeElement.classList.add('active');
      },idx*750)
    });
  }

}
