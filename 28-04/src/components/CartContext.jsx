import { createContext, useState } from 'react';

export const CartContext = createContext(0);

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {

    const [cartAmount, setCartAmount] = useState(0);

    const  incrementCartAmount = () => {
        setCartAmount(cartAmount + 1);
    }


    return (
        <CartContext.Provider value={{ cartAmount, incrementCartAmount }}>
            {children}
        </CartContext.Provider>
    );
};