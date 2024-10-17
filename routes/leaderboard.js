// Fullstack Javascrtipt QAP2
// By: Brian Jackman
// 2024/10/16

import express from "express";

const router = express.Router();

const leaderboard = [
  { name: "Brian", score: 10 },
  { name: "Paul", score: 8 },
  { name: "Liz", score: 7 },
];

router.get("/", (req, res) => {
  res.render("leaderboard", { leaderboard });
});

router.post("/add", (req, res) => {
  const { name, score } = req.body;
  leaderboard.push({ name, score: parseInt(score, 10) });
  leaderboard.sort((a, b) => b.score - a.score); // Sort leaderboard by score
  res.redirect("/leaderboard");
});

export default router;
