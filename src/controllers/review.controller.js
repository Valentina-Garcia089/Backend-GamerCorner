import { Review } from "../models/Review.js";
import { User } from "../models/User.js";
import { Game } from "../models/Game.js";

export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: User,
          as: "user",
          attributes: ["id", "username", "nickName", "profilePictureUrl"],
        },
        {
          model: Game,
          as: "game",
          attributes: ["id", "title", "developer", "year", "image", "description"],
        },
      ],
    });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createReview = async (req, res) => {
  try {
    const { description, rating, tags, userId, gameId } = req.body;

    if (!userId || !gameId) {
      return res
        .status(400)
        .json({ message: "Faltan parámetros requeridos (userId o gameId)" });
    }

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const game = await Game.findByPk(gameId);
    if (!game) {
      return res.status(404).json({ message: "Juego no encontrado" });
    }

    const newReview = await Review.create({
      description,
      rating,
      tags,
      userId,
      gameId,
    });

    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getReviewsByGame = async (req, res) => {
  try {
    const { gameId } = req.params;
    const reviews = await Review.findAll({
      where: { gameId },
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: User,
          as: "user",
          attributes: ["id", "username", "nickName", "profilePictureUrl"],
        },
      ],
    });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getReviewsByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const reviews = await Review.findAll({
      where: { userId },
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: User,
          as: "user",
          attributes: ["id", "username", "nickName", "profilePictureUrl"],
        },
        {
          model: Game,
          as: "game",
          attributes: ["id", "title", "image", "developer"],
        },
      ],
    });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, rating, tags } = req.body;

    const review = await Review.findByPk(id);

    if (!review) {
      return res.status(404).json({ message: "Review no encontrada" });
    }

    review.description = description || review.description;
    review.rating = rating || review.rating;
    review.tags = tags || review.tags;

    await review.save();

    res.json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    const review = await Review.findByPk(id);

    if (!review) {
      return res.status(404).json({ message: "Review no encontrada" });
    }

    await review.destroy();

    res.json({ message: "Review eliminada" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
