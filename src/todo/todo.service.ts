
import { Model, FilterQuery } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Todo, TodoDocument } from './todo.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTodoInput } from './dto/todo.input';
import { UpdateTodoInput } from './dto/todo.update';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name) private todoModel: Model<TodoDocument>,
  ) {}

  async create(input: CreateTodoInput): Promise<Todo> {
    return this.todoModel.create(input);
  }
  async update(filter: FilterQuery<Todo>,input: UpdateTodoInput): Promise<Todo> {
    return this.todoModel.findOneAndUpdate(filter,input);
  }
  async findOne(query: FilterQuery<Todo>): Promise<Todo> {
    return this.todoModel.findOne(query).lean();
  }
  async findMultiple(query: FilterQuery<Todo>): Promise<Todo> {
    return this.todoModel.find(query).lean();
  }
  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().lean();
  }
  async deleteOne(query: FilterQuery<Todo>): Promise<Todo> {
    return this.todoModel.findOneAndRemove(query)
  }
}