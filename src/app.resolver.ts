import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class AppResolver {
    @Query((returns) => String)
    sayHello() {
        return "Hello World"
    }
}