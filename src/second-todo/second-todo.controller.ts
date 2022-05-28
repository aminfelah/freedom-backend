import {
  Controller,
  Get,
  Post,
  Body,
} from '@nestjs/common';
import { SecondTodoService } from './second-todo.service';

@Controller('second-todo')
export class SecondTodoController {
  constructor(private readonly secondTodoService: SecondTodoService) {}

  @Post()
  create(@Body() createSecondTodoDto: any) {
    return this.secondTodoService.create(createSecondTodoDto);
  }

  @Get()
  findAll() {
    return this.secondTodoService.findAll();
  }
}
