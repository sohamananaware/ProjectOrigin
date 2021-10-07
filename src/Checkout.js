import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function checkout() {
    return (
        <div className='checkout'>
            <div className='checkout_right'>
                <Subtotal/>
            </div>

            <div>
                <h2 className='checkout_title'>Your Shopping List</h2>
                {/* basketitem */}
            </div>


        </div>
    )
}

export default checkout