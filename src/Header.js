import React from 'react'
import './Header.css'
import origin from './origin1.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {
    const[{ basket , user },dispatch]=useStateValue();
    const handleAuthentication = ()=>{
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to='/'>
            <img className='header_logo' src={origin}/>
            </Link>

            <div className="header_search">
                <input className='header_searchinput' type="text" placeholder='Search'/>
                <SearchIcon className='header_searchicon'/>
                {/* Logo */}
            </div>

            <div className="header_nav">
                <Link to={!user &&'/login'}>
                <div onClick={handleAuthentication} className="header_option">
                        <span className='header_optionlineone'>
                            Hello {!user ? 'Guest' : user.email}
                       </span> 
                        <span className='header_optionlinetwo'>
                             {user ? 'Sign Out' : 'Sign In'}
                       </span> 
                </div>
                </Link>
                <div className="header_option">
                <span className='header_optionlineone'>
                            Returns
                       </span> 
                        <span className='header_optionlinetwo'>
                            Orders
                       </span> 
                </div>

                    <Link to='/checkout'>
                <div className="header_optionbasket">
                    <ShoppingCartIcon/>
                    <span className='header_optionlinetwo header_basketcount'>{basket?.length}</span>
                </div>
                    </Link>


            </div>
        </div>
        
    )
}

        

        

export default Header;
