
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link , useHistory } from 'react-router-dom';
import Checkoutproduct from './Checkoutproduct';
import './Payment.css'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider'
import {db} from "./firebase"
function Payment() {
    const [{basket , user},dispatch] = useStateValue();

    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();
    const [succeeded , setSucceeded] = useState(false);
    const [processing , setProcessing] = useState("");


   const [error , setError] = useState(null);
   const [disabled , setDisabled] = useState(true);
   const [clientSecret , setClientSecret] = useState(true);
   

   useEffect(() => {
    const getClientSecret = async () =>{
        const response = await axios({
            method : 'post',
            //stripe expects the total in a currencies subunits 
            url:`/payments/create?total=${getBasketTotal(basket) * 1 }`
        });
        setClientSecret(response.data.clientSecret) 
    }
    getClientSecret();
}, [basket])

console.log('the secret', clientSecret)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);
       
         const payload = await stripe.confirmCardPayment(clientSecret , {
             payment_method:{
             Card: elements.getElement(CardElement)
             }
         }).then(({paymentIntent}) =>{

            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true);
            setError(null)
            setProcessing(false)
            dispatch({
                type:'EMPTY_BASKET'
            })


            history.replace('/Orders')
         })

}
const handleChange = event => {
    
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
}
    return (
        <div>
            <div className="payment_container">
                <h1>Checkout (<Link to='/checkout'>{basket?.length} items</Link>)</h1>
                {/* payment address*/}
                    <div className="payment_section">
                        <div className="payment_title">
                            <h3>Delivery Address</h3>
                            <p>{user?.email}</p>
                            <p>RIT islampur</p>
                            <p>Sangli</p>

                        </div>
                        
                    </div>

                {/* review items*/}
                <div className="payment_section">
                
                            <div className="payment_title">
                               <h3>Review items and delivery</h3>
                            </div>
                          <div className="payments_items">
                              {basket.map(item =>(
                                  <Checkoutproduct
                                  
                                  id={item.id}
                                  title={item.title}
                                 image={item.image}
                                  price={item.price}
                                 
                                  />
                              ))}
                              </div>  
                        
                </div>

                {/* payment method*/}
                <div className="payment_section">
                  <div className="payment_title">
                      <h3>payment Method</h3>
                      </div>

                      <div className="payment_details">
                          {/*stripe*/}
                          <form onSubmit={handleSubmit} >
                                    <CardElement  onChange={handleChange}/>
                                    <div className="payment_pricecontainer">
                                       < CurrencyFormat 
                                         renderText={(value) => (

                                            <h3>Order Total : {value} </h3>
                                             
                                         )}

                                         decimalScale={2}
                                         value={getBasketTotal(basket)}
                                         displayType={"text"}
                                         thousandSeparator = {true}
                                         prefix = {"Rs "}
                                       
                                       />
                                       <button disabled={processing || disabled || succeeded}>
                                           <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                       </button>
                                    </div>

                                    {error &&  <div>{error}</div> }
                                </form>
                          </div>      
                </div>
            </div>
        </div>
    )
}

export default Payment
