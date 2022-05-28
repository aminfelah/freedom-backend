<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>
<div id="top"></div>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/aminfelah">
    <img src="https://media.discordapp.net/attachments/878701501239947314/954837195854868500/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Back-end api</h3>

  <p align="center">
    A Basic Todo CRUD API !
</div>

## Reproducing the API

To run this project just run the following on the root of the project:

``` console
docker-compose up -d dev mongodb
```
### Built With

major frameworks/libraries and technologies used to bootstrap the todo api.

* [Nestjs](https://nestjs.com/)
* [Mongodb](https://www.mongodb.com/)
* [GraphQl](https://graphql.org/)
* [Docker](https://www.docker.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

### GraphQl PlayGround
<div align="center">
http://localhost:3000/graphql
</div>
   <img src="https://media.discordapp.net/attachments/878701501239947314/954837667328196618/unknown.png?width=1249&height=612"  >
   <hr />
   
## Possible GraphQl Queries and Mutations 

  <br />


| Action        | Type           | payload | arguments |
| ------------- |:-------------:| ------------------ | ---------- |
|  Add a Todo | Mutation |mutation createTodo($input: CreateTodoInput!) { <br />  createTodo(input: $input) { todoDate  <br /> todoName <br />   todoDone <br />  } <br /> } <br /> | { "input": { <br /> "todoDate": "18-03-2022", <br /> "todoName": "the todo name", <br />  "todoDone": true <br />  } <br /> } |
| Get all Todos | Query | {  allTodos { <br />  todoDate <br />  todoName <br />  todoDone <br /> } <br /> } | None |
| Get a Todo  | Query | {  todoByName(todoName :"make the backend") {  <br /> todoDate  <br /> todoName  <br />  todoDone  <br />  } }| None |
| Modify a Todo   | Mutation | mutation updateTodo($filter:String!,$input: UpdateTodoInput!) { <br /> updateTodo(filter:$filter,input: $input) { <br />  todoDate <br />  todoName <br />  todoDone <br /> } <br /> } | {"filter": "the todo to Change",  <br /> "input": {  <br />  "todoName": "the todo to Update",  <br /> "todoDone":false  <br /> }  <br /> }  <br /> |
| Delete a Todo | Mutation | mutation todoDelete($filter: String!) {  <br /> todoDelete(filter: $filter) {  <br />  todoDate  <br />  todoName <br /> todoDone  <br /> }  <br />} | {"filter": "the todo to Delete"} |


## The Model Schema and The validation Pipes 


``` sh
@ObjectType()
export class Todo extends Document {
  @Field()
  todoDate: string;
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(99)
  @IsString()
  @Field()
  todoName: string;
  @IsBoolean()
  @Field()
  todoDone: boolean;
}
export type TodoDocument = Todo & Document;
```

## Basic Unit Tests using Jest 

 <img src="https://jestjs.io/fr/img/opengraph.png"  >
 
to test the resolver update action example
``` sh
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
```
 

