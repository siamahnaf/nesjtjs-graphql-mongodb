//Packages
import { Field, Float, ID, ObjectType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";
//Custom Scalar
import { DateScalar } from "src/date.scaler";

//Get Question Types Entity
@ObjectType()
export class QuestionEntity {
    @Field(() => ID, { description: "Mongoose Id Type", nullable: false })
    _id: ObjectId;

    @Field()
    content: string;

    @Field({ nullable: true })
    answerString: string;

    @Field(() => Float, { nullable: true })
    answerNumber: number

    @Field()
    createdAt: DateScalar;

    @Field()
    updatedAt: DateScalar;
}

//Create Question Entity
@ObjectType()
export class CreateQuestionEntity {
    @Field(() => Boolean, { nullable: false })
    success: boolean;

    @Field(() => String, { nullable: false })
    message: string;
}