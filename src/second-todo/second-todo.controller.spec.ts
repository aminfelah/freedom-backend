import { Model } from "mongoose";
import { SecondTodoDocument } from "./entities/second-todo.entity";
import { SecondTodoController } from "./second-todo.controller";
import { SecondTodoService } from "./second-todo.service";

describe('SecondTodoController', () => {
  let secondTodoController: SecondTodoController;
  let secondTodoService: SecondTodoService;

  beforeEach(() => {
    const secondTodoModel = new Model<SecondTodoDocument>()
    secondTodoService = new SecondTodoService(secondTodoModel);
    secondTodoController = new SecondTodoController(secondTodoService);
  });

  describe('findAll', () => {
    it('should return an array of second-todos', async () => {
      const result = [];
      jest.spyOn(secondTodoService, 'findAll').mockResolvedValue(result);

      expect(await secondTodoController.findAll()).toBe(result);
    });
  });
});