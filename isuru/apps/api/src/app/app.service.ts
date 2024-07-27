import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return ({ message: 'Hello API' });
  }

  //Start Asingment cal
  SUM(number1:number, number2:number) {
    return{ total: number1 + number2 };
  }

  SUB(number1:number, number2:number) {
    return{ total: number1 - number2 };
  }

  MUL(number1:number, number2:number) {
    return{ total: number1 * number2 };
  }

  DEV(number1:number, number2:number) {
    return{ total: number1 / number2 };
  }
  //End Asingment cal
  
}