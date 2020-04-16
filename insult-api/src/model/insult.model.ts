export class Insult {

    public beginning: string;
    public middle: string;
    public end: string;

    constructor(pBegin: string, pMiddle: string, pEnd: string) {

        this.beginning = pBegin;
        this.middle = pMiddle;
        this.end = pEnd;

    }

    public equals(pInsult: Insult) {

        return this.beginning === pInsult.beginning
        && this.middle === pInsult.middle
        && this.end === pInsult.end;

    }
}