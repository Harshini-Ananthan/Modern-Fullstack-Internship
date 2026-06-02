'use server';

import { revalidatePath } from "next/cache";
import { pool } from "../lib/db";

async function reviewSubmit(formData: FormData){
    const name = formData.get("name");
    const email = formData.get("email");
    const review = formData.get("review");
    const rating = formData.get("rating");

    await pool.query(
        `INSERT INTO review (name, email, review, rating) VALUES ('${name}', '${email}', '${review}', ${rating})`
    );

    revalidatePath("/reviews");
}

export default reviewSubmit;

export async function getReviews(){
    const result = await pool.query(
        `SELECT * from review`
    );

    return result.rows;
}