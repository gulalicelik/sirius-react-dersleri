import {useEffect, useState} from "react";
import axios from "axios";
import CartItem from "../components/CartItem.jsx";

const CartPage = () => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/cart`)
            .then((response) => {
                console.log(response.data)
                setCart(response.data)
            }).catch((error) => {
            console.log(error)
        });
    }, [])
        return (
        <div>
            <h1>CartPage</h1>
            {cart.map((cartItem) => {
               return  <CartItem key={cartItem.id} cartItem={cartItem}/>
            })}
        </div>
    );
}

export default CartPage;