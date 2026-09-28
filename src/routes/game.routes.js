import { Router } from "express";
import { getGames, getGameById } from "../controllers/game.controller.js";

const router = Router();

router.get("/games", getGames);
router.get("/games/:id", getGameById);

export default router;
