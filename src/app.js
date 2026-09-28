import express from "express";
import morgan from "morgan";
import userRoutes from "./routes/user.routes.js";
import gameRoutes from "./routes/game.routes.js";
import reviewRoutes from "./routes/review.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", gameRoutes);
app.use("/api", reviewRoutes);

export default app;
