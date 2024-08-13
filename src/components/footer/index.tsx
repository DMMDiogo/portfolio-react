import './styles.css'
import { NavLink } from 'react-router-dom'

const Footer = () => { 

    return (
        <div className='footer-container'>
            <div className='logo-footer-container'>
            <h4 className="logo">Diogo MalMa</h4>
            </div>
            <div className='links-container footer'>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/Works">Works</NavLink>
            <NavLink to="/home">Contact</NavLink>
            </div>
               


        </div>

    )
}

export default Footer