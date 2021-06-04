import { Injectable } from '@angular/core';
import {IWord} from "./iword";
import beginning from '../assets/beginning.json';
@Injectable({
  providedIn: 'root'
})
export class InsultServiceService {

  public beginning: IWord[] = [];
  constructor() {
    this.beginning = beginning;
  }
}
