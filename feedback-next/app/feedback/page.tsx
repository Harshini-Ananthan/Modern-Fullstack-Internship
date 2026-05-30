'use client';

import { useEffect, useState } from "react";
import formSubmit from "../actions/formSubmit";
import getFeedbacks from "../actions/getFeedbacks";

type FeedBack = {
    name: string;
    email: string;
    message: string;
};

function Feedback() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [data, setData] = useState<FeedBack[]>([]);

    async function fetchData()
    {
        const feedbacks = await getFeedbacks();
        setData(feedbacks);
    }
    useEffect(()=>{
        fetchData();
    },[])

    return (
        <>
            <form action={formSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your email"
                value = {name}/>

                <br/><br/>
                
                <label htmlFor="email">Email : </label>
                <input type="text"
                name="email" 
                id="email" 
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                value={email}
                >
                </input>

                <br/>
                <br/>


                <label htmlFor="message">Message : </label>
                <textarea
                    name="message" 
                    id="message" 
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter message"
                    value={message}
                    rows={5}
                    cols={50}
                >
                </textarea>

                <br/>
                <br/>

                
                <button type="submit">Submit</button>
            </form>

            {/* feedback display */}
            {
                data.map((feedback: FeedBack, idx) => (
                    <div key={idx}>
                        <p>{feedback.name}</p>
                        <p>{feedback.email}</p>
                        <p>{feedback.message}</p>
                    </div>
                ))}

        </>
    )
}
export default Feedback ;