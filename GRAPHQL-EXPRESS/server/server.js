import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

const users = [
    {
        id: 1,
        name: 'John',
        email: 'john@gmail.com',
        phone: '9876543210'
    },
    {
        id: 2,
        name: 'Harsh',
        email: 'harsh@gmail.com',
        phone: '9786543210'
    }
]

// app.use(express.json())

async function startServer(){
    const server = new ApolloServer({
        typeDefs: `
            type User{
                id: ID!
                name: String!
                email: String!
                phone: String!
            }

            type Query{
                getUsers: [User]
            }

            type Mutation{
                createUser(id: ID!, name: String!, email: String!, phone: String!): User
                deleteUser(id: ID!): User
                updateUser(id: ID!, email: String!): User
            }
        `,

        resolvers: {
            Query: {
                getUsers: () => users
            },
            Mutation: {
                createUser: (_, {id, name, email, phone}) => {
                    const newUser ={
                        id: users.length + 1,
                        name, 
                        email,
                        phone
                    }
                    users.push(newUser);
                    return users;
                },

                deleteUser: (_, { id }) => {
                    const user = users.find((user) => user.id === id);

                    users = users.filter((user) => user.id !== id);

                    return user;
                },

                updateUser: (_, { id, email }) => {
                    const user = users.find((user) => user.id === id);

                    if (!user) {
                        throw new Error("User not found");
                    }

                    user.email = email;
                    return user;
                },
            
            }
        }
    })

  await server.start();

  app.use(cors());
  app.use(express.json());

  app.use("/graphql", expressMiddleware(server));

  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });
}

startServer();