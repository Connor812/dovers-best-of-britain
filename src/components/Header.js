import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/">About Us</Link>
                </li>
                <li>
                    <Link to="/pastries">Pastries</Link>
                </li>
                <li>
                    <Link to="/teas">Teas</Link>
                </li>
                <li>
                    <Link to="/biscuits">Biscuits</Link>
                </li>
                <li>
                    <Link to="/chocolate_bars">Chocolate Bars</Link>
                </li>
                <li>
                    <Link to="/candies">Candies</Link>
                </li>
                <li>
                    <Link to="/crisps">Crisps</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
