import { Field, ObjectType } from '@nestjs/graphql';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

@ObjectType()
export class User extends Document {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  age: number;
}
export type UserDocument = User & Document;

