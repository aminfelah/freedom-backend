import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  greetings(): string {
    return 'Greetings from the other side';
  }
 
}
