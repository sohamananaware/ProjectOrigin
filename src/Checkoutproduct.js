import React from 'react'
import './Checkoutproduct.css'
import { useStateValue } from './StateProvider'


function Checkoutproduct({id,image,title,price}) {
    const [{basket},dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutproduct'>
            <img className='checkoutproduct_image' src={image} alt="" />
            <div className='checkoutproduct_info'>
                <p className='checkoutproduct_title'>{title}</p>
                <p className='checkoutproduct_price'>
                    <small>&#x20B9;</small>
                    <strong>{price}</strong>
                </p>
                <button onClick={removeFromBasket}>Remove from Basket</button>

            </div>
        </div>
        
    )
}

export default Checkoutproduct


