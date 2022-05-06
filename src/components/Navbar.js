import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './NavbarStyles.css'
import Button from "./Button/Button";
import "./Button/Button.css";
import logo from '../assets/log.png'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <Link to='/'><img src={logo} alt="Logo" width='170px' height='auto' /></Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/training'>Blog</Link>
                </li>
                {/* <li>
                    <Link to='/recruitment'>Recruitment</Link>
                </li> */}
                <li>
                    <Link to='/pricing'>About Us</Link>
                </li>
                <li>
                    <Link to='/contact'>Sign In</Link>
                </li>
                <li className="nav-btn">
            <Button text={"Register"} btnClass={"btn-dark"} href={"#faq"} />
          </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: '#fff' }} />) : (<FaBars size={20} style={{ color: '#fff' }} />)}

            </div>
        </div>
    )
}

export default Navbar
