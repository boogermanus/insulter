import { Module } from '@nestjs/common';
import { InsultController } from './insult.controller';
import { InsultService } from './insult.service';

@Module({

    controllers: [InsultController],
    providers: [InsultService],

})

export class InsultModule {}