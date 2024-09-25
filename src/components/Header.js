import React from "react";
import { Link } from 'react-router-dom';
import { Offcanvas } from "react-bootstrap";
import { IoMenu } from "react-icons/io5";

function Header() {

    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <nav>
                <ul>
                    <li className="bar-menu-btn-container">
                        <button className="white-bar-menu-btn" onClick={handleShow}><IoMenu /></button>
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
                </ul>
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

export default Header;
