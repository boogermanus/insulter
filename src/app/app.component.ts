import { Component } from '@angular/core';
import { DataService } from './data-service';
import { IInsult, Insult } from './insult';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _service:DataService) {
    this.insult = new Insult();
  }

  insult:IInsult;

  getInsult(): void {
    this._service.getInsult().subscribe((myInsult:IInsult) => {
      this.insult = myInsult;
    })
  }
}
