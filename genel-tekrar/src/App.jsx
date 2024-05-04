import './App.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import CatalogPage from "./pages/CatalogPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import Navbar from "./components/Navbar.jsx";
import CartPage from "./pages/Cart.jsx";

function App() {



  return (
    <>
        <Navbar />

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/detail/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
        </Routes>
    </>
  )
}

export default App
