import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from 'firebase';
import "./Header.css";

const Header = () => {

  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className='Header'>
      <div className='header__logo'>
     <Link to="/">
     <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' width="100px"/>
     </Link>
      </div>
      <div className='header__search'>
        <input className='header__searchInput' type="text"/>
        <SearchIcon className="header__searchIcon"/>
      </div>
      <div className='header__nav'>
          <Link to={!user && "/Login"}>
          <div onClick={login} className='header__option'>
              <span className='header__optionLineOne'>
                Hello {user?.email}
              </span>
            
             <span className='header__optionLineTwo'>
                {user ? 'Sign Out' : 'Sign in'}
              </span>
             
          </div>
          </Link>
         <Link to="/Checkout">
         <div className='header__option'>
          <span className='header__optionLineOne'>
               & Orders
              </span>
              <span className='header__optionLineTwo'>
              Orders
              </span>
          </div>
         </Link>

          <div className='header__option'>
          <span className='header__optionLineOne'>
                Your 
              </span>
              <span className='header__optionLineTwo'>
              Prime
              </span>
          </div>
          <Link to="Checkout">
          <div className='header__optionBasket'>
                <ShoppingBasketOutlinedIcon/>
                <span className='header__optionLinetow 
                header__basket'>
                    {basket?.length}
                </span>
          </div>
          </Link>
      </div>
    </div>
  )
}

export default Header