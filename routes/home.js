// Fullstack Javascrtipt QAP2
// By: Brian Jackman
// 2024/10/16

import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  const lastStreak = req.query.streak || 0;
  res.render("index", { lastStreak });
});

export default router;
