// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from './assets/vite.svg'
// // import heroImg from './assets/hero.png'
// // import { useState } from 'react';
// import './App.css'
// // import Counter from './components/Counter'  
// // import Navbar from './components/Navbar';
// // import { Route, Routes } from 'react-router-dom';
// // import Home from './pages/Home';
// // import About from './pages/About';
// // import Contact from './pages/Contact';
// // import Login from './pages/Login';
// // import Users from './components/Users';
// // import Products from './components/Products';
// import ContactForm from './components/ContactForm';

// function App() {


//   return (
//     <>
//       {/* <Navbar/>
//       <Routes>
//         <Route path = "/home" element = {<Home/>} />
//         <Route path = "/about" element = {<About/>} />
//         <Route path = "/contact" element = {<Contact/>} />
//         <Route path = "/login" element = {<Login/>} />
        
//       </Routes>
//       <Users></Users>
//       <Products/> */}
//       <ContactForm/>
//     </>
//   )

//   // const [state, setState] = useState(true);

//   // function handleClick(){
//   //   setState(!state);
//   // }

//   // return (
//   //   <div>
//   //     <h1>Hello from React</h1>
      
//   //     <br></br>
//   //     <button onClick = {handleClick}> 
//   //         {state ? "Toggle" : ""}
//   //         {state && <Counter/>}  
//   //      </button> 
//   //   </div>
//   // )
// }

// export default App


import ProductCard from "./components/ProductCard"
import Cart from "./components/Cart"
export default function App(){
    return (
        <div>
            <ProductCard/>
            <Cart/>
        </div>
    )
}