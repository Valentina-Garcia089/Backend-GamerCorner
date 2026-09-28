import { Game } from "../models/Game.js";

export const getGames = async (req, res) => {
  try {
    const games = await Game.findAll();
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getGameById = async (req, res) => {
  try {
    const { id } = req.params;
    const game = await Game.findByPk(id);

    if (!game) {
      return res.status(404).json({ message: "Juego no encontrado" });
    }

    res.json(game);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
