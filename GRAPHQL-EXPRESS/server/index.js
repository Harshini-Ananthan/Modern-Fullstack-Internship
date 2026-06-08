import cors from 'cors';
import express from 'express';
import { expressMiddleware } from "@as-integrations/express5";
import { ApolloServer } from "@apollo/server";


const PORT = 4000;

async function startServer(){
    const app = express();
    app.use(express.json());

    const server = new ApolloServer({
        typeDefs: `
            type User{
                id: ID!
                firstName: String!
                lastName: String!
                email: String!
            }
            
            type Todo{
                id: ID!
                todo: String!
                completed: Boolean!
                user: User!
            }

            type Query{
                getTodos: [Todo]
            }
        `,

        resolvers:{
            Query:{
                getTodos: async () =>{
                    const response = await fetch("https://dummyjson.com/todos")
                    const data = await response.json();
                    return data.todos;
                }
            },
            Todo:{
                user: async (parent) => {
                    console.log("parent: ",parent)
                    const response = await fetch(`https://dummyjson.com/users/${parent.id}`)
                    const data = await response.json();
                    return data;
                }
            }
        }
    });

    app.use(cors());
    await server.start();
    
    app.use('/graphql', expressMiddleware(server));

    app.listen(PORT, ()=>{
        console.log(`Server started at ${PORT}`);
    })


}

startServer();
