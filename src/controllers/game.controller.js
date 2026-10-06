import { Game } from "../models/Game.js";
import { Review } from "../models/Review.js";
import { Sequelize } from "sequelize";

export const getGames = async (req, res) => {
  try {
    const games = await Game.findAll({
      attributes: {
        include: [
          [
            Sequelize.fn(
              "COALESCE",
              Sequelize.fn("ROUND", Sequelize.fn("AVG", Sequelize.col("reviews.rating")), 1),
              0
            ),
            "rating",
          ],
          [
            Sequelize.fn("COUNT", Sequelize.col("reviews.id")),
            "reviewsCount",
          ],
        ],
      },
      include: [
        {
          model: Review,
          as: "reviews",
          attributes: [],
        },
      ],
      group: ["Game.id"],
      order: [["id", "ASC"]],
    });
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getGameById = async (req, res) => {
  try {
    const { id } = req.params;
    const game = await Game.findOne({
      where: { id },
      attributes: {
        include: [
          [
            Sequelize.fn(
              "COALESCE",
              Sequelize.fn("ROUND", Sequelize.fn("AVG", Sequelize.col("reviews.rating")), 1),
              0
            ),
            "rating",
          ],
          [
            Sequelize.fn("COUNT", Sequelize.col("reviews.id")),
            "reviewsCount",
          ],
        ],
      },
      include: [
        {
          model: Review,
          as: "reviews",
          attributes: [],
        },
      ],
      group: ["Game.id"],
    });

    if (!game) {
      return res.status(404).json({ message: "Juego no encontrado" });
    }

    res.json(game);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
