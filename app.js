// Fullstack Javascrtipt QAP2
// By: Brian Jackman
// 2024/10/16

const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

const homeRouter = require("./routes/home");
const quizRouter = require("./routes/quiz");
const leaderboardsRouter = require("./routes/leaderboards");

app.use("/", homeRouter);
app.use("/quiz", quizRouter);
app.use("/leaderboards", leaderboardsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
