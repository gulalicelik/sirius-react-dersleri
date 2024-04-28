// import './App.css'
// import ProductCard from "./components/ProductCard.jsx";
// import CartHeaderIcon from "./components/CartHeaderIcon.jsx";
import Navbar from "./components/Navbar.jsx";
import {ThemeProvider} from "./components/ThemeContext.jsx";

function App() {

  return (
    <>
        {/* eslint-disable-next-line react/no-children-prop */}
        <ThemeProvider children={
            <Navbar />
        } />

    </>
  )
}

export default App
