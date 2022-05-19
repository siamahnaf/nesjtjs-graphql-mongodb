//Packages
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

//Question Module
import { QuestionResolver } from "./question.resolver";
import { QuestionService } from "./question.service";

//Schema
import { Question, QuestionSchema } from "./model/questions.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: Question.name,
            schema: QuestionSchema
        }])
    ],
    providers: [QuestionResolver, QuestionService],
})

export class QuestionModule { }