// Fullstack Javascrtipt QAP2
// By: Brian Jackman
// 2024/10/16

export function generateQuestion() {
  const operations = ["+", "-", "*", "/"];
  const num1 = Math.floor(Math.random() * 10) + 1;
  let num2 = Math.floor(Math.random() * 10) + 1;
  const operation = operations[Math.floor(Math.random() * operations.length)];

  // Ensure division results in a whole number
  if (operation === "/") {
    while (num1 % num2 !== 0) {
      num2 = Math.floor(Math.random() * 10) + 1;
    }
  }

  return { num1, num2, operation };
}

export function checkAnswer(question, answer) {
  const { num1, num2, operation } = question;
  let correctAnswer;
  switch (operation) {
    case "+":
      correctAnswer = num1 + num2;
      break;
    case "-":
      correctAnswer = num1 - num2;
      break;
    case "*":
      correctAnswer = num1 * num2;
      break;
    case "/":
      correctAnswer = num1 / num2;
      break;
  }
  return correctAnswer == answer;
}
