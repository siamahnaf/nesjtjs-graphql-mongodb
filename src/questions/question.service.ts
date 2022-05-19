//Packages
import { NotFoundException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

//Dto
import { CreateQuestionInput } from "./dto/create-question.input";
//Question Entity
import { CreateQuestionEntity } from "./entities/question.entity";
//Question Schema
import { Question, QuestionDocument } from "./model/questions.schema";

@Injectable()
export class QuestionService {
    //Constructor
    constructor(@InjectModel(Question.name) private QuestionModel: Model<QuestionDocument>) { }
    //Get Question Services
    async findAll() {
        const questions = await this.QuestionModel.find().sort({ _id: -1 });
        return questions;
    }
    //Create Question Services
    async create(createQuestionInput: CreateQuestionInput): Promise<CreateQuestionEntity> {
        const hasContent = await this.QuestionModel.findOne({
            content: createQuestionInput.content
        });
        if (hasContent) throw new NotFoundException("Content already exists!");
        await this.QuestionModel.create(createQuestionInput);
        return {
            success: true,
            message: "Question added to databse!"
        }
    }
}