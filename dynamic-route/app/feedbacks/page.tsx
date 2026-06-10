export default async function Feedbacks()
{
    const response = await fetch("http://localhost:3000/api/feedbacks")
    const data = await response.json()
    console.log(response)
    console.log(data)


    function handleAdd()
    {}
    const feedbacks = data.feedbacks
    return(
        <>
            {/* <label htmlFor="message"></label> */}
            <textarea name="message" 
            id="message" 
            placeholder="Enter your feedback..."
            className="m-5 p-5 border rounded-md"
            rows= {5}
            cols={80}
            ></textarea>

            <button className="border px-5 p-2" onClick={handleAdd}>Add</button>
            
            <div className="flex gap-10 m-5 flex-wrap">
            {
                feedbacks.map((fb:any) => (
                    <div key={fb.id} className="border p-5 w-63 bg-slate-100">
                        <h2>Id : {fb.id}</h2>
                        <h2>Message : {fb.message}</h2>
                    </div>
                ))
            }
            </div>
        </>
    )
}