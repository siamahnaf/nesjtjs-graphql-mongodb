import { Query, Resolver, Args, Mutation, Subscription } from "@nestjs/graphql";
import { Question } from "./entities/question.entity";
import { QuestionService } from "./question.service";
import { CreateQuestionInput } from "./dto/create-question.input";
import { PubSub } from "graphql-subscriptions";

const pubSub = new PubSub();
const QUESTION_ADDED = "questionAdded";

@Resolver(() => Question)
export class QuestionResolver {
    constructor(private readonly questionsService: QuestionService) { }

    @Query(() => [Question], { name: "question" })
    getAll() {
        return this.questionsService.findAll()
    }

    @Mutation(() => Question)
    createQuestion(
        @Args('createQuestionInput')
        createQuestionInput: CreateQuestionInput
    ) {
        pubSub.publish(QUESTION_ADDED, {
            questionAdded: "A new question was added!"
        })
        return this.questionsService.create(createQuestionInput);
    }
    @Subscription((returns) => String)
    questionAdded() {
        return pubSub.asyncIterator(QUESTION_ADDED);
    }
}