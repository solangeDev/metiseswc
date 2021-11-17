import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.less'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
