import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const User = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    nickName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bio: {
        type: DataTypes.TEXT
    },
    profileBackgroundId: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    profileBgDescription: {
        type: DataTypes.STRING
    },
    profileImageId: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    profilePictureUrl: {
        type: DataTypes.STRING,
        allowNull: true
    }
});