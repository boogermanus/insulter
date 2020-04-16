import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  public root(): string {

    // generic test function
    return 'Insult API';
  }
}
