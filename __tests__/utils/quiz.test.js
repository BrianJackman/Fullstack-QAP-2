// Fullstack Javascrtipt QAP2
// By: Brian Jackman
// 2024/10/16

import { expect } from "chai";
import { generateQuestion, checkAnswer } from "../utils/quiz";

describe("Quiz Functions", () => {
  it("should generate a question", () => {
    const question = generateQuestion();
    expect(question).to.have.property("num1");
    expect(question).to.have.property("num2");
    expect(question).to.have.property("operation");
  });

  it("should check correct answer", () => {
    const question = { num1: 2, num2: 3, operation: "+" };
    const answer = 5;
    expect(checkAnswer(question, answer)).to.be.true;
  });

  it("should check incorrect answer", () => {
    const question = { num1: 2, num2: 3, operation: "+" };
    const answer = 6;
    expect(checkAnswer(question, answer)).to.be.false;
  });
});
