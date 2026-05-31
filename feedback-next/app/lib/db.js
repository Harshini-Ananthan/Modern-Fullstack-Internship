import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "feedbacks",
  password: "Sowndar@30",
  port: 5432,
});