// src/user/user.service.ts
import { Model, FilterQuery } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User, UserDocument } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async create(input:any): Promise<User> {
    return this.userModel.create(input);
  }

  async findOne(query: FilterQuery<User>): Promise<User> {
    return this.userModel.findOne(query).lean();
  }

  async find(): Promise<User[]> {
    return this.userModel.find().lean();
  }
}