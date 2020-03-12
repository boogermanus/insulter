import {Get, Controller} from '@nestjs/common';
import { InsultService } from './insult.service';

@Controller('api/insult')
export class InsultController {

    constructor(private readonly service: InsultService) {

    }

    @Get()
    public async getInsult()  {

        return this.service.getSFWInsult();

    }

    @Get('sfw')
    public async getInsultSFW() {

        return this.service.getSFWInsult();

    }
}