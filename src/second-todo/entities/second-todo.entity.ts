
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SecondTodoDocument = SecondTodo & Document;

@Schema()
export class SecondTodo  {
  @Prop()
  nameSecondTodo: string;

  @Prop()
  dateSecondTodo: string;

  @Prop()
  doneSecondTodo: string;
}

export const SecondTodoSchema = SchemaFactory.createForClass(SecondTodo);
