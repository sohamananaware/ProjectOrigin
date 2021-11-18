import React from 'react'
import './Checkout.css'
import Checkoutproduct from './Checkoutproduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket , user }  ] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout_right'>
                <Subtotal/>
            </div>

            <div>
              <h3>hello,{user?.email}</h3>
                <h2 className='checkout_title'>Your Shopping List</h2>
                {basket.map(item => (
                    <Checkoutproduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
            />
          ))}


            </div>


        </div>
    )
}

export default Checkout