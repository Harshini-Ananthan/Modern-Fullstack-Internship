

// import { useEffect, useState } from "react";
import reviewSubmit, { getReviews } from "../actions/reviewSubmit";
import Button from "../component/Button";

type Review = {
    id: number
    name: string;
    email: string;
    review: string;
    rating: number;
};

async function Review() {

    const data = await getReviews();

    const sum = data.reduce((accum:number , review:Review) => {
        return accum + Number(review.rating);
    },0);

    const avg = sum/data.length;

    return (
        <>
            <form action={reviewSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name"
                placeholder="Enter your name"
                />

                <br/><br/>

                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email"
                placeholder="Enter your email"
                />

                <br/><br/>
                
                <label htmlFor="review">Review : </label>
                <input type="text"
                name="review" 
                id="revies" 
                placeholder="Enter your review"
                >
                </input>

                <br/>
                <br/>


                <label htmlFor="eating">Rating : </label>
                <input
                    type = "number"
                    name="rating" 
                    id="rating" 
                    placeholder="Enter rating"
                
                />

                <br/>
                <br/>

                <Button/>
            </form>

            {/* Review display */}
            <h1>Average ratings : {avg.toFixed(2)}</h1>
            {
                data.map((review: Review, idx:any) => (
                    <div key={idx}>
                        <p>{review.name}</p>
                        <p>{review.email}</p>
                        <p>{review.review}</p>
                        <p>{review.rating}</p>
                    </div>
                ))}

        </>
    )
}
export default Review ;