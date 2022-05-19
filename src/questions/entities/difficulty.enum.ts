import { registerEnumType } from "@nestjs/graphql";

export enum DIFFICULTY {
    EASY = "EASY",
    HARD = "HARD"
}

registerEnumType(DIFFICULTY, {
    name: "DIFFICULTY"
})