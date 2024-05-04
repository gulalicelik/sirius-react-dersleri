// eslint-disable-next-line react/prop-types
import {Link} from "react-router-dom";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const ProductCard = ({product}) => {
    // eslint-disable-next-line react/prop-types
    // eslint-disable-next-line react/prop-types
    const {id, title, price} = product;

    // const id = product.id;
    // const title = product.title;
    // const price = product.price;


    const handleAddToCart = () => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/cart`)
            .then((response) => {
                console.log(response.data)

                const cartItem = response.data.find((cartItem) => {
                    return cartItem.product_id === id
                })

                if (cartItem) {
                    axios.patch(`${import.meta.env.VITE_BASE_URL}/cart/${cartItem.id}`, {
                        quantity : cartItem.quantity + 1
                    }).then((response) => {
                        console.log(response.data)
                    }).catch((error) => {
                        console.log(error)
                    })
                } else {
                    axios.post(`${import.meta.env.VITE_BASE_URL}/cart`, {
                        title,
                        price,
                        product_id : id,
                        quantity : 1
                    }).then((response) => {
                        console.log(response.data)
                    }).catch((error) => {
                        console.log(error)
                    })
                }

            }).catch((error) => {
            console.log(error)
        })

    }


    return (
        <div className="card" style={{border : "2px solid red"}} key={id}>
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="..."/>
            <div className="card-body">

                <Link to={`/detail/${id}`} className="btn btn-primary">{title}</Link>
                <p>{price}</p>
                <button
                    onClick={handleAddToCart}
                >Sepete ekle
                </button>
            </div>
        </div>
    );
}
export default ProductCard;