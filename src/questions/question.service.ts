import { Injectable } from "@nestjs/common";
import { DateScalar } from "src/date.scaler";
import { questions } from "./data/question.data";
import { CreateQuestionInput } from "./dto/create-question.input";
import { Question } from "./entities/question.entity";

@Injectable()
export class QuestionService {
    findAll() {
        return questions
    }
    create(createQuestionInput: CreateQuestionInput): Question {
        const newId = questions.length + 1;
        const newQuestion: Question = {
            ...createQuestionInput,
            id: newId,
            createdAt: new Date() as unknown as DateScalar
        }
        questions.push(newQuestion);
        return newQuestion;
    }
}