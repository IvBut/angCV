import {Component, ComponentFactoryResolver, HostListener, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {RouterMessage} from '../../../services/routerMessage.service';
import { Router} from '@angular/router';
import * as jsPDF from 'jspdf';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]);
  isScrolled: boolean = false;
  @ViewChild('pdfWrapper', {read: ViewContainerRef}) entry: ViewContainerRef;
  testImg: any;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private routerMessage: RouterMessage,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
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

  handleDownload() {

      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      let headresFont = {fontName: 'courier', fontStyle: 'bold'};
      let infoFont = {fontName: 'courier', fontStyle: 'normal'};
      let x1 = 10;
      let x2 = 70;
      let y1 = 10;
      let y2 = 10;

      pdf.setFont(headresFont.fontName, headresFont.fontStyle);
      pdf.setFontSize(12);
      pdf.text('PERSONAL INFORMATION',x1,y1,null,null,'left');
      let img = new Image();
      img.src = '/assets/images/cv.jpg';
      pdf.addImage(img, "JPEG", x1, y1+=5, 35, 45);
      pdf.setFont(infoFont.fontName, infoFont.fontStyle);
      pdf.text('Ivan Butko',x2,y2+=8,null,null,'left');
      pdf.text('Date of birth: 10/01/1994',x2,y2+=8,null,null,'left');
      pdf.text('Location: Republic of Belarus, Grodno',x2,y2+=8,null,null,'left');
      pdf.text('Phone: (+375) 29 2877546',x2,y2+=8,null,null,'left');
      pdf.text('Email: ivanbutko5@gmail.com',x2,y2+=8,null,null,'left');
      pdf.textWithLink('Site: http://ivanbutko.herokuapp.com',x2,y2+=8,{url: 'http://ivanbutko.herokuapp.com'});

      pdf.setFont(headresFont.fontName, headresFont.fontStyle);
      pdf.setFontSize(12);
      pdf.text('WORK EXPERIENCE', x1, y1+=55, null,null,'left');
      pdf.setLineWidth(0.5);
      pdf.line(x2,y1,190,y1);
      pdf.text('Oct 2019 - Mar 2020', x1,y1+=10,null,null,'left');
      pdf.text('salesforce developer', x2,y2 = y1,null,null,'left');
      pdf.setFont(infoFont.fontName, infoFont.fontStyle);
      pdf.text('Success Craft, Brest (Belarus)', x2,y2+=4 ,null,null,'left');
      pdf.textWithLink('Site: http://success-craft.com',x2,y2+=4,{url: 'http://success-craft.com'});
      pdf.setFontSize(10);
      pdf.text(`${String.fromCharCode(	0x2D)} Application development on the Salesforce platform`, x2,y2+=10 ,null,null,'left');
      pdf.text(`${String.fromCharCode(	0x2D)} Working with Front-End libraries and frameworks`, x2,y2+=3 ,null,null,'left');
      pdf.text(`${String.fromCharCode(	0x2D)} Technical analysis`, x2,y2+=3 ,null,null,'left');
      pdf.text(`${String.fromCharCode(	0x2D)} Code coverage using unit tests`, x2,y2+=3 ,null,null,'left');
      pdf.text(`${String.fromCharCode(	0x2D)} Written and oral communication with clients in English`, x2,y2+=3 ,null,null,'left');
      pdf.setFontSize(12);
      pdf.setFont(headresFont.fontName, headresFont.fontStyle);
      pdf.text('Aug 2017 - Sep 2019',x1,y1=y2+10,null,null,'left');
      pdf.text('systems engineer',x2,y2=y1,null,null,'left');
      pdf.setFont(infoFont.fontName, infoFont.fontStyle);
      pdf.text('SOOO ZOV-LenEVROMEBEL, Grodno (Belarus)',x2,y2+=4,null,null,'left');
      pdf.textWithLink('Site: http://zov.by',x2,y2+=4,{url:'http://zov.by'});
      pdf.setFontSize(10);
      pdf.text(`${String.fromCharCode(	0x2D)} Diagnostics and repair of computer equipment`, x2,y2+=10 ,null,null,'left');
      pdf.text(`${String.fromCharCode(	0x2D)} Peripheral equipment maintenance,`, x2,y2+=3 ,null,null,'left');
      pdf.text(`  software installation and configuration`, x2,y2+=3 ,null,null,'left');
      pdf.text(`${String.fromCharCode(	0x2D)} Laying of LAN and telephone lines`, x2,y2+=3 ,null,null,'left');
      pdf.text(`${String.fromCharCode(	0x2D)} Installation and configuration of video surveillance systems`, x2,y2+=3 ,null,null,'left');
      pdf.text(`${String.fromCharCode(	0x2D)} Work with ACMS`, x2,y2+=3 ,null,null,'left');

      pdf.setFontSize(12);
      pdf.setFont(headresFont.fontName, headresFont.fontStyle);
      pdf.text('EDUCATION', x1, y1=y2+10, null,null,'left');
      pdf.setLineWidth(0.5);
      pdf.line(x2,y1,190,y1);
      pdf.text('Sep 2012 - Jun 2017',x1,y1+=10,null,null,'left');
      pdf.text('electronics engineer',x2,y2=y1,null,null,'left');
      pdf.setFont(infoFont.fontName, infoFont.fontStyle);
      pdf.text('Yanka Kupala State University,',x2,y2+=4,null,null,'left');
      pdf.text('Physico-Technical faculty,',x2,y2+=4,null,null,'left');
      pdf.text('Speciality: Information and Measuring Equipment',x2,y2+=4,null,null,'left');
      pdf.setFont(headresFont.fontName, headresFont.fontStyle);
      pdf.text('Sep 2017 - Feb 2019',x1,y1=y2+10,null,null,'left');
      pdf.text('master of engineering sciences',x2,y2=y1,null,null,'left');
      pdf.setFont(infoFont.fontName, infoFont.fontStyle);
      pdf.text('Yanka Kupala State University,',x2,y2+=4,null,null,'left');
      pdf.text('Facalty of Mathematics and Informatics,,',x2,y2+=4,null,null,'left');
      pdf.text('Speciality: Computers and computer systems',x2,y2+=4,null,null,'left');

      pdf.setFont(headresFont.fontName, headresFont.fontStyle);
      pdf.text('PERSONAL SKILLS', x1, y1=y2+10, null,null,'left');
      pdf.setLineWidth(0.5);
      pdf.line(x2,y1,190,y1);
      pdf.setFont(infoFont.fontName, infoFont.fontStyle);
      pdf.fromHTML(
        `<div style="font-family: 'courier';">
                <p>Languages:</p>
                <ul>
                    <li>Foreign languages: English(B1)</li>
                    <li>Mother tongue(s): Belarusian, Russian</li>
                <ul/>
                <p>Communication skills:</p>
                <ul>
                    <li>ability to interact and effectively communicate with people from diverse backgrounds</li>
                    <li>empathic listener and persuasive speaker</li>
                    <li>tolerant and flexible to different situations</li>
                    <li>experienced at giving presentations at conferences to a large public</li>
                <ul/>
                 <p>Job-related skills:</p>
                <ul>
                    <li>ability to work under pressure</li>
                    <li>able to prioritize and operate proactively</li>
                    <li>ability to solve complex problems</li>
                    <li>good analytical skills</li>
                <ul/>
                <p>Digital skills:</p>
                <ul>
                    <li>Development on Salesforce platform: Apex, VisualForce, LWC, SLDS, Lightning, SOQL)</li>
                    <li>Integration with third-party services</li>
                    <li>HTML5, CSS3, JS (es6)</li>
                    <li>Git</li>
                    <li>Have experience with Angular, Node js(Express), Material UI, Handlebars</li>
                    <li>Have experience in programming controllers and development of Android applications</li>
                    <li>Basic graphing skills</li>
                <ul/>
                </div>
            `,
        x1,
        y1+10,
        {width:180}
      )
      window.open(URL.createObjectURL(pdf.output("blob",{
        filename: 'CV-IvanButko'
      })),'_blank');

  }
}
