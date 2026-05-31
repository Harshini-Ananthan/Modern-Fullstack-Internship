// 'use server';

// const fs = require('fs');
// import path from "path";

// async function getFeedbacks(){

//     const filePath = path.join(process.cwd(), "app", "data", "feedback.json");
//     const response =  fs.readFileSync(filePath, "utf-8");
//     const data = JSON.parse(response);
//     return data
// }
// export default getFeedbacks


"use server";

import { pool } from "../lib/db";

async function getFeedbacks() {
  const result = await pool.query(
    "SELECT * FROM feedback"
  );

  return result.rows;
}

export default getFeedbacks;