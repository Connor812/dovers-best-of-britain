import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo-white-bg.png";
import Basket from "../assets/images/basket-of-chocolate.png";
import { Row, Col, Carousel } from "react-bootstrap";

import { GoSearch } from "react-icons/go";

import "../assets/css/home.css";

function Home() {
    return (
        <main>

            <div className="hero-container-wrapper">
                <div className="hero-container">
                    <img src={Logo} alt="Logo" className="home-logo" />
                    <div className="hero-text">
                        <span>Dovers Best Of Britain</span>
                        <br />
                        <p>
                            Dover's Best of Britain is proud to bring a taste of the UK to Port Dover and the surrounding areas with a delicious assortment of freshly baked British pies, pastries, and sweets. Our pies are baked fresh daily, using authentic recipes that capture the flavors of Britain, bringing comfort and nostalgia to those familiar with British cuisine, while offering a delightful new experience to others.
                        </p>
                    </div>
                </div>
            </div>

            <center className="mb-4">
                <p className="blue">
                    Search For Your Favourite Products
                </p>
                <div className="home-search-container">
                    <input type="text" className="home-search" placeholder="Enter product name, SKU etc..." />
                    <button className="search-icon">
                        <GoSearch />
                    </button>
                </div>
            </center>

            <Carousel className="mb-4" indicators={false} controls={false} interval={3000}>
                <Carousel.Item className="carousel-item-container">
                    <img className="home-carousel-img" src="/assets/images/meat-pie.png" alt="Meat Pie" />
                </Carousel.Item>
                <Carousel.Item className="carousel-item-container">
                    <img className="home-carousel-img" src="/assets/images/HP.png" alt="Meat Pie" />
                </Carousel.Item>
            </Carousel>

            <center className="p-2">
                <h5 className="shop-online-text mb-4 ">
                    Shop Online For In Store Pickup
                </h5>
            </center>

            <center>
                <Row className="categories-container mb-4">
                    <Col md={4} sm={6} className="category-container">
                        <div className="category chocolate-bg">
                            <Link className="category-title" to="/products/3Q6B3Z5HW4GHDLDJAYAGXVMR">
                                <h1>Chocolate</h1>
                            </Link>
                        </div>
                    </Col>
                    <Col md={4} sm={6} className="category-container">
                        <div className="category pastries-bg">
                            <Link className="category-title" to="/products/JU7PZOBDHTOGFRJRH6YXXWHV">
                                <h1>Meat Pies</h1>
                            </Link>
                        </div>
                    </Col>
                    <Col md={4} sm={6} className="category-container">
                        <div className="category biscuits-bg">
                            <Link className="category-title" to="/products/4Y3TAHUZNQECGHB4QK2YD5YG">
                                <h1>Biscuits</h1>
                            </Link>
                        </div>
                    </Col>
                    <Col md={4} sm={6} className="category-container">
                        <div className="category condiments-bg">
                            <Link className="category-title" to="/products/UBABGYWGIE3V5V6WSXPPOKBN">
                                <h1>Condiments</h1>
                            </Link>
                        </div>
                    </Col>
                    <Col md={4} sm={6} className="category-container">
                        <div className="category chips-bg">
                            <Link className="category-title" to="/products/4I5TINOL7CA24PDCHU5WILON">
                                <h1>Crisps</h1>
                            </Link>
                        </div>
                    </Col>
                    <Col md={4} sm={6} className="category-container">
                        <div className="category beverages-bg">
                            <Link className="category-title" to="/products/DJCSHY76ECKBU25IGH4W7TLK">
                                <h1>Beverages</h1>
                            </Link>
                        </div>
                    </Col>
                </Row>

                <section className="description-container">
                    <img src="/assets/images/bus.png" alt="bus" className="bus-img" />
                    <p>We are always on the lookout for what is new and popular and ivamus vehicula natoque gravida mattis ut efficitur gravida? Natoque phasellus netus non aliquet ligula. Tempus ac maecenas cubilia vulputate arcu volutpat dolor. Nam taciti potenti lit</p>
                </section>
            </center>
        </main>
    );
}

export default Home;
