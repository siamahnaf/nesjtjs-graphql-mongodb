import { Scalar, CustomScalar } from "@nestjs/graphql";
import { Kind, ValueNode } from "graphql";

@Scalar('Date')
export class DateScalar implements CustomScalar<string, Date> {
    description: "Date custom scalar type";
    serialize(value: Date): string {
        return value.toISOString();
    };
    parseValue(value: number | string) {
        return new Date(value)
    }
    parseLiteral(ast: ValueNode): Date {
        if (ast.kind === Kind.INT) {
            return new Date(ast.value)
        }
        return null;
    }
}