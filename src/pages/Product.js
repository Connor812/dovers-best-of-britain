import React from "react";
import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import { Carousel, Row, Col } from "react-bootstrap";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import "../assets/css/product.css";

function Product() {

    const { id } = useParams();
    console.log(id);

    return (
        <main>
            <Row className="display-product-container">
                <Col md={6} sm={12} className="image-container">
                    <Carousel className="product-carousel">
                        <Carousel.Item>
                            <img className="product-carousel-image" src="/assets/images/test-product.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="product-carousel-image" src="/assets/images/test-product.png" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="product-carousel-image" src="/assets/images/test-product.png" alt="" />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col md={6} sm={12} className="product-information">
                    <div>
                        <h1 className="product-name m-0">Product Name</h1>
                        <div className="item-number">
                            Sku: <span>123456</span>
                        </div>
                        <h2 className="m-0 mb-4">
                            $99.99
                        </h2>
                        <p className="m-0 mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vitae possimus odit commodi tempora illum iure dolorum cupiditate recusandae dignissimos cumque quas, animi, quaerat non voluptatem consequuntur corporis nostrum ipsa sint deleniti tempore est ex sed. Hic velit debitis assumenda odio ullam omnis incidunt, dolorum libero esse architecto minima inventore?
                        </p>
                        <div>
                            Quantity:
                            <div className="quantity-buttons-container">
                                <button className="quantity-buttons">
                                    <MdOutlineKeyboardArrowDown />
                                </button>
                                1
                                <button className="quantity-buttons">
                                    <MdOutlineKeyboardArrowUp />
                                </button>
                            </div>
                        </div>
                        <div className="mt-4">
                            <button className="add-to-cart-btn">
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </main>
    );
}

export default Product;
