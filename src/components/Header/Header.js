import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const {user, signingOut} = useFirebase();
    return (
        <div>
            <div className="navbar">
            <Link to="/home">Home</Link>
           {user.email ?'': <Link to="/login">Login</Link>}
            <Link to="/register">Registration</Link>
            {user?.email  && <button onClick={signingOut}>Log Out</button>}
            </div>
        </div>
    );
};

export default Header;