

// import { useEffect, useState } from "react";
import formSubmit from "../actions/formSubmit";
import getFeedbacks from "../actions/getFeedbacks";
import Button from "../component/Button";

type FeedBack = {
    fullName: string;
    email: string;
    message: string;
};

async function Feedback() {

    const data = await getFeedbacks();

    return (
        <>
            <form action={formSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"
                // onChange={(e) => setName(e.target.value)}
                placeholder="Enter your email"
                // value = {name}
                />

                <br/><br/>
                
                <label htmlFor="email">Email : </label>
                <input type="text"
                name="email" 
                id="email" 
                // onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                // value={email}
                >
                </input>

                <br/>
                <br/>


                <label htmlFor="message">Message : </label>
                <textarea
                    name="message" 
                    id="message" 
                    // onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter message"
                    // value={message}
                    rows={5}
                    cols={50}
                >
                </textarea>

                <br/>
                <br/>

                <Button/>
            </form>

            {/* feedback display */}
            {
                data.map((feedback: FeedBack, idx:any) => (
                    <div key={idx}>
                        <p>{feedback.fullName}</p>
                        <p>{feedback.email}</p>
                        <p>{feedback.message}</p>
                    </div>
                ))}

        </>
    )
}
export default Feedback ;