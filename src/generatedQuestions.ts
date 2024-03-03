import { allQuestions } from "./questions";

const numberOfQuestions = 14;
export const generatedQuestions = allQuestions
  .sort(() => 0.5 - Math.random())
  .slice(0, numberOfQuestions);
