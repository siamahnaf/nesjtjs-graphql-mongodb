//@ts-nocheck

import { Question } from "../entities/question.entity";
import { DIFFICULTY } from "../entities/difficulty.enum";

export const questions: Partial<Question>[] = [
    {
        id: 1,
        content: "How many minutes are in a day?",
        answerNumber: 1440,
        createdAt: new Date(1642244749),
        difficulty: DIFFICULTY.EASY
    },
    {
        id: 2,
        content: "What is the capital of Romania?",
        answerString: "Bucharest",
        createdAt: new Date(1642244749),
        difficulty: DIFFICULTY.EASY
    }
];