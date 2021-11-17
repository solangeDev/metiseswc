import { Component, EventEmitter, Input, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {
  title = 'app';
  @Input('name') name!: string;
  @Input('url') url!: string;
  @Output() eventAngularShell = new EventEmitter<Object>();

  ngOnChanges(changes: SimpleChanges) {
    this.url = this.url.replace(/['"]+/g, '');
  }

  linkEvent(){
    console.log('evento para el shell!!')
    this.eventAngularShell.emit({rightbar: true});
  }
}
