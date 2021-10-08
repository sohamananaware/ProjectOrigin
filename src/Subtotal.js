import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from "./reducer";



function Subtotal() {
  const[{ basket },dispatch]=useStateValue();
    return (
        <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>

          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={'\u20A8'}
      />

      <button className='subtotal_button'>Proceed to Checkout</button>
    </div>

    )
}

export default Subtotal