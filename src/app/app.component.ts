import {trigger, state, style, transition, animate} from '@angular/animations';
import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {IInsult} from './interfaces/iinsult';
import {InsultService} from './services/insult.service';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-root',
  imports: [
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('isInsultGenerated', [
      state('true', style({opacity: 1})),
      state('false', style({opacity: 0})),
      transition('0 => 1', animate('250ms')),
      transition('1 => 0', animate('250ms'))
    ])
  ]
})
export class AppComponent {

  public title = 'insulter';
  public insult: IInsult;
  public insultVisible = false;
  public nsfwInsults = true;
  public insultGenerated = false;
  public timeoutId: any;
  public insultList: IInsult[] = [];
  public showPrevious: boolean = false;

  public get fullInsult(): string {
    return this.getFullInsult(this.insult);
  }

  constructor(private _service: InsultService) {
    this.insult = {
      beginning: ' ',
      middle: ' ',
      end: ' '
    };
  }

  public getInsult(): void {
    this.insultGenerated = true;
    // clear any existing timeout to keep the animation in check
    clearTimeout(this.timeoutId);

    // call the service and get a new insult
    this.insult = this._service.getInsult(this.nsfwInsults);
    this.insultVisible = true;


    // after 3 seconds change the animation and fade out
    this.timeoutId = setTimeout(() => {
      this.insultVisible = false;
      this.addInsult(this.insult);
    }, 3000);
  }

  public switchModes(): void {
    this.nsfwInsults = !this.nsfwInsults;
    this.insultVisible = false;
  }

  private addInsult(insult: IInsult): void {
    this.insultList.unshift(insult);

    if (this.insultList.length > 5) {
      this.insultList.pop();
    }
  }

  public getFullInsult(insult: IInsult): string {
    return `${insult.beginning} ${insult.middle} ${insult.end}`;
  }

  public ShowPrevious(): void {
    this.showPrevious = !this.showPrevious;
  }
}
