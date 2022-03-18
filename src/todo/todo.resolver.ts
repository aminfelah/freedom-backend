import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateTodoInput } from './todo.input';
import { TodoService } from './todo.service';
import { Todo } from './todo.schema';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private todoService: TodoService) {}

  @Mutation(() => Todo)
  async createTodo(@Args('input') input: CreateTodoInput) {
    return this.todoService.create(input);
  }

  @Query(() => [Todo])
  async todos() {
    return this.todoService.find();
  }
  @Query(() => Todo)
  async todo(@Args({name: 'todoName'}) todoName: string) {
    return this.todoService.findOne({ todoName: todoName });
  }
}