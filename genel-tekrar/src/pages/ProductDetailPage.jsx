import {useParams} from "react-router-dom";
import { useEffect, useState} from "react";
import axios from "axios";


const ProductDetailPage = () => {
    const id = useParams().id;

    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`)
            .then((response) => {
                console.log(response.data)
                setProduct(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);


    console.log(id);
    return (
        <div>
            <h1>ProductDetailPage</h1>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </div>
    );
}

export default ProductDetailPage;