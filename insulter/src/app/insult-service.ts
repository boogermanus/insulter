import { Injectable } from '@angular/core';
import {IWord} from "./iword";
import beginning from '../assets/beginning.json';
import middle from '../assets/middle.json';
import end from '../assets/end.json';
import {IInsult} from "./insult";

@Injectable({
  providedIn: 'root'
})
export class InsultService {

  public beginning: IWord[] = [];
  public middle: IWord[] = [];
  public end: IWord[] = [];
  
  constructor() {
    this.beginning = beginning;
    this.middle = middle;
    this.end = end;
  }
  
  public getInsult(sfw: boolean): IInsult {
    return this.getNextInsult(sfw);
  }
  
  private getNextInsult(sfw: boolean): IInsult {
    let first = this.getOneInsult(beginning, sfw);
    let second = this.getOneInsult(middle, sfw);
    let third = this.getOneInsult(end, sfw);
    
    return {
      beginning: first,
      middle: second,
      end: third
    }
  }
  
  private getOneInsult(insults: IWord [], sfw: boolean): string {
    let validInsults = insults;
    
    if(sfw) {
      validInsults = insults.filter(vl => vl.sfw);
    }
    
    return validInsults[Math.floor(Math.random() * validInsults.length)].insult;
  }
}
