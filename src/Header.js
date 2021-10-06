import React from 'react'
import './Header.css'
import origin from './origin1.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Header() {
    return (
        <div className='header'>
            <img className='header_logo' src={origin}/>

            <div className="header_search">
                <input className='header_searchinput' type="text" placeholder='Search'/>
                <SearchIcon className='header_searchicon'/>
                {/* Logo */}
            </div>

            <div className="header_nav">
                <div className="header_option">
                        <span className='header_optionlineone'>
                            Hello Guest
                       </span> 
                        <span className='header_optionlinetwo'>
                             Sign In
                       </span> 
                </div>
                <div className="header_option">
                <span className='header_optionlineone'>
                            Returns
                       </span> 
                        <span className='header_optionlinetwo'>
                            Orders
                       </span> 
                </div>

                <div className="header_optionbasket">
                    <ShoppingCartIcon/>
                    <span className='header_optionlinetwo header_basketcount'>0</span>
                </div>


            </div>
        </div>
        
    )
}

        

        

export default Header;
