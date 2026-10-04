import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("GamersCorner", "postgres", "1234", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});
