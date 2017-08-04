import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#contact').toggleClass('contact');
  }

  showMoreInfoOne() {
    $('.text-body-one').slideToggle('display-none');
    $('.more-info-one').slideToggle('display-none');
  }
  showMoreInfoTwo() {
    $('.text-body-two').slideToggle('display-none');
    $('.more-info-two').slideToggle('display-none');
  }
  showMoreInfoThree() {
    $('.text-body-three').slideToggle('display-none');
    $('.more-info-three').slideToggle('display-none');
  }
  showMoreInfoFour() {
    $('.text-body-four').slideToggle('display-none');
    $('.more-info-four').slideToggle('display-none');
  }
}
