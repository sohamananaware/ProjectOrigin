import React from 'react'
import './product.css'
import { useStateValue } from './StateProvider'

function Product({id,title ,image, price}) {
    const [{basket},dispatch] = useStateValue()

    const addToBasket = () => {

        dispatch({
            type : 'ADD_TO_BASKET',
            item : {
                id:id,
                title:title,
                image:image,
                price:price 
            },
        }); 


    };

    return (
        <div className='product'>
             <div className="product_info">
                <p>{title}</p>
                <p className='product_price'>
                    <small>&#x20B9;</small>
                    <strong>{price}</strong>
                </p>
             </div>

             <img src={image} alt="" />

             <button onClick={addToBasket}>Add To Basket</button>
        </div>
    )
}

export default Product
