import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Review = sequelize.define('reviews', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    tags: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: []
    }
});