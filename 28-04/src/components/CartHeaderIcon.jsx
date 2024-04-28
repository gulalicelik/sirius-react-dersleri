import {useState} from "react";

const CartHeaderIcon = (props) => {
    // eslint-disable-next-line react/prop-types
    const {count} = props;
    // const [cartCount, setCartCount] = useState(0);
    return (
        <>
            <span>Sepet ({count})</span>
            <CustomCompt count="CartHeaderIcon"/>
        </>
    );
}

export default CartHeaderIcon;