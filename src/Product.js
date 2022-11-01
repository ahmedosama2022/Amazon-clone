import React from 'react'
import "./Product.css"
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { useStateValue } from './StateProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ id,  title, image, price, rating}) => {
  const notify = () => toast(" successfully");

  const sup = () => {
    addToBasket()
    notify()
  }
  const [ { }, dispatch] = useStateValue();
    const addToBasket = () => {
      
      dispatch({
        
        type: 'ADD_TO_BASKET',
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        }

      })
    };



  return (
    <div className='product'>
      
        <div className='product__info'>
            <h4>{title}</h4>
           
            <p className='prodcut__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating' style={{color:"#f0c14b"}}>
                <StarOutlinedIcon/>
                <StarOutlinedIcon/>
                <StarOutlinedIcon/>
                <StarOutlinedIcon/>
            </div>
        </div>
        <img src={image}/>
        <button onClick={sup} >Add To Basket </button>
          <div className='vv'>
          <ToastContainer />
          </div>
    </div>
  )
}

export default Product


