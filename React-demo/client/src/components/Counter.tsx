import { useEffect, useState } from "react";


function Counter() {

    const [count, setCount] = useState(0);
    // count -> state variable
    // setCount -> function to update the state variable

    useEffect(() => {
        console.log("Component Mounted");
        // cleanup function
        return () => {
            console.log("Component Unmounted");
        }
    })

    function handleClick() {
        setCount(count+1);
    }

    function handleDecrement() {
        setCount(count-1);
    }


    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleClick}  >
                Increment
            </button>
            <button onClick={handleDecrement} >
                Decrement
            </button>
        </>
    )

}
export default Counter;

// COMPONENT LIFE CYCLE
// Initialization 
//          crete the component, component gets attached to the React DOM(Document Object Model)
// Mounting
//          component gets rendered to the screen for the first time    
// Updation
//          component gets re-rendered to the screen due to change in state or props
// Unmounting / Deletion
//          component gets removed from the screen and React DOM (cleanup functions are called)