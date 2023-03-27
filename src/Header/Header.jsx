import React from 'react';
import './Header.css'
import logo from '../images/Logo.svg'

const Header = () => {
    return (
        <nav>
           <div className="header">
            <img src={logo} alt="" />

            <div className="menu">
                <a href="/Home">Order</a>
                <a href="/Order">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
            </div> 
        </nav>
    );
};

export default Header;