import { Module } from "@nestjs/common";
import { QuestionResolver } from "./question.resolver";
import { QuestionService } from "./question.service";

@Module({
    providers: [QuestionResolver, QuestionService],
})

export class QuestionModule { }