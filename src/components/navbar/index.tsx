import { NavLink } from "react-router-dom";
import "./styles.css"

const NavBar = () => {

    return (
        <div className="navbar-container">
            <div className="logo-container">
                <h4 className="logo">Diogo MalMa</h4>
            </div>
            <div className="links-container">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/Works">Works</NavLink>
            <NavLink to="/home">Contact</NavLink>
            </div>
            <div className="btn-navbar-container">
                <button> Let's Talk</button>
            </div>
        </div>
    )
}


export default NavBar;