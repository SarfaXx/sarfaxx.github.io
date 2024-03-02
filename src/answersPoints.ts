function answersPoints(actualQuestion: any, selectedAnswer: any) {
  if (actualQuestion.correctAnswer === "yes") {
    return selectedAnswer;
  }
  if (actualQuestion.correctAnswer === "no") {
    return -selectedAnswer;
  }

  //correct answer=yes
  // yes=1
  // chyba tak=0.5
  // nie wiem=0
  //chyba nie= -0.5
  //nie=-1
  //correct answer=no
  //yes=-1
  //chyba tak=-0.5
  //nie wiem=0
  //chyba nie=0.5
  //nie=1
}
