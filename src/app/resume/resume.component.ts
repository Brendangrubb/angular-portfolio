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
    $('.school-body').fadeOut();
    $('.work-body').slideToggle();
  }

  showSchool() {
    $('.work-body').fadeOut();
    $('.school-body').slideToggle();
  }
}
