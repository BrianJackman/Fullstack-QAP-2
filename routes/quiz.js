// Fullstack JavaScript QAP2
// By: Brian Jackman
// 2024/10/16
import express from "express";
import { generateQuestion, checkAnswer } from "../utils/quiz.js";

const router = express.Router();

let currentStreak = 0;
let currentQuestion = generateQuestion();

router.get("/", (req, res) => {
  res.render("quiz", { question: currentQuestion, streak: currentStreak });
});

router.post("/submit", (req, res) => {
  const { answer, endQuiz, name } = req.body;

  if (endQuiz) {
    // Save the score to the leaderboard
    return res.redirect(`/quiz/end?streak=${currentStreak}&name=${name}`);
  }

  if (checkAnswer(currentQuestion, answer)) {
    currentStreak++;
    currentQuestion = generateQuestion();
    res.redirect("/quiz");
  } else {
    res.redirect(`/quiz/end?streak=${currentStreak}&name=${name}`);
  }
});

router.get("/end", (req, res) => {
  const { streak, name } = req.query;
  res.render("end", { streak, name });
});

router.post("/end", (req, res) => {
  const { name, streak } = req.body;
  // Save the score to the leaderboard
  res.redirect(`/leaderboard/add?name=${name}&score=${streak}`);
});

export default router;
