import './productCard.css';
import AddToCartButton from "../addToCartButton/addToCart.jsx";

// eslint-disable-next-line react/prop-types
function ProductCard(props){
    // eslint-disable-next-line react/prop-types
    const {pName, pDesc,pPrice} = props;
    return (
        <>
            <div className="pcard">
                <img src="https://picsum.photos/200" alt=""/>
                <h1 className="productTitle">{pName}</h1>
                <p>{pDesc}</p>
                <p>{pPrice}</p>
                <AddToCartButton />
            </div>
        </>

    )
}



export default ProductCard