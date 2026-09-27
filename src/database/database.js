import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize("gamerCornerDb", "postgres", "Cholao", {
    host: "localhost",
    port: 5432,
    dialect: "postgres"
});