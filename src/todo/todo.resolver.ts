import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateTodoInput } from './dto/todo.input';
import { TodoService } from './todo.service';
import { Todo } from './todo.schema';
import { UpdateTodoInput } from './dto/todo.update';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private todoService: TodoService) {}

  @Mutation(() => Todo)
  async createTodo(@Args('input') input: CreateTodoInput) {
    return this.todoService.create(input);
  }
  @Mutation(() => Todo)
  async updateTodo(@Args({name: 'filter'}) todoName: string,@Args({name: 'input'}) updateInput: UpdateTodoInput) {
    return this.todoService.update({ todoName: todoName },updateInput);
  }
  @Mutation(() => Todo)
  async todoDelete(@Args({name: 'filter'}) todoName: string) {
    return this.todoService.deleteOne({ todoName: todoName });
  }

  @Query(() => [Todo])
  async allTodos() {
    return this.todoService.findAll();
  }
  @Query(() => Todo)
  async todoByName(@Args({name: 'todoName'}) todoName: string) {
    return this.todoService.findOne({ todoName: todoName });
  }
  @Query(() => [Todo])
  async todoByDone(@Args({name: 'todoDone'}) todoDone: boolean) {
    return this.todoService.findMultiple({ todoDone: todoDone });
  }
  
}