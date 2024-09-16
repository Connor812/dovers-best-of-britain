import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo-white-bg.png";
import Basket from "../assets/images/basket-of-chocolate.png";
import Carousel from 'react-bootstrap/Carousel';

import { GoSearch } from "react-icons/go";

import "../assets/css/home.css";

function Home() {
    return (
        <main>

            <div className="hero-container-wrapper">
                <div className="hero-container">

                    <img src={Logo} alt="Logo" className="home-logo" />

                    <div className="hero-text">
                        <span>CONFECTION PERFECTION</span>
                        <br />
                        British  brands that you've been missing
                        <br />
                        and pies and pastries that taste like home.
                        <br /><br />
                        347 Main Street Port Dover N0A1N0  Map
                        <br />
                        Open Tue-Sun 11-5  (226) 290-1868
                    </div>
                    <img className="hero-basket-of-chocolate" src={Basket} alt="Basket Of Chocolate" />
                </div>
            </div>


            <center className="mb-4">
                <p className="blue">
                    We carry a large range of items that are <br /> popular with English families all over the world.
                </p>
                <div className="home-search-container">
                    <input type="text" className="home-search" placeholder="Enter product name, SKU etc..." />
                    <button className="search-icon">
                        <GoSearch />
                    </button>
                </div>
            </center>

            <Carousel indicators={false}>
                <Carousel.Item className="carousel-item-container">
                    <img className="home-carousel-img" src="/assets/images/meat-pie.png" alt="Meat Pie" />
                    <h1 className="pie-day">
                        EVERYDAY IS PIE DAY!
                    </h1>
                    <div className="meat-pie-links">
                        <Link className="meat-pie-link">Meat</Link>
                        <Link className="meat-pie-link">Chicken</Link>
                        <Link className="meat-pie-link">Vegetable</Link>
                        <Link className="meat-pie-link">Steak & Kidney</Link>
                        <Link className="meat-pie-link">Cheese & Onion</Link>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="carousel-item-container">
                    <img className="home-carousel-img" src="/assets/images/HP.png" alt="Meat Pie" />
                    <h1 className="pass-sauce">"Pass The <br /> Sauce Mate"</h1>
                    <h1 className="favs">"We Have <br /> Our Favs"</h1>
                </Carousel.Item>
            </Carousel>

            <section className="categories">

            </section>

        </main>
    );
}

export default Home;
