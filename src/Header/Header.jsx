import React, { useContext } from 'react';
import './Header.css'
import logo from '../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
        .then(result=>{})
        .catch(error=>console.error(error))
    }
    return (
        <nav>
            <div className="header">
                <img src={logo} alt="" />

                <div className="menu">
                    <Link to="/">Shop</Link>
                    <Link to="/order">Order</Link>
                    <Link to="/inventory">Manage Inventory</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/singup">SignUp</Link>
                    {
                        user && <span className='text-white'>Welcome {user.email} <button onClick={handleLogOut}>Log Out</button></span>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Header;