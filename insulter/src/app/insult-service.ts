import { Injectable } from '@angular/core';
import {IWord} from "./iword";
import beginning from '../assets/beginning.json';
import middle from '../assets/middle.json';
import end from '../assets/end.json';
import {IInsult, Insult} from "./insult";

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
    return new Insult();
  }
}
