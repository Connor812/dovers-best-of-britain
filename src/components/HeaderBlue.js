import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Offcanvas, Collapse } from "react-bootstrap";
import { PostData } from "../utils/PostData";
import { BsCart4 } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

function HeaderBlue() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [openCategoryId, setOpenCategoryId] = useState(null); // State to track which category is open

    useEffect(() => {
        PostData("get-categories.php", {}).then((response) => {
            if (!response.status) {
                setError(response.error);
                setLoading(false);
            } else {
                setCategories(response.category);
                setLoading(false);
            }
        });
    }, []);

    const handleToggle = (categoryId) => {
        setOpenCategoryId((prevId) => (prevId === categoryId ? null : categoryId)); // Toggle open state
    };

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
                        <Link to="/">About Us</Link>
                    </li>
                    <li className="header-blue-link">
                        <Link onClick={handleShow}>Shop</Link>
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
                        <li>
                            <Link className="offcanvas-link scroll-in-underline" to="/">Home</Link>
                        </li>

                        {loading ? null : categories.map((category) => (
                            <li key={category.id} className="offcanvas-item">
                                {category.subcategories.length > 0 ? (
                                    <>
                                        <Link
                                            className="offcanvas-link scroll-in-underline"
                                            onClick={() => handleToggle(category.id)} // Toggle on click
                                            to="#"
                                        >
                                            {category.name}
                                            <IoIosArrowDown
                                                style={{
                                                    transition: "transform 0.3s",
                                                    transform: openCategoryId === category.id ? "rotate(180deg)" : "rotate(0deg)"
                                                }}
                                            />
                                        </Link>
                                        <Collapse in={openCategoryId === category.id}>
                                            <div>
                                                {category.subcategories.map((subcategory) => (
                                                    <Link
                                                        key={subcategory.id}
                                                        className="offcanvas-link d-block"
                                                        to={`/products/${subcategory.id}`}
                                                    >
                                                        {subcategory.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </Collapse>
                                    </>
                                ) : (
                                    <Link className="offcanvas-link scroll-in-underline" to={`/products/${category.id}`}>
                                        {category.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default HeaderBlue;
