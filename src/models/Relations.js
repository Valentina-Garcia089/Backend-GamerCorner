import { User } from './User.js';
import { Game } from './Game.js';
import { Review } from './Review.js';

export const setupRelations = () => {
    User.hasMany(Review, { foreignKey: { name: 'userId', allowNull: false }, as: 'reviews' });
    Review.belongsTo(User, { foreignKey: { name: 'userId', allowNull: false }, as: 'user' });

    Game.hasMany(Review, { foreignKey: { name: 'gameId', allowNull: false }, as: 'reviews' });
    Review.belongsTo(Game, { foreignKey: { name: 'gameId', allowNull: false }, as: 'game' });
};