import ProductCard from "../components/ProductCard.jsx";
import {useEffect, useState} from "react";
import axios from "axios";


const CatalogPage = () => {

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState("")
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/products`)
            .then((response) => {
                console.log(response.data)
                setProducts(response.data)
            }).catch((error) => {
            console.log(error)
        });

    }, [])

    useEffect(() => {
    const tempCategories = products.map((product) => {
        return product.category
    });
    const uniqueCategories = [...new Set(tempCategories)]

    setCategories(uniqueCategories)
    }, [products]);

    const handleSearch = (event) => {
        console.log(event.target.value)

        if(event.target.value === ""){
            axios.get(`${import.meta.env.VITE_BASE_URL}/products`)
            .then((response) => {
                console.log(response.data)
                setProducts(response.data)
            }).catch((error) => {
            console.log(error)
        });
        }
        const filteredProducts = products.filter((product) => {
            return product.title.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setProducts(filteredProducts)
    }
    return (
        <div>
            <h1>CatalogPage</h1>
            <input type="text" className="form-control" placeholder="Search..."
            onChange={handleSearch}
            />
            {categories && categories.map((category) => {
                return <button className="btn btn-primary" key={category}>{category}</button>
            })}
            <div className="row">
                {products.map((product) => {
                    return <ProductCard key={product.id} product={product}/>
                })}
            </div>



        </div>
    );
}

export default CatalogPage;