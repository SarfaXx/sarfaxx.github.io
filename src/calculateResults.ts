import { answersPoints } from "./answersPoints";

export function calculateResults(generatedQuestions: any, finalAnswers: any) {
  let sumOfPoints = 0;
  for (let i = 0; i < generatedQuestions.length; i++) {
    const correctAnswer = generatedQuestions[i].correctAnswer;
    const userAnswer = finalAnswers[i];
    const pointsForThisQuestion = answersPoints(correctAnswer, userAnswer);
    console.log(pointsForThisQuestion);
    sumOfPoints = sumOfPoints + pointsForThisQuestion;
  }
  return ((sumOfPoints + 14) / 28) * 100;
}
