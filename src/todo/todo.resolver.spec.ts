/*import { Test, TestingModule } from '@nestjs/testing';
import { CreateTodoInput } from './dto/todo.input';
import { UpdateTodoInput } from './dto/todo.update';
import { TodoResolver } from './todo.resolver';
import { Todo } from './todo.schema';
import { TodoService } from './todo.service';
import { FilterQuery } from 'mongoose';
describe('TodoResolver', () => {
  let resolver: TodoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TodoResolver,
        {
          provide: TodoService,
          useFactory: () => ({
            create: jest.fn((input: CreateTodoInput) => ({...input})),
            update: jest.fn((filter:string,input: UpdateTodoInput) => ({todoDate:"19-03-2022",...input})),
            deleteOne: jest.fn((query: FilterQuery<Todo>) => ({"todoDate": "19-03-2022", "todoDone": false,...query})),
            findOne: jest.fn((query: FilterQuery<Todo>) => ({"todoDate": "19-03-2022", "todoDone": true,...query})),
            findAll:jest.fn(() => ([{"todoDate": "19-03-2022","todoName":"create my todo test","todoDone": true,}]))
          }),
        },
      ],
    }).compile();

    resolver = module.get<TodoResolver>(TodoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('createTodo', () => {
    it('should create a new todo', () => {
      expect(
        resolver.createTodo({
          todoDate: '19-03-2022',
          todoName: 'create my todo test',
          todoDone: true,
        }),
      ).resolves.toContainEqual({
        todoDate: '19-03-2022',
        todoName: 'create my todo test',
        todoDone: true,
      });
    });
  });
  describe('todoallTodosByName', () => {
    it('should get all the todos', () => {
      expect(
        resolver.allTodos(
       ),
      ).resolves.toContainEqual([{
        todoDate: '19-03-2022',
        todoName: 'create my todo test',
        todoDone: true,
      }]);
    });
  });
  describe('todoByName', () => {
    it('should get the todo by the name presented', () => {
      expect(
        resolver.todoByName(
        "create my todo test"
       ),
      ).resolves.toContainEqual({
        todoDate: '19-03-2022',
        todoName: 'create my todo test',
        todoDone: true,
      });
    });
  });
  describe('updateTodo', () => {
    it('should update the present todo', () => {
      expect(
        resolver.updateTodo('create my todo test', {
          todoName: 'create my todo test',
          todoDone: false,
        }),
      ).resolves.toContainEqual({
        todoDate: '19-03-2022',
        todoName: 'create my todo test',
        todoDone: false,
      });
    });
  });
  describe('deleteTodo', () => {
    it('should delete andd return the present todo', () => {
      expect(
        resolver.todoDelete(
        "create my todo test"
       ),
      ).resolves.toContainEqual({
        todoDate: '19-03-2022',
        todoName: 'create my todo test',
        todoDone: false,
      });
    });
  });
});
*/