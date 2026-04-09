import { User } from "src/user/entities/user.entity";
import { Question } from "src/questions/entities/question.entity";
import { Answers } from "@prisma/client";

export class Answer implements Answers {
    id: number;
    body: string;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    questionId: number;
    user: User;
    question: Question;
}
