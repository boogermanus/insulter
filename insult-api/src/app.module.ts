import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InsultModule } from './insult/insult.module';

@Module({
  imports: [InsultModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
