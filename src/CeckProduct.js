import React from 'react'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import './CeckProduct.css'
import {useStateValue} from './StateProvider';
const CeckProduct = ({ id,  title, image, price, rating }) => {
    const [ { }, dispatch] = useStateValue();
    const REMOVEFROMBASKET = () => {
          dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
          });
    }
  return (
    <div className='CeckProduct'>
        <img src={image}/>

        <div className='info'>
           <h4>{title}</h4>
           <p>
            <small>$</small>
            <strong>{price}</strong>
           </p>
           <div className='product__rating' style={{color:"#f0c14b"}}>
                <StarOutlinedIcon/>
                <StarOutlinedIcon/>
                <StarOutlinedIcon/>
                <StarOutlinedIcon/>
            </div>

            <button onClick={REMOVEFROMBASKET}>REMOVE FROM BASKET</button>
        </div>
    </div>
  )
}

export default CeckProduct