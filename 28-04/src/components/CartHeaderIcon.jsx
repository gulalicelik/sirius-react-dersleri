import {useContext} from "react";
import {CartContext} from "./CartContext.jsx";

const CartHeaderIcon = () => {
const {cartAmount} = useContext(CartContext);

    return (
        <>
            <span>Sepet ({cartAmount})</span>
        </>
    );
}

export default CartHeaderIcon;