import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type QuestionDocument = Question & Document;

@Schema({ timestamps: true })
export class Question {
    @Prop({ required: true })
    content: string;

    @Prop()
    answerString: string;

    @Prop()
    answerNumber: number;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);