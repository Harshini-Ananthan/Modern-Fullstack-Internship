'use client'

import { useEffect, useState } from "react";
// import { prisma } from "../lib/prisma";
import storeProducts, { getAllProducts } from "../actions/storeProducts";


export default function ProductCard(){

    const [products, setProducts] = useState([]);
    async function fetchProducts(){
        try{
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            // storeProducts(data);
            setProducts(data);
             
            const output = await getAllProducts();
            console.log("Browser", output);
        }
        catch(error){
            console.log("Error fetching the products");
        }
    }

    

    useEffect(()=>{
        fetchProducts();
        
    }, [])



    // if(products.length > 0){
    //     storeProducts(products);
    // }

    return (
        <>
            <h1>Products</h1>
            <div className="flex flex-col gap-5 mx-5">
            {
                products.map((product: any) =>(
                    <div key={product.id} className="border bg-grey p-5">
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                        <p>{product.category}</p>
                    </div>
                ))
            }
            </div>
        </>
    )
}
