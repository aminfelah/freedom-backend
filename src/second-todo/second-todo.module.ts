import { Module } from '@nestjs/common';
import { SecondTodoService } from './second-todo.service';
import { SecondTodoController } from './second-todo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SecondTodo, SecondTodoSchema } from './entities/second-todo.entity';

@Module({
  controllers: [SecondTodoController],
  providers: [SecondTodoService],
  imports: [
    MongooseModule.forFeature([{ name: SecondTodo.name, schema: SecondTodoSchema }]),
  ],
})
export class SecondTodoModule {}
