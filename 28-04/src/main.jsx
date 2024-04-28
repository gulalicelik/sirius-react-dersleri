import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ThemeProvider} from "./components/ThemeContext.jsx";
import {CartProvider} from "./components/CartContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <>
        {/* eslint-disable-next-line react/no-children-prop */}
        <CartProvider children={
            // eslint-disable-next-line react/no-children-prop
            <ThemeProvider children={
                <App/>
            }/>
        }/>
    </>

    // </React.StrictMode>,
)
