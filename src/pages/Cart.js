import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "../assets/css/cart.css";

function Cart() {
    const [cartItems, setCartItems] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []);

    function formatCart(price) {
        return `$${(price / 100).toFixed(2)}`;
    }

    function updateQuantity(action, item) {
        const updatedCartItems = cartItems.map(cartItem => {
            if (cartItem.id === item.id) {
                let newQuantity = cartItem.quantity;
                if (action === "increase") {
                    newQuantity += 1;
                } else if (action === "subtract" && cartItem.quantity > 1) {
                    newQuantity -= 1;
                }
                return { ...cartItem, quantity: newQuantity };
            }
            return cartItem;
        });

        setCartItems(updatedCartItems);
        localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    }

    function removeItem(id) {
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCartItems);
        localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    }

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const tax = subtotal * 0.13;
    const shipping = 0;
    const total = subtotal + tax + shipping;

    return (
        <main>
            <h1>Cart</h1>
            <section className="cart-container">
                <div className="cart-items-container">
                    <Row className="cart-table-headings">
                        <Col md={6}>Item</Col>
                        <Col md={3}>Quantity</Col>
                        <Col md={3}>Subtotal</Col>
                    </Row>
                    {cartItems.length === 0 ? (
                        <div>Cart is empty</div>
                    ) : (
                        cartItems.map((item, index) => (
                            <Row className="cart-item" key={index}>
                                <Col md={6} className="cart-item-column">
                                    <div className="cart-image-container">
                                        <img className="cart-product-img" src={item.image} alt="product" />
                                        <div className="cart-item-info">
                                            <h5 className="cart-item-name">{item.name}</h5>
                                            {item.variation && <div className="cart-item-variation">Variation: {item.variation}</div>}
                                            <div>
                                                Price: {formatCart(item.price)}
                                            </div>
                                            <button className="remove-from-cart-btn" onClick={() => removeItem(item.id)}>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={3} className="quantity-container cart-item-column">
                                    <button className="cart-quantity-btn" onClick={() => updateQuantity("subtract", item)}>
                                        <IoIosArrowDown />
                                    </button>
                                    <div className="quantity-input">
                                        {item.quantity}
                                    </div>
                                    <button className="cart-quantity-btn" onClick={() => updateQuantity("increase", item)}>
                                        <IoIosArrowUp />
                                    </button>
                                </Col>
                                <Col md={3} className="cart-subtotal cart-item-column">
                                    {formatCart(item.price * item.quantity)}
                                </Col>
                            </Row>
                        ))
                    )}
                </div>
                <div className="cart-total-container">
                    <h1 className="m-0">Cart Totals</h1>
                    <hr />
                    <div className="cart-total">
                        <div className="space-between">
                            <div>Subtotal:</div>
                            <div>{formatCart(subtotal)}</div>
                        </div>
                        <div className="space-between">
                            <div>Shipping:</div>
                            <div>{formatCart(shipping)}</div>
                        </div>
                        <div className="space-between">
                            <div>Tax:</div>
                            <div>{formatCart(tax)}</div>
                        </div>
                        <hr />
                        <div className="space-between">
                            <div>Total:</div>
                            <div>{formatCart(total)}</div>
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
