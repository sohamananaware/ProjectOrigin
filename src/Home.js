import React from 'react'
import "./Home.css"
import Product from './Product'
import shop from "./shop2.jpg"
import teslaboard from './teslaboard.jpeg'


function Home() {
    return (
        <div className='home'>
            <div className="home_container">
                <img className='home_image' src={shop} alt=""/>
            </div>
            
            <div className="home_row">
                <Product 
                id="1"
                title='Tesla Board'
                price={999}
                image={teslaboard}/>
            </div>
        </div>
    )
}

export default Home
