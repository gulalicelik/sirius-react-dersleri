import {useContext} from "react";
import {CartContext} from "./CartContext.jsx";

const ProductCard = () =>{

    const {incrementCartAmount} = useContext(CartContext);

    return(

        <>
    <div className="card-container">
        <div className="card">
            <div className="card-image">
                <img src="https://via.placeholder.com/150" alt="product" />
            </div>
            <div className="card-content">
                <h2>Product Name</h2>
                <p>Product Description</p>
                <p>Product Price</p>
                <button
                    onClick={incrementCartAmount}
                    className="add-to-cart-btn"> Add to cart</button>
            </div>
        </div>
    </div>
    </>);
}

export default ProductCard;