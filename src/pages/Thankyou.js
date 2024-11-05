import React from 'react';
import "../assets/css/thankyou.css";

function Thankyou() {
    return (
        <main className='thankyou-container'>
            <div className='thankyou'>
                Thank You For Your Order!
            </div>
            <div className='thankyou-message'>
                Your order has been placed successfully. We will send you an email with the order details.
            </div>
        </main>
    )
}

export default Thankyou