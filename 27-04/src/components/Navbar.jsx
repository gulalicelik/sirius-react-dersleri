import {Link} from "react-router-dom";

const Navbar = (props) => {
    const {tempName} = props;
    return (
        <div>
            <h1>{tempName}</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>

    );
}

export default Navbar