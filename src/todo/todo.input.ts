import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTodoInput {
  @Field()
  todoDate: string;

  @Field()
  todoName: string;

  @Field()
  todoDone: boolean;
}