import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import {ModuleA} from '../../moduleA/src/app.module'; //hitting route w/ 503 works w/o npm link
import {ModuleA} from 'module_a';


@Module({
  imports: [ModuleA],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
