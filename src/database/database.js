import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("GamersCorner", "postgres", "Hola2321", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});
