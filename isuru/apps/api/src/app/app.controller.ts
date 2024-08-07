import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  
  //Start Asingment cal
// http://localhost:3000/api/sum
  @Post()
  sum(@Body() body: {n1:number , n2:number}) {
    return this.appService.SUM(body.n1,body.n2);
  }
// http://localhost:3000/api/sub
@Post()
  sub(@Body() body: {n1:number , n2:number}) {
    return this.appService.SUB(body.n1,body.n2);
  }
// http://localhost:3000/api/dev
@Post()
  dev(@Body() body: {n1:number , n2:number}) {
    return this.appService.DEV(body.n1,body.n2);
  }
// http://localhost:3000/api/mul
 @Post()
  mul(@Body() body: {n1:number , n2:number}) {
    return this.appService.MUL(body.n1,body.n2);
  }
  //End Asingment cal
}
