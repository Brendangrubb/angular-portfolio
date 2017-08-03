import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showWork() {
    $('.work-body').slideToggle();
    $('#contact').toggleClass('contact');
    $('.work-header').toggleClass('header-engaged');
    $('.school-header').toggleClass('display-none');
  }

  showSchool() {
    $('.school-body').slideToggle();
    $('#contact').toggleClass('contact');
    $('.school-header').toggleClass('header-engaged');
    $('.work-header').toggleClass('display-none');
  }
}
