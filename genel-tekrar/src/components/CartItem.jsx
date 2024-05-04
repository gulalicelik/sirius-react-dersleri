// eslint-disable-next-line react/prop-types
import {Link} from "react-router-dom";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const CartItem = ({cartItem}) => {
    // eslint-disable-next-line react/prop-types
    const {id, title, price, quantity} = cartItem;

    const handleRemoveFromCart = () => {
        axios.delete(`${import.meta.env.VITE_BASE_URL}/cart/${id}`)
            .then((response) => {
                console.log(response.data)
            }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <>
            <div className="card" style={{border : "2px solid red"}} key={id}>
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="..."/>
                <div className="card-body">

                    <Link to={`/detail/${id}`} className="btn btn-primary">{title}</Link>
                    <p>{price}</p>
                    <p>{quantity}</p>
                    <button onClick={handleRemoveFromCart}>Delete</button>
                </div>
            </div>
        </>


    );
}
export default CartItem;