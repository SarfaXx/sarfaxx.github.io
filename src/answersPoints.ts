export function answersPoints(correctAnswer: any, selectedAnswer: any) {
  if (correctAnswer === "yes") {
    console.log("&&&&&&&&", selectedAnswer);
    return selectedAnswer;
  }
  if (correctAnswer === "no") {
    if (selectedAnswer === 1) return -1;
    if (selectedAnswer === 0.5) return -0.5;
    if (selectedAnswer === 0) return 0;
    if (selectedAnswer === -0.5) return 0.5;
    if (selectedAnswer === -1) return 1;
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
