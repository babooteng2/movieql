import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers.js";

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});

server.start(() => console.log("Graphql Server Running"));

// check it out onto http://localhost:4000/

//graphql : listen EADDRINUSE: address already in use :::4000 - 서버죽이기
/* 
    포트사용확인 
    $ lsof -i TCP:4000 
    $ kill -9 [pid] ( -9옵션은 kill 강제종료옵션) 
*/
