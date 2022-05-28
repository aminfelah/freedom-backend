import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateTodoInput {
  @Field()
  todoName: string;

  @Field()
  todoDone: boolean;
}