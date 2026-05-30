// import { useEffect, useState } from "react";

// type Product = {
//     id : number,
//     title : string,
//     category : string,
//     price : number
// }

// function Products(){

//     const [data, setData] = useState<Product[]>([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // function getData(){
//     //     fetch("https://dummyjson.com/products")
//     //     .then((res) => res.json())
//     //     .then((response) => {
//     //         setData(response.products);
//     //         setIsLoading(!isLoading);
//     //     })
//     //     .catch((err) => setError(err.message))
//     // }

//     // useEffect(() => {
//     //     getData();
//     // }, [])


//     async function getData(){
//         try{
//             fetch("https://dummyjson.com/products")
//         }
        
//         .then((res) => res.json())
//         .then((response) => {
//             setData(response.products);
//             setIsLoading(!isLoading);
//         })
//         catch{
            
//         }
//     }

//     useEffect(() => {
//         getData();
//     }, [])

//     return (
//         <>
//             <h1>Product Data</h1>
//             {
//                 isLoading ? "Loading" : 
//                 data.map((product) => {
//                     return (
//                         <div key={product.id}>
//                             <h3>{product.title}</h3>
//                             <h3>{product.category}</h3>
//                             <h3>{product.price}</h3>
//                         </div>
//                     )
//                 } )
//             }
//         </>
//     )
// }

// export default Products;