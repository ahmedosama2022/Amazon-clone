import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

const Subtotal = () => {
  const [ { basket }, dispatch] = useStateValue();
  
  return (
    <div className='Subtotal'>
         <CurrencyFormat 
         renderText={(value) => (
            <>
             <h3>
                Subtotal ({basket.length} items): <strong>{` ${value}`}</strong>
            </h3>
             <small className='suptotel__gift'>
                <input type="checkBox"/> this order contains agit
            </small>
           
           
            </>
         )}

         decimalScale={2}
         value={0}
         displayType={"text"}
         thousandSeparator={true}
         prefix={"$"}
         />
         <button style={{height: "70px"}}>Proceed To Checkout</button>
    </div>
  )
}

export default Subtotal