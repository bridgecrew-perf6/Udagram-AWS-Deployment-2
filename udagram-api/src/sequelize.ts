import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: "exhausted-db.cntlvmvqesgm.us-east-1.rds.amazonaws.com",
  port: 5432,

  dialect: "postgres",
  storage: ":memory:",
});
