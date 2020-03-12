import {InsultService} from '../src/insult/insult.service';
import {should} from 'chai';

should();
const INSULT_DATA: string = 'insultData';
const INSULT_DATA_SFW: string = 'insultDataSFW';
const PREVIOUS_INSULTS: string = 'previousInsults';

describe('InsultService', () => {

    const service = new InsultService();
    const insultData = service[INSULT_DATA];
    const insultDataSFW = service[INSULT_DATA_SFW];

    describe('InsultService()', () => {
        it('should load files and have data', () => {

            service[INSULT_DATA].should.not.be.empty;
            service[INSULT_DATA_SFW].should.not.be.empty;

        });
    });

    describe('getSFWInsult', () => {

        it('should generate a sfw insult', () => {

            const result = service.getSFWInsult();

            result.should.not.be.null;
            insultDataSFW[0].should.include(result.beginning);
            insultDataSFW[1].should.include(result.middle);
            insultData[2].should.include(result.end);

        });

    });

    describe('getNSFWInsult', () => {

        it('should generate a nsfw insult', () => {

            const result = service.getNSFWInsult();

            result.should.not.be.null;
            insultData[0].should.include(result.beginning);
            insultData[1].should.include(result.middle);
            insultData[2].should.include(result.end);

        });

    });

    describe('getNextInsult', () => {

        it('should generate 5 unique nsfw insults in a row', () => {
            // previousInsults = [];

            // for (let i: number = 0; i < 5; i++) {
            //     const result = service.getNSFWInsult();

            //     const found: number = previousInsults.findIndex(i => i.equals(result));

            //     found.should.be.lessThan(0);

            // }
            throw Error;
        });

        it('should generate 5 unique sfw insults in a row', () => {
            // previousInsults = [];

            // for (let i: number = 0; i < 5; i++) {

            //     const result = service.getSFWInsult();

            //     const found: number = previousInsults.findIndex(i => i.equals(result));

            //     found.should.be.lessThan(0);
            // }
            throw Error;
        });
    });

});