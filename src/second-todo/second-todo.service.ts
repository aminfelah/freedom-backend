import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SecondTodo, SecondTodoDocument } from './entities/second-todo.entity';

@Injectable()
export class SecondTodoService {
  constructor(@InjectModel(SecondTodo.name) private secondTodoModel: Model<SecondTodoDocument>) {}
  create(createSecondTodoDto: any) {
    const createdSecondTodo = new this.secondTodoModel(createSecondTodoDto);
    return createdSecondTodo.save();
  }

  async findAll(): Promise<SecondTodo[]> {
    return this.secondTodoModel.find().exec();
  }

  
}
