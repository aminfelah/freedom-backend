
import { Model, FilterQuery } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Todo, TodoDocument } from './todo.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTodoInput } from './todo.input';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name) private todoModel: Model<TodoDocument>,
  ) {}

  async create(input: CreateTodoInput): Promise<Todo> {
    return this.todoModel.create(input);
  }
  async findOne(query: FilterQuery<Todo>): Promise<Todo> {
    return this.todoModel.findOne(query).lean();
  }

  async find(): Promise<Todo[]> {
    return this.todoModel.find().lean();
  }
}