import { Test, TestingModule } from '@nestjs/testing';
import { SecondTodoService } from './second-todo.service';

describe('SecondTodoService', () => {
  let service: SecondTodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecondTodoService],
    }).compile();

    service = module.get<SecondTodoService>(SecondTodoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
