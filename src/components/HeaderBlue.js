import React from "react";
import { Link } from 'react-router-dom';
import { Offcanvas } from "react-bootstrap";
import { BsCart4 } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";

function HeaderBlue() {

    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <nav className="header-blue">
                <ul>
                    <li>
                        <img className="header-logo" src="/assets/images/logo.png" alt="Logo" />
                    </li>
                    <li className="bar-menu-btn-container">
                        <button className="bar-menu-btn" onClick={handleShow}><IoMenu /></button>
                    </li>
                    <li className="header-blue-link">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="header-blue-link">
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li className="header-blue-link">
                        <Link to="/">About Us</Link>
                    </li>
                    <li className="header-blue-link">
                        <Link to="/pastries">Pastries</Link>
                    </li>
                    <li className="header-blue-link">
                        <Link to="/teas">Teas</Link>
                    </li>
                    <li className="header-blue-link">
                        <Link to="/biscuits">Biscuits</Link>
                    </li>
                    <li className="header-blue-link">
                        <Link to="/chocolate_bars">Chocolate Bars</Link>
                    </li>
                    <li className="header-blue-link">
                        <Link to="/candies">Candies</Link>
                    </li>
                    <li className="header-blue-link">
                        <Link to="/crisps">Crisps</Link>
                    </li>
                </ul>
                <Link className="shopping-cart-icon" to="/cart"><BsCart4 /></Link>
            </nav>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="menu-title">Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="offcanvas-navbar">
                        <li className="">
                            <Link className="offcanvas-link scroll-in-underline" to="/">Home</Link>
                        </li>
                        <li className="">
                            <Link className="offcanvas-link scroll-in-underline" to="/shop">Shop</Link>
                        </li>
                        <li className="">
                            <Link className="offcanvas-link scroll-in-underline" to="/">About Us</Link>
                        </li>
                        <li className="">
                            <Link className="offcanvas-link scroll-in-underline" to="/pastries">Pastries</Link>
                        </li>
                        <li className="">
                            <Link className="offcanvas-link scroll-in-underline" to="/teas">Teas</Link>
                        </li>
                        <li className="">
                            <Link className="offcanvas-link scroll-in-underline" to="/biscuits">Biscuits</Link>
                        </li>
                        <li className="">
                            <Link className="offcanvas-link scroll-in-underline" to="/chocolate_bars">Chocolate Bars</Link>
                        </li>
                        <li className="">
                            <Link className="offcanvas-link scroll-in-underline" to="/candies">Candies</Link>
                        </li>
                        <li className="">
                            <Link className="offcanvas-link scroll-in-underline" to="/crisps">Crisps</Link>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default HeaderBlue;