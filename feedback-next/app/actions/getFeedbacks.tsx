'use server';

const fs = require('fs');
import path from "path";

async function getFeedbacks(){

    const filePath = path.join(process.cwd(), "app", "data", "feedback.json");
    const response = await fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(response);
    console.log("get data ",data);
    return data
}
export default getFeedbacks