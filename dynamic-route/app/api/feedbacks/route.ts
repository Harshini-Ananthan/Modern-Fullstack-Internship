// let feedbacks = [
//     {
//         id:1,
//         message: "Hey"
//     },
//     {
//         id: 2,
//         message: "Hello"
//     }
// ]

// type Feedback = {
//     id : number,
//     message: string
// }

// export async function GET(){
//     return Response.json({
//         status: "SUCCESS",
//         feedbacks
//     })
// }

// export async function POST(request: Request){
//     const feedback = await request.json();

//     const newFeedback:Feedback = {
//         id: feedback.id,
//         message: feedback.message
//     }

//     feedbacks.push(newFeedback);
//     return Response.json({
//         status: "New feedback added",
//         feedbacks
//     })
// }

// export async function DELETE(request: Request){
//     const body = await request.json();

//     feedbacks = feedbacks.filter((feedback:any) => {
//         return feedback.id !== body.id 
//     })
//     return Response.json({
//         status: "Feedback deleted",
//         feedbacks
//     })
// }



let feedbacks = [
    {
        id: 1,
        message: "Everything is fine"
    },
    {
        id:2,
        message: "I did not understand api routes"
    },
    {
        id: 3,
        message: "Sir scolds on me"
    }
];

export async function GET(){
    return Response.json(feedbacks);
}
export async function POST(request:Request){
    const body = await request.json();
    const newFeedback = {
        id: feedbacks.length + 1,
        message: body.message 
    }

    feedbacks.push(newFeedback);

    return Response.json({
        status: 201,
        message: "New Feedback added",
        newFeedback
    })
}

export async function DELETE(request:Request){
    const {searchParams} = new URL(request.url);
    const id = searchParams.get("id");
    const fId = JSON.parse(id!);


    const output = feedbacks.filter((feedback) => {
        return feedback.id !== fId;
    })

    feedbacks = [...output];

    return Response.json({
        status: "Feedback deleted",
        feedbacks
    })
}