import { Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { DateScalar } from "src/date.scaler";
import { DIFFICULTY } from "./difficulty.enum";

@ObjectType()
export class Question {
    @Field(() => Int, { description: "ID of the question", nullable: false })
    id: number;

    @Field()
    content: string;

    @Field({ nullable: true })
    answerString: string;

    @Field(() => Float, { nullable: true })
    answerNumber: number

    @Field()
    createdAt: DateScalar;

    @Field({ nullable: true })
    difficulty?: DIFFICULTY
}