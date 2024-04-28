import {Route, Routes} from 'react-router-dom';
import './App.css'
import HomePage from "./pages/Home/HomePage.jsx";
import AboutPage from "./pages/About/AboutPage.jsx";
import ContactPage from "./pages/Contact/ContactPage.jsx";
import Navbar from "./components/Navbar.jsx";


function App() {
    return (
        <>
            <div className="app">
                <div className="App">
                    <Navbar tempName="App nav"/>
                    {/*<Sidebar/>*/}
                    <Routes>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path='/about' element={<AboutPage/>}/>
                        <Route path='/contact' element={<ContactPage/>}/>
                    </Routes>
                </div>
            </div>

        </>
    )
}

export default App
