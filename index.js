import { GraphQLServer } from "graphql-yoga";
console.log( "QQ")

/* 
    1. "scripts": {
            "start": "nodemon --exec babel-node index.js"
        },
    2. .babelrc
        {
            "presets": [
                [
                    "@babel/preset-env",
                    {
                        "useBuiltIns": "entry",
                        "corejs": 3
                    }
                ]
            ]
        }
    3. yarn add @babel/cli @babel/core @babel/node @babel/preset-env nodemon -D 
    
*/

const server = new GraphQLServer({});
server.start(()=> console.log("Graphql Server Running"));

// Error: No schema defined - schema: data에 대한 설명