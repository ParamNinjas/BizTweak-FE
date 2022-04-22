import React from "react";
import logo from '../../Images/bizlogo.png'
import Button from '@material-ui/core/Button';
import './Nav.css'


const Nav=() =>{
    return(
        <div className="Nav-con">
               <img
                            src={logo}
                            alt='Logo'
                            className='bizlogo'
                        />
            <ul className="navList">
                <li className="navItem">Home</li>
                <li className="navItem">Blog</li>
                <li className="navItem">About Us</li>
                <li className="navItem">Sign in</li>
                <li className="navItem">
                    <Button
                    variant="outlined" 
                    className="BtnReg"
                    >Register</Button>
                </li>
            </ul>
        </div>
    )
}

export default Nav