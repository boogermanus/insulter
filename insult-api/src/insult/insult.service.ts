import * as config from 'config';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import {Insult} from '../model/insult.model';
import { Injectable } from '@nestjs/common';

const BEGINNING: number = 0;
const MIDDLE: number = 1;
const END: number = 2;
@Injectable()
export class InsultService {

    public insultData: any[] = [];
    public insultDataSFW: any[] = [];
    public previousInsults: Insult[] = [];
    private dataPath: string = config.get('app.dataPath');
    private files: string[] = config.get('app.dataFiles');
    private filesSFW: string[] = config.get('app.dataFilesSFW');
    private readonly INSULT_LIMIT: number = 5;

    constructor() {

        this.loadInsultData();

        this.loadInsultDataSFW();

    }

    private loadInsultData(): void {

        for (const file of this.files) {

            this.insultData
                .push(
                    fs.readFileSync(path.join(this.dataPath, file))
                    .toString()
                    .split(os.EOL));
        }

    }

    private loadInsultDataSFW(): void {

        for (const file of this.filesSFW) {

            this.insultDataSFW
                .push(
                    fs.readFileSync(path.join(this.dataPath, file))
                    .toString()
                    .split(os.EOL));

        }
    }

    private getInsult(pData: string[]): string {

        return pData[Math.floor(Math.random() * pData.length)];

    }

    public getSFWInsult(): Insult {

        return this.getNextInsult(
            this.insultDataSFW[BEGINNING],
            this.insultDataSFW[MIDDLE],
            this.insultData[END],
        );
    }

    public getNSFWInsult(): Insult {

        return this.getNextInsult(
            this.insultData[BEGINNING],
            this.insultData[MIDDLE],
            this.insultData[END],
        );
    }

    private getNextInsult(first: string[], second: string[], third: string[]): Insult {

        if (this.previousInsults.length > this.INSULT_LIMIT) {
            this.previousInsults.pop();
        }

        let insult: Insult;

        do {
            insult = new Insult(
                this.getInsult(first),
                this.getInsult(second),
                this.getInsult(third),
            );

        }
        while (this.previousInsults.findIndex( i => i.equals(insult)) > -1);
        this.previousInsults.push(insult);

        return insult;
    }
}