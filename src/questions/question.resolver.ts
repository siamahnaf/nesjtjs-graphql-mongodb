//Packages
import { Query, Resolver, Args, Mutation, Subscription } from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";
//Entity
import { QuestionEntity, CreateQuestionEntity } from "./entities/question.entity";
//Service
import { QuestionService } from "./question.service";
//Dto
import { CreateQuestionInput } from "./dto/create-question.input";


//Subscription Publisher
const pubSub = new PubSub();
//Subcription Types
const QUESTION_ADDED = "questionAdded";

@Resolver(() => QuestionEntity)
export class QuestionResolver {
    constructor(private readonly questionsService: QuestionService) { }
    //Get Question Resolver
    @Query(() => [QuestionEntity], { name: "getQuestion" })
    getAll() {
        return this.questionsService.findAll()
    }
    //Create Question Resolver
    @Mutation(() => CreateQuestionEntity, { name: "createQuestion" })
    createQuestion(
        @Args('createQuestionInput')
        createQuestionInput: CreateQuestionInput
    ) {
        pubSub.publish(QUESTION_ADDED, {
            questionAdded: "A new question was added!"
        })
        return this.questionsService.create(createQuestionInput);
    }
    //Question Added Subscriptions
    @Subscription((returns) => String)
    questionAdded() {
        return pubSub.asyncIterator(QUESTION_ADDED);
    }
}