import { Controller, Get, BadRequestException, Param } from '@nestjs/common';

@Controller()
export class ModuleAController {

  @Get('say/:key')
  saySomething(@Param() params): string {
    if(params.key === 'badWord') {
      throw new BadRequestException('do not know bad word');
    }
    return params.key
  }
}
