import { Test, TestingModule } from '@nestjs/testing';
import { should } from 'chai';
import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';

describe('AppController', () => {
  let app: TestingModule;
  should();

  beforeEach(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('root', () => {
    it('should return "Insult API"', () => {
      const appController = app.get<AppController>(AppController);
      appController.root().should.equal('Insult API');
    });
  });
});
