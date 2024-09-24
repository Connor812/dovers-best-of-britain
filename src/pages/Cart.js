import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "../assets/css/cart.css";

function Cart() {
    return (
        <main>
            <h1>Cart</h1>
            <section className="cart-container">
                <div className="cart-items-container">
                    <Row className="cart-table-headings">
                        <Col md={6}>
                            Item
                        </Col>
                        <Col md={3}>
                            Quantity
                        </Col>
                        <Col md={3}>
                            Subtotal
                        </Col>
                    </Row>
                    <Row className="cart-item">
                        <Col md={6} className="cart-item-column">
                            <div className="cart-image-container">
                                <img className="cart-product-img" src="/assets/images/test-product.png" alt="product" />
                                <div className="cart-item-info">
                                    <h5 className="cart-item-name">Product Name</h5>
                                    <div>
                                        Price: $9.00
                                    </div>
                                    <button className="remove-from-cart-btn">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="quantity-container cart-item-column">
                            <input type="text" className="quantity-input" value="1" />
                        </Col>
                        <Col md={3} className="cart-subtotal cart-item-column">
                            $29.99
                        </Col>

                    </Row>
                    <Row className="cart-item">
                        <Col md={6} className="cart-item-column">
                            <div className="cart-image-container">
                                <img className="cart-product-img" src="/assets/images/test-product.png" alt="product" />
                                <div className="cart-item-info">
                                    <h5 className="cart-item-name">Product Name</h5>
                                    <div>
                                        Price: $9.00
                                    </div>
                                    <button className="remove-from-cart-btn">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="quantity-container cart-item-column">
                            <input type="text" className="quantity-input" value="1" />
                        </Col>
                        <Col md={3} className="cart-subtotal cart-item-column">
                            $29.99
                        </Col>

                    </Row>
                    <Row className="cart-item">
                        <Col md={6} className="cart-item-column">
                            <div className="cart-image-container">
                                <img className="cart-product-img" src="/assets/images/test-product.png" alt="product" />
                                <div className="cart-item-info">
                                    <h5 className="cart-item-name">Product Name</h5>
                                    <div>
                                        Price: $9.00
                                    </div>
                                    <button className="remove-from-cart-btn">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="quantity-container cart-item-column">
                            <input type="text" className="quantity-input" value="1" />
                        </Col>
                        <Col md={3} className="cart-subtotal cart-item-column">
                            $29.99
                        </Col>

                    </Row>
                    <Row className="cart-item">
                        <Col md={6} className="cart-item-column">
                            <div className="cart-image-container">
                                <img className="cart-product-img" src="/assets/images/test-product.png" alt="product" />
                                <div className="cart-item-info">
                                    <h5 className="cart-item-name">Product Name</h5>
                                    <div>
                                        Price: $9.00
                                    </div>
                                    <button className="remove-from-cart-btn">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="quantity-container cart-item-column">
                            <input type="text" className="quantity-input" value="1" />
                        </Col>
                        <Col md={3} className="cart-subtotal cart-item-column">
                            $29.99
                        </Col>

                    </Row>
                    <Row className="cart-item">
                        <Col md={6} className="cart-item-column">
                            <div className="cart-image-container">
                                <img className="cart-product-img" src="/assets/images/test-product.png" alt="product" />
                                <div className="cart-item-info">
                                    <h5 className="cart-item-name">Product Name</h5>
                                    <div>
                                        Price: $9.00
                                    </div>
                                    <button className="remove-from-cart-btn">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="quantity-container cart-item-column">
                            <input type="text" className="quantity-input" value="1" />
                        </Col>
                        <Col md={3} className="cart-subtotal cart-item-column">
                            $29.99
                        </Col>

                    </Row>
                    <Row className="cart-item">
                        <Col md={6} className="cart-item-column">
                            <div className="cart-image-container">
                                <img className="cart-product-img" src="/assets/images/test-product.png" alt="product" />
                                <div className="cart-item-info">
                                    <h5 className="cart-item-name">Product Name</h5>
                                    <div>
                                        Price: $9.00
                                    </div>
                                    <button className="remove-from-cart-btn">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="quantity-container cart-item-column">
                            <input type="text" className="quantity-input" value="1" />
                        </Col>
                        <Col md={3} className="cart-subtotal cart-item-column">
                            $29.99
                        </Col>

                    </Row>
                    <Row className="cart-item">
                        <Col md={6} className="cart-item-column">
                            <div className="cart-image-container">
                                <img className="cart-product-img" src="/assets/images/test-product.png" alt="product" />
                                <div className="cart-item-info">
                                    <h5 className="cart-item-name">Product Name</h5>
                                    <div>
                                        Price: $9.00
                                    </div>
                                    <button className="remove-from-cart-btn">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="quantity-container cart-item-column">
                            <input type="text" className="quantity-input" value="1" />
                        </Col>
                        <Col md={3} className="cart-subtotal cart-item-column">
                            $29.99
                        </Col>

                    </Row>
                    <Row className="cart-item">
                        <Col md={6} className="cart-item-column">
                            <div className="cart-image-container">
                                <img className="cart-product-img" src="/assets/images/test-product.png" alt="product" />
                                <div className="cart-item-info">
                                    <h5 className="cart-item-name">Product Name</h5>
                                    <div>
                                        Price: $9.00
                                    </div>
                                    <button className="remove-from-cart-btn">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="quantity-container cart-item-column">
                            <input type="text" className="quantity-input" value="1" />
                        </Col>
                        <Col md={3} className="cart-subtotal cart-item-column">
                            $29.99
                        </Col>

                    </Row>
                    <Row className="cart-item">
                        <Col md={6} className="cart-item-column">
                            <div className="cart-image-container">
                                <img className="cart-product-img" src="/assets/images/test-product.png" alt="product" />
                                <div className="cart-item-info">
                                    <h5 className="cart-item-name">Product Name</h5>
                                    <div>
                                        Price: $9.00
                                    </div>
                                    <button className="remove-from-cart-btn">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="quantity-container cart-item-column">
                            <input type="text" className="quantity-input" value="1" />
                        </Col>
                        <Col md={3} className="cart-subtotal cart-item-column">
                            $29.99
                        </Col>

                    </Row>
                    <Row className="cart-item">
                        <Col md={6} className="cart-item-column">
                            <div className="cart-image-container">
                                <img className="cart-product-img" src="/assets/images/test-product.png" alt="product" />
                                <div className="cart-item-info">
                                    <h5 className="cart-item-name">Product Name</h5>
                                    <div>
                                        Price: $9.00
                                    </div>
                                    <button className="remove-from-cart-btn">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="quantity-container cart-item-column">
                            <input type="text" className="quantity-input" value="1" />
                        </Col>
                        <Col md={3} className="cart-subtotal cart-item-column">
                            $29.99
                        </Col>

                    </Row>
                    <Row className="cart-item">
                        <Col md={6} className="cart-item-column">
                            <div className="cart-image-container">
                                <img className="cart-product-img" src="/assets/images/test-product.png" alt="product" />
                                <div className="cart-item-info">
                                    <h5 className="cart-item-name">Product Name</h5>
                                    <div>
                                        Price: $9.00
                                    </div>
                                    <button className="remove-from-cart-btn">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="quantity-container cart-item-column">
                            <input type="text" className="quantity-input" value="1" />
                        </Col>
                        <Col md={3} className="cart-subtotal cart-item-column">
                            $29.99
                        </Col>

                    </Row>
                    <Row className="cart-item">
                        <Col md={6} className="cart-item-column">
                            <div className="cart-image-container">
                                <img className="cart-product-img" src="/assets/images/test-product.png" alt="product" />
                                <div className="cart-item-info">
                                    <h5 className="cart-item-name">Product Name</h5>
                                    <div>
                                        Price: $9.00
                                    </div>
                                    <button className="remove-from-cart-btn">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="quantity-container cart-item-column">
                            <input type="text" className="quantity-input" value="1" />
                        </Col>
                        <Col md={3} className="cart-subtotal cart-item-column">
                            $29.99
                        </Col>

                    </Row>
                    <Row className="cart-item">
                        <Col md={6} className="cart-item-column">
                            <div className="cart-image-container">
                                <img className="cart-product-img" src="/assets/images/test-product.png" alt="product" />
                                <div className="cart-item-info">
                                    <h5 className="cart-item-name">Product Name</h5>
                                    <div>
                                        Price: $9.00
                                    </div>
                                    <button className="remove-from-cart-btn">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="quantity-container cart-item-column">
                            <input type="text" className="quantity-input" value="1" />
                        </Col>
                        <Col md={3} className="cart-subtotal cart-item-column">
                            $29.99
                        </Col>

                    </Row>
                    <Row className="cart-item">
                        <Col md={6} className="cart-item-column">
                            <div className="cart-image-container">
                                <img className="cart-product-img" src="/assets/images/test-product.png" alt="product" />
                                <div className="cart-item-info">
                                    <h5 className="cart-item-name">Product Name</h5>
                                    <div>
                                        Price: $9.00
                                    </div>
                                    <button className="remove-from-cart-btn">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="quantity-container cart-item-column">
                            <input type="text" className="quantity-input" value="1" />
                        </Col>
                        <Col md={3} className="cart-subtotal cart-item-column">
                            $29.99
                        </Col>

                    </Row>
                    <Row className="cart-item">
                        <Col md={6} className="cart-item-column">
                            <div className="cart-image-container">
                                <img className="cart-product-img" src="/assets/images/test-product.png" alt="product" />
                                <div className="cart-item-info">
                                    <h5 className="cart-item-name">Product Name</h5>
                                    <div>
                                        Price: $9.00
                                    </div>
                                    <button className="remove-from-cart-btn">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="quantity-container cart-item-column">
                            <input type="text" className="quantity-input" value="1" />
                        </Col>
                        <Col md={3} className="cart-subtotal cart-item-column">
                            $29.99
                        </Col>

                    </Row>
                    <Row className="cart-item">
                        <Col md={6} className="cart-item-column">
                            <div className="cart-image-container">
                                <img className="cart-product-img" src="/assets/images/test-product.png" alt="product" />
                                <div className="cart-item-info">
                                    <h5 className="cart-item-name">Product Name</h5>
                                    <div>
                                        Price: $9.00
                                    </div>
                                    <button className="remove-from-cart-btn">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="quantity-container cart-item-column">
                            <input type="text" className="quantity-input" value="1" />
                        </Col>
                        <Col md={3} className="cart-subtotal cart-item-column">
                            $29.99
                        </Col>

                    </Row>
                    <Row className="cart-item">
                        <Col md={6} className="cart-item-column">
                            <div className="cart-image-container">
                                <img className="cart-product-img" src="/assets/images/test-product.png" alt="product" />
                                <div className="cart-item-info">
                                    <h5 className="cart-item-name">Product Name</h5>
                                    <div>
                                        Price: $9.00
                                    </div>
                                    <button className="remove-from-cart-btn">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="quantity-container cart-item-column">
                            <input type="text" className="quantity-input" value="1" />
                        </Col>
                        <Col md={3} className="cart-subtotal cart-item-column">
                            $29.99
                        </Col>

                    </Row>
                    <Row className="cart-item">
                        <Col md={6} className="cart-item-column">
                            <div className="cart-image-container">
                                <img className="cart-product-img" src="/assets/images/test-product.png" alt="product" />
                                <div className="cart-item-info">
                                    <h5 className="cart-item-name">Product Name</h5>
                                    <div>
                                        Price: $9.00
                                    </div>
                                    <button className="remove-from-cart-btn">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="quantity-container cart-item-column">
                            <input type="text" className="quantity-input" value="1" />
                        </Col>
                        <Col md={3} className="cart-subtotal cart-item-column">
                            $29.99
                        </Col>

                    </Row>
                    <Row className="cart-item">
                        <Col md={6} className="cart-item-column">
                            <div className="cart-image-container">
                                <img className="cart-product-img" src="/assets/images/test-product.png" alt="product" />
                                <div className="cart-item-info">
                                    <h5 className="cart-item-name">Product Name</h5>
                                    <div>
                                        Price: $9.00
                                    </div>
                                    <button className="remove-from-cart-btn">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="quantity-container cart-item-column">
                            <input type="text" className="quantity-input" value="1" />
                        </Col>
                        <Col md={3} className="cart-subtotal cart-item-column">
                            $29.99
                        </Col>

                    </Row>
                    <Row className="cart-item">
                        <Col md={6} className="cart-item-column">
                            <div className="cart-image-container">
                                <img className="cart-product-img" src="/assets/images/test-product.png" alt="product" />
                                <div className="cart-item-info">
                                    <h5 className="cart-item-name">Product Name</h5>
                                    <div>
                                        Price: $9.00
                                    </div>
                                    <button className="remove-from-cart-btn">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="quantity-container cart-item-column">
                            <input type="text" className="quantity-input" value="1" />
                        </Col>
                        <Col md={3} className="cart-subtotal cart-item-column">
                            $29.99
                        </Col>

                    </Row>
                    <Row className="cart-item">
                        <Col md={6} className="cart-item-column">
                            <div className="cart-image-container">
                                <img className="cart-product-img" src="/assets/images/test-product.png" alt="product" />
                                <div className="cart-item-info">
                                    <h5 className="cart-item-name">Product Name</h5>
                                    <div>
                                        Price: $9.00
                                    </div>
                                    <button className="remove-from-cart-btn">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="quantity-container cart-item-column">
                            <input type="text" className="quantity-input" value="1" />
                        </Col>
                        <Col md={3} className="cart-subtotal cart-item-column">
                            $29.99
                        </Col>

                    </Row>
                </div>
                <div className="cart-total-container">
                    <h1 className="m-0">
                        Cart Totals
                    </h1>
                    <hr />
                    <div className="cart-total">
                        <div className="space-between">
                            <div>
                                Subtotal:
                            </div>
                            <div>
                                $80.00
                            </div>
                        </div>
                        <div className="space-between">
                            <div>
                                Shipping:
                            </div>
                            <div>
                                $10.00
                            </div>
                        </div>
                        <div className="space-between">
                            <div>
                                Tax:
                            </div>
                            <div>
                                $5.00
                            </div>
                        </div>
                        <hr />
                        <div className="space-between">
                            <div>
                                Total:
                            </div>
                            <div>
                                $95.00
                            </div>
                        </div>
                        <div>
                            <button className="checkout-btn">Proceed To Checkout</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Cart;
