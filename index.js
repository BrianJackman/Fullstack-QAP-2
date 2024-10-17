import express from "express";
import path from "path"; // Import the path module
import { fileURLToPath } from "url"; // Import fileURLToPath to handle __dirname in ES modules
import quizRouter from "./routes/quiz.js";
import homeRouter from "./routes/home.js";
import leaderboardRouter from "./routes/leaderboard.js"; // Import the leaderboard router

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the public directory

app.use("/", homeRouter);
app.use("/quiz", quizRouter);
app.use("/leaderboard", leaderboardRouter); // Use the leaderboard router

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
