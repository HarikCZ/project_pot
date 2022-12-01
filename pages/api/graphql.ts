import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { buildSchema, Resolver, Query, Arg, ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Flower {
    @Field(() => ID)
    name: string;
}

@Resolver(Flower)
export class FlowerResolver {
    @Query(() => [Flower])
    flowers(): Flower[]{
        return [
            { name: "Kopretina" },
            { name: "Lilie" },
        ];
    }
}

const schema = await buildSchema({
    resolvers: [FlowerResolver],
});

const server = new ApolloServer({
    schema,
});

export const config = {
    api: {
        bodyParser: false,
    },
};

const startServer = server.start();

export default async function handler(req:any, res:any) {
    await startServer;
    await server.createHandler({ path: "api/grapql" })(req, res);
}