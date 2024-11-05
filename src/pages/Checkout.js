import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner, Alert } from 'react-bootstrap';
import { PaymentForm, CreditCard } from "react-square-web-payments-sdk";
import { PostData } from '../utils/PostData';
import { Collapse } from 'react-bootstrap';
import "../assets/css/checkout.css";

function Checkout() {

    const navigate = useNavigate();
    const shippingForm = useRef();
    const pickupForm = useRef();
    const [openShipping, setOpenShipping] = useState(false);
    const [openPickup, setOpenPickup] = useState(false);
    const [cartItems, setCartItems] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []);
    const [subtotal, setSubtotal] = useState(
        cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    );
    const [hst, setHst] = useState(subtotal * 0.13);
    const [shipping, setShipping] = useState(0);
    const [total, setTotal] = useState(subtotal + hst + shipping);
    const today = new Date();
    const formattedToday = today.toISOString().split('T')[0];
    const [proceedToPayment, setProceedToPayment] = useState("Proceed To Payment");
    const [error, setError] = useState(null);
    const [order, setOrder] = useState(null);
    const [stage, setStage] = useState("checkout");

    function formatPrice(price) {
        return `$${(price / 100).toFixed(2)}`;
    }

    useEffect(() => {
        const newHst = Math.round((subtotal + shipping) * 0.13);
        const newTotal = subtotal + newHst + shipping;
        setHst(newHst);
        setTotal(newTotal);
    }, [subtotal, shipping]);

    function handleOpenShipping() {
        setOpenShipping(!openShipping);
        setOpenPickup(false);

        if (!openShipping) {
            setShipping(2000);
        } else {
            setShipping(0);
        }
    }

    function handleOpenPickup() {
        setOpenPickup(!openPickup);
        setOpenShipping(false);
        setShipping(0);
    }

    function validateForm(formData) {
        const data = Object.fromEntries(formData.entries());
        let isValid = true;

        for (const [key, value] of Object.entries(data)) {
            if (!value && key !== "apt") {
                setError(`The field ${key} is required`);
                isValid = false;
                break;
            }
        }
        return isValid ? data : null;
    }

    function handleSubmit() {
        setProceedToPayment(<Spinner />);
        setError(null);
        if (!openShipping && !openPickup) {
            setError("Please select a shipping method");
            setProceedToPayment("Proceed To Payment");
            return;
        }

        if (openShipping) {
            const shippingFormData = new FormData(shippingForm.current);

            const shippingData = validateForm(shippingFormData);
            if (!shippingData) {
                setProceedToPayment("Proceed To Payment");
                return;
            }

            PostData('create-order.php', {
                shippingData: shippingData,
                cartItems: cartItems,
                total: total.toFixed(0),
                hst: hst.toFixed(0),
                type: 'shipping'
            }).then((result) => {
                setStage("payment");
                setOrder(result.order);
            });
        } else if (openPickup) {
            const pickupFormData = new FormData(pickupForm.current);

            const pickupData = validateForm(pickupFormData);
            if (!pickupData) {
                setProceedToPayment("Proceed To Payment");
                return;
            }

            PostData('create-order.php', {
                pickupData: pickupData,
                cartItems: cartItems,
                total: total.toFixed(0),
                hst: hst.toFixed(0),
                type: 'pickup'
            }).then((result) => {
                setStage("payment");
                setOrder(result.order);
            });
        }
    }

    const cardTokenizeResponseReceived = (tokenReceived) => {
        if (tokenReceived.status !== "OK") {
            setError(tokenReceived.errors[0].detail);
            return;
        }

        const token = tokenReceived.token;
        const recipient = order.fulfillments.shipment_details ? order.fulfillments.shipment_details.recipient : order.fulfillments.pickup_details.recipient;

        PostData('process-payment.php', {
            order_id: order.id,
            token: token,
            total: order.total_money.amount,
            name: recipient.display_name,
            email: recipient.email_address,
            phone: recipient.phone_number,
        }).then((result) => {
            if (!result.status) {
                setError(result.error);
            }
            navigate("/thankyou");
        })
    }


    if (stage === "checkout") {
        return (
            <main>
                <center>
                    <section className='checkout-form'>
                        <h1 className='time-regular'>
                            Billing Information
                        </h1>
                        <hr className='w-100' />
                        <div className='checkout-options'>
                            <input
                                type="checkbox"
                                id="shipping"
                                checked={openShipping}
                                onChange={handleOpenShipping}
                            />
                            <label htmlFor="shipping">Shipping + $20.00</label>
                        </div>
                        <div className='checkout-options mb-3'>
                            <input
                                type="checkbox"
                                id="pickup"
                                checked={openPickup}
                                onChange={handleOpenPickup}
                            />
                            <label htmlFor="pickup">Pickup</label>
                        </div>
                        {error && <Alert variant="danger" style={{ width: '100%' }}>{error}</Alert>}
                        <Collapse className='shipping-form-info' in={openShipping}>
                            <div id="example-collapse-text">
                                <form className="w-100" id="shipping-form" ref={shippingForm}>
                                    <div className="row">
                                        <div
                                            className="input-container col-6"
                                            id="address-form"
                                        >
                                            <input
                                                required
                                                type="text"
                                                id="first-name"
                                                className="checkout-input"
                                                placeholder="First Name"
                                                name="first-name"
                                                aria-label="First Name"
                                            />
                                        </div>

                                        <div className="input-container col-6">
                                            <input
                                                required
                                                type="text"
                                                id="last-name"
                                                className="checkout-input"
                                                placeholder="Last Name"
                                                name="last-name"
                                                aria-label="Last Name"
                                            />
                                        </div>
                                    </div>

                                    <div className="input-container">
                                        <input
                                            required
                                            type="text"
                                            id="email"
                                            className="checkout-input"
                                            placeholder="Email"
                                            name="email"
                                            aria-label="Email"
                                        />
                                    </div>

                                    <div className="input-container">
                                        <input
                                            required
                                            type="text"
                                            id="phone"
                                            className="checkout-input"
                                            placeholder="Phone"
                                            name="phone"
                                            aria-label="Phone Number"
                                        />
                                    </div>

                                    <div className="input-container">
                                        <input
                                            required
                                            type="text"
                                            id="street"
                                            className="checkout-input"
                                            placeholder="Street"
                                            name="street"
                                            aria-label="Street Address"
                                        />
                                    </div>
                                    <div className="input-container">
                                        <input
                                            type="text"
                                            id="Apt / Suite / Unit"
                                            className="checkout-input"
                                            placeholder="Apt / Suite / Unit (optional)"
                                            name="apt"
                                            aria-label="Apt / Suite / Unit (optional)"
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="input-container col-6">
                                            <input
                                                required
                                                type="text"
                                                id="city"
                                                className="checkout-input"
                                                placeholder="City"
                                                name="city"
                                                aria-label="City"
                                            />
                                        </div>

                                        <div className="input-container col-6">
                                            <select
                                                data-field="country_id"
                                                name="country"
                                                className="checkout-input"
                                                id="country_id"
                                                defaultValue=""
                                                aria-label="Country"
                                            >
                                                <option
                                                    value=""
                                                    disabled=""
                                                >
                                                    Select Country
                                                </option>
                                                <option value="CA">Canada</option>
                                                <option value="US">United States</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-container col-6">
                                            <input
                                                required
                                                type="text"
                                                id="postal-code"
                                                className="checkout-input"
                                                placeholder="Postal Code"
                                                name="postal-code"
                                                aria-label="Postal Code"
                                            />
                                        </div>
                                        <div className="input-container col-6">
                                            <input
                                                required
                                                type="text"
                                                id="province"
                                                className="checkout-input"
                                                placeholder="Province/State"
                                                name="province"
                                                aria-label="Province/State"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Collapse>

                        <Collapse in={openPickup}>
                            <div id="example-collapse-text">
                                <form id="pickup-form" ref={pickupForm}>
                                    <div>
                                        <div className="row">
                                            <div
                                                className="input-container col-6"
                                                id="address-form"
                                            >
                                                <input
                                                    required
                                                    type="text"
                                                    id="first-name"
                                                    className="checkout-input"
                                                    placeholder="First Name"
                                                    name="first-name"
                                                    aria-label="First Name"
                                                />
                                            </div>

                                            <div className="input-container col-6">

                                                <input
                                                    required
                                                    type="text"
                                                    id="last-name"
                                                    className="checkout-input"
                                                    placeholder="Last Name"
                                                    name="last-name"
                                                    aria-label="Last Name"
                                                />
                                            </div>
                                        </div>

                                        <div className="input-container">
                                            <input
                                                required
                                                type="text"
                                                id="email"
                                                className="checkout-input"
                                                placeholder="Email"
                                                name="email"
                                                aria-label="Email"
                                            />
                                        </div>

                                        <div className="input-container">
                                            <input
                                                required
                                                type="text"
                                                id="phone"
                                                className="checkout-input"
                                                placeholder="Phone"
                                                name="phone"
                                                aria-label="Phone Number"
                                            />
                                        </div>
                                        <center>
                                            Billing Address
                                        </center>
                                        <hr />
                                        <div className="input-container">
                                            <input
                                                required
                                                type="text"
                                                id="street"
                                                className="checkout-input"
                                                placeholder="Street"
                                                name="street"
                                                aria-label="Street Address"
                                            />
                                        </div>
                                        <div className="input-container">
                                            <input
                                                type="text"
                                                id="Apt / Suite / Unit"
                                                className="checkout-input"
                                                placeholder="Apt / Suite / Unit (optional)"
                                                name="apt"
                                                aria-label="Apt / Suite / Unit (optional)"
                                            />
                                        </div>
                                        <div className="row">
                                            <div className="input-container col-6">
                                                <input
                                                    required
                                                    type="text"
                                                    id="city"
                                                    className="checkout-input"
                                                    placeholder="City"
                                                    name="city"
                                                    aria-label="City"
                                                />
                                            </div>

                                            <div className="input-container col-6">
                                                <select
                                                    data-field="country_id"
                                                    name="country"
                                                    className="checkout-input"
                                                    id="country_id"
                                                    defaultValue=""
                                                    aria-label="Country"
                                                >
                                                    <option
                                                        value=""
                                                        disabled=""
                                                    >
                                                        Select Country
                                                    </option>
                                                    <option value="">Select a country</option>
                                                    <option value="CA">Canada</option>
                                                    <option value="US">United States</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-container col-6">
                                                <input
                                                    required
                                                    type="text"
                                                    id="postal-code"
                                                    className="checkout-input"
                                                    placeholder="Postal Code"
                                                    name="postal-code"
                                                    aria-label="Postal Code"
                                                />
                                            </div>
                                            <div className="input-container col-6">
                                                <input
                                                    required
                                                    type="text"
                                                    id="province"
                                                    className="checkout-input"
                                                    placeholder="Province/State"
                                                    name="province"
                                                    aria-label="Province/State"
                                                />
                                            </div>
                                            <div className="input-container">
                                                <label
                                                    className="checkout-label"
                                                    htmlFor="pickup-date"
                                                >
                                                    Pick Up Data:
                                                </label>
                                                <input
                                                    required
                                                    id="pickup-date"
                                                    className="checkout-input mb-3"
                                                    type="date"
                                                    name="pickup-date"
                                                    min={formattedToday}
                                                    aria-label="Pick Up Date"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Collapse>

                    </section>
                    <section className='checkout-cart-total'>
                        <div className='checkout-prices'>
                            <div>SubTotal:</div>
                            <div>{formatPrice(subtotal)}</div>
                        </div>
                        <hr />
                        <div className='checkout-prices'>
                            <div>HST:</div>
                            <div>{formatPrice(hst)}</div>
                        </div>
                        <div className='checkout-prices'>
                            <div>Shipping:</div>
                            <div>{formatPrice(shipping)}</div>
                        </div>
                        <hr />
                        <div className='checkout-prices'>
                            <div>Total:</div>
                            <div>{formatPrice(total)}</div>
                        </div>
                    </section>
                    <center>
                        <button className='proceed-to-payment-btn my-3' onClick={handleSubmit}>{proceedToPayment}</button>
                    </center>
                </center>
            </main>
        );
    } else if (stage === "payment") {
        return (
            <main>
                <center>
                    <section className='checkout-form'>
                        <h1 className='time-regular'>
                            Payment
                        </h1>
                        <hr className='w-100' />

                        {/* Production: sq0idp-QeDNasIXMeYe7Mmq35aafQ */}
                        {/* Sandbox: sandbox-sq0idb-RR4e9Ul9usGPEXgG14T-ng */}
                        {/* Production: L7DZSNMWB5XTT */}
                        {/* Sandbox: LEFYSCPQ5AFJF */}
                        <PaymentForm className="payment-form" applicationId='sandbox-sq0idb-RR4e9Ul9usGPEXgG14T-ng' locationId='LEFYSCPQ5AFJF' cardTokenizeResponseReceived={cardTokenizeResponseReceived}>
                            <CreditCard />
                        </PaymentForm>

                        <section className='checkout-cart-total'>
                            <div className='checkout-prices'>
                                <div>SubTotal:</div>
                                <div>{formatPrice(subtotal)}</div>
                            </div>
                            <hr />
                            <div className='checkout-prices'>
                                <div>HST:</div>
                                <div>{formatPrice(hst)}</div>
                            </div>
                            <div className='checkout-prices'>
                                <div>Shipping:</div>
                                <div>{formatPrice(shipping)}</div>
                            </div>
                            <hr />
                            <div className='checkout-prices'>
                                <div>Total:</div>
                                <div>{formatPrice(total)}</div>
                            </div>
                        </section>
                    </section>
                </center>
            </main>
        )
    }
}

export default Checkout;
