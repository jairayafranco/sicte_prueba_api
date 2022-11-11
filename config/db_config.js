import { createPool } from "mysql2";
import { config as dotenv } from "dotenv";

dotenv();

export const mysql = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
});