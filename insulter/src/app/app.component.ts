import { Component } from '@angular/core';
import { DataService } from './data-service';
import { IInsult } from './insult';
import {trigger, state, animate, transition, style} from '@angular/animations';
import {InsultService} from './insult-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('isInsultGenerated', [
      state('true', style({opacity: 1})),
      state('false', style({opacity: 0})),
      transition('0 => 1', animate('500ms')),
      transition('1 => 0', animate('500ms'))
    ])
  ]
})
export class AppComponent {

  get fullInsult(): string {
    return `${this.insult.beginning} ${this.insult.middle} ${this.insult.end}`;
  }
  constructor(private _service: InsultService) {
    this.insult = {
      beginning: ' ',
      middle: ' ',
      end: ' '
    };
  }

  insult: IInsult;
  insultVisible = false;
  sfwInsults = false;
  timeoutId: any;

  getInsult(): void {
    // clear any existing timeout to keep the animation in check
    clearTimeout(this.timeoutId);

    // call the service and get a new insult
    this.insult = this._service.getInsult(this.sfwInsults);
    this.insultVisible = true;

    // after 5 seconds change the animation and fade out
    this.timeoutId = setTimeout(() => {
      this.insultVisible = false;
    }, 5000);
  }

  switchModes(): void {
    this.sfwInsults = !this.sfwInsults;
  }
}
