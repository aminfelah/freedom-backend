import { Field, ObjectType } from '@nestjs/graphql';

import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const TodoSchema = new mongoose.Schema({
  todoDate: String,
  todoName: String,
  todoDone: Boolean,
});

@ObjectType()
export class Todo extends Document {
  @Field()
  todoDate: string;

  @Field()
  todoName: string;

  @Field()
  todoDone: boolean;
}
export type TodoDocument = Todo & Document;

