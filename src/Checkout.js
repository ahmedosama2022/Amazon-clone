import React from 'react'
import "./Checkout.css"
import { useStateValue } from './StateProvider'
import CeckProduct from './CeckProduct';
import Subtotal from './Subtotal'
const Checkout = () => {

  const [{ basket }] = useStateValue();
  
  return (
    <div className='Checkout'>
        <div className='Checkout__left'>
            <img className='Checkout__ad' src='https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2022/Double11/GW/XCM_Manual_1485248_5113741_1500x200_2X.jpg'/>
        </div>

        {basket.length > 0 && (
            <div className='Checkout__right'>
            <Subtotal/>
           </div>
        )}
            {basket?.length === 0 ? (

                <h2 style={{textAlign: "center" , marginTop:"20px"}}>Your Shopping Basket</h2>   
            ) : (
             <div>
               <h2 style={{textAlign: "center" , marginBottom:"20px"}}>Your Shopping Basket nex </h2>
               {basket.map((item) => (

              
                 <CeckProduct
                 id={item.id}
                 title={item.title}
                 image={item.image}
                 price={item.price}
                 rating={item.rating}
                 />
               ))}   
               
              
              
             </div>
            )}
       

       
        
    </div>
  );
}

export default Checkout