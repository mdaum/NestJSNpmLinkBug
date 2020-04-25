import { Module } from '@nestjs/common';
import { ModuleAController } from './app.controller';

@Module({
  imports: [],
  controllers: [ModuleAController],
  providers: [],
})
export class ModuleA {}
