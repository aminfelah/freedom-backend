import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { TodoService } from './todo/todo.service';
import { TodoModule } from './todo/todo.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

const url = process.env.MONGO_URL || 'localhost';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    MongooseModule.forRoot(
      `mongodb://root:pass12345@${url}:27017?serverSelectionTimeoutMS=2000`,
    ),GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql'
    }),
    TodoModule,
  ],
})
export class AppModule {}