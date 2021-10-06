import React from 'react'
import "./Home.css"
import Product from './Product'
import shop from "./shop2.jpg"
import tv from './tv.webp'


function Home() {
    return (
        <div className='home'>
            <div className="home_container">
                <img className='home_image' src={shop} alt="" />
            </div>
            
            <div className="home_row">
                <Product 
                title='the first product'
                price='999'
                image={tv}/>
                
                <Product 
                title='the second product'
                price='500'
                image='https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w' />
                
                <Product
                title='The third product'
                price='600'
                image='https://images.pexels.com/photos/249324/pexels-photo-249324.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/249324/pexels-photo-249324.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w'/>
                
                <Product
                title='The fourth product'
                price='250'
                image='https://images.pexels.com/photos/3780680/pexels-photo-3780680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/3780680/pexels-photo-3780680.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w'/>
            </div>
        </div>
    )
}

export default Home
