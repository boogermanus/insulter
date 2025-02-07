import { Injectable } from '@angular/core';
import { IWord } from '../interfaces/iword';
import beginning from '../../../public/beginning.json';
import middle from '../../../public/middle.json';
import end from '../../../public/end.json';
import { IInsult } from '../interfaces/iinsult';

@Injectable({
  providedIn: 'root'
})
export class InsultService {

  public beginning: IWord[] = [];
  public middle: IWord[] = [];
  public end: IWord[] = [];
  public lastFiveInsults: IInsult[] = [];

  constructor() {
    this.beginning = beginning;
    this.middle = middle;
    this.end = end;
  }

  public getInsult(sfw: boolean): IInsult {
    return this.getNextInsult(sfw);
  }

  private getNextInsult(sfw: boolean): IInsult {
    const first = this.getOneInsult(beginning, sfw);
    const second = this.getOneInsult(middle, sfw);
    const third = this.getOneInsult(end, sfw);

    return {
      beginning: first,
      middle: second,
      end: third
    };
  }

  private getOneInsult(insults: IWord [], sfw: boolean): string {
    let validInsults = insults;

    if (sfw) {
      validInsults = insults.filter(vl => vl.sfw);
    }

    return validInsults[Math.floor(Math.random() * validInsults.length)].insult;
  }
}
