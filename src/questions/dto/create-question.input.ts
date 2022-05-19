import { Field, Float, InputType } from "@nestjs/graphql";

@InputType()
export class CreateQuestionInput {
    @Field()
    content: string;

    @Field({ nullable: true })
    answerString: string;

    @Field(() => Float, { nullable: true })
    answerNumber: number;
}