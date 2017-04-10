import { Component, OnInit } from '@angular/core';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  private t:Array<object>;

  ngOnInit() {
    this.t = [
      {name:'redbud'},
      {name:'Wick-338'},
      {name:'Hangtown'},
      {name:'Glen-Helen-Raceway'},
      {name:'Thunder-Valley'},
      {name:'High-Point-Raceway'},
      {name:'Muddy-Creek-Raceway'},
    ];
  }

 }
