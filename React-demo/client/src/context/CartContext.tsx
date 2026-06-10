import {createContext, useState} from "react";

// create the cart context
export const CartContext = createContext<any>(null);

// create the cartContext Provider- CartProvider
export const CartProvider = ({children}:any) => {
    const [cart, setCart] = useState([]);
    return(
        <CartContext.Provider value = {{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}

//wrap the entire App component inside CartProvider
