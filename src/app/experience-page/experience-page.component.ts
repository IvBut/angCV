import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.css']
})
export class ExperiencePageComponent implements OnInit {

  public curSide:string = 'left';
  info = [
    {
      time: 'Oct 2019 - Apr 2020',
      companyName: 'Success Craft',
      companyLogo: 'succ.jpg',
      companySite: 'http://success-craft.com',
      role: 'Salesforce developer',
      details: 'As a junior Salesforce developer I was working on creating apps on the Salesforce platform. I got experience in different' +
              'integrations with third-party services, using frameworks and technologies such as Angular, Node js. Also I improved my communication skills and skill of team work.'
    },

    {
      time: 'Aug 2017 - Sep 2019',
      companyName: 'Furniture factory ZOV',
      companyLogo: 'zov.png',
      companySite: 'http://zov.by',
      role: 'System engineer',
      details: 'Right after I graduated, I started working as system engineer. My duties included repairing and diagnosing CNC machines, computers and computer equipment. ' +
              'Also I had experience with installation and configuration of video surveillance systems and ACMS systems, laying of LAN and telephone lines.'
    },

    {
      time: 'Sep 2017 - Feb 2019',
      companyName: 'Yanka Kupala State University of Grodno',
      companyLogo: 'grsu.png',
      companySite: 'http://grsu.by',
      role: 'Master of Engineering sciences, Speciality:Computers and computer systems',
      details: 'I have learned about: computer systems and networks administration, how to use tools for software development, ' +
              'assessment of software quality, management of the processes of software life cycle, information security issues.'

    },

    {
      time: 'Sep 2012 - Jun 2017',
      companyName: 'Yanka Kupala State University of Grodno',
      companyLogo: 'grsu.png',
      companySite: 'http://grsu.by',
      role: 'Electronics engineer, Speciality: Information and Measuring Equipment',
      details: 'The education was mainly based on programming microcontrollers and ' +
                'work with transducers or developing different systems of control and measurement. Also ' +
                'during my time at university, I started learning WEB and OOP programming languages.'

    }
  ];
  @ViewChildren('headers') headers: QueryList<any>;


  constructor() { }


  ngOnInit() {

  }


  get Side(){
    return this.curSide = this.curSide === 'right'? 'left' :  'right';
  }

  onExpand(expanded:boolean, index){
   let headers = this.headers.toArray()[index].nativeElement;
      if (expanded){
        headers.classList.add('expanded-header');
      } else  {
        headers.classList.remove('expanded-header');
      }
  }
}
