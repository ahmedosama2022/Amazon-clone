import React, { useRef, useState } from 'react'
// Import Swiper styles
import "swiper/css/pagination";
// import required modules
import "./Home.css";
import Product from './Product';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Home.css";
// import required modules
import { Navigation } from "swiper";
const Home = () => {
  return (
    <div className='home'>
     <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
     <SwiperSlide><img className='home__image' src='https://m.media-amazon.com/images/I/61-7znJHD7L._SX3000_.jpg' style={{width:"1500", height: "600px"}}  /></SwiperSlide>
      <SwiperSlide><img className='home__image' src='https://m.media-amazon.com/images/I/61S7anSm3yL._SX3000_.jpg' style={{width:"1500", height: "600px"}}  /></SwiperSlide>
      <SwiperSlide><img className='home__image' src='https://m.media-amazon.com/images/I/61PobyJf2UL._SX3000_.jpg' style={{width:"1500", height: "600px"}}  /></SwiperSlide>
      <SwiperSlide><img className='home__image' src='https://m.media-amazon.com/images/I/61TpbnyJiWL._SX3000_.jpg' style={{width:"1500", height: "600px"}}  /></SwiperSlide>
      </Swiper>
        
        <div className='home__row'>
            <Product
            id="12321341"
             title='Truly Madly Guilty: From the bestselling author of Big Little Lies, now an award winning TV series'
             price={29.99} 
             image="https://m.media-amazon.com/images/I/91vUm09kg-L._AC_UL320_.jpg"
            rating={5}
            />
             <Product
            id="12321341"
             title='The Learn StartUp'
             price={170.99} 
             image="https://m.media-amazon.com/images/I/81wgcld4wxL._AC_UL320_.jpg"
            rating={5}
            />
           
            <Product
             id="12321341"
             title='Afternoon on the Amazon: 6'
             price={30.99} 
             image="https://m.media-amazon.com/images/I/918dGS-3mWL._AC_UL320_.jpg"
            rating={5}
            />
        </div>

        <div className='home__row'>
        <Product
         id="12321341"
         title='Women`s Shoes | Up to 25% off'
         price={300.99} 
         image="https://images-eu.ssl-images-amazon.com/images/G/42/SL/October/XCM_Manual_1478080_5091646_379x304_1X._SY304_CB606174996_.jpg"
        rating={5}/>
        <Product
         id="12321341"
         title='Support Egyptian products | High quality local'
         price={3000.99} 
         image="https://images-eu.ssl-images-amazon.com/images/G/42/3P/XCM_Manual_1478853_EG_GW_DC_3P_LocalStore_16b9c3af-3cbb-473e-bdac-1f5968191ddc_x1._SY304_CB607312444_.jpg"
        rating={5}/>
        <Product
         id="12321341"
         title='Camera & accessories | Up to 10% off'
         price={500.99} 
         image="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/XCM_Manual_1467579_4993637_379x304_1X._SY304_CB609791102_.jpg"
        rating={5}/>
        </div>
        <div className='sec11'>
        <Swiper
         slidesPerView={5}
         spaceBetween={30}
         slidesPerGroup={3}
         loop={true}
         loopFillGroupWithBlank={true}
         pagination={{
           clickable: true,
         }}
         navigation={true}
         modules={[Pagination, Navigation]}
         className="mySwiper"
      >
        <SwiperSlide><img className='img' src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1407670_4466723_Egypt_Budget_Store_EG_GW_BUB_Xsite_Beauty_EN_200x200_1X._CB646559078_.jpg'/></SwiperSlide>
        <SwiperSlide><img className='img' src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1407670_4466717_Egypt_Budget_Store_EG_GW_BUB_Xsite_Electronics_EN_200x200_1X._CB646559079_.jpg'/></SwiperSlide>
        <SwiperSlide><img className='img' src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1408670_4480681_Egypt_Budget_Store_EG_GW_BUB_Xsite_Kitchen_EN_200x200_1X._CB628534214_.jpg'/></SwiperSlide>
        <SwiperSlide><img className='img' src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1407670_4466712_Egypt_Budget_Store_EG_GW_BUB_Xsite_HPC_EN_200x200_1X._CB646559079_.jpg'/></SwiperSlide>
        <SwiperSlide><img className='img' src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1408670_4480676_Egypt_Budget_Store_EG_GW_BUB_Xsite_Home_EN_200x200_1X._CB628534214_.jpg'/></SwiperSlide>
        <SwiperSlide><img className='img' src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1408670_4480676_Egypt_Budget_Store_EG_GW_BUB_Xsite_Home_EN_200x200_1X._CB628534214_.jpg'/></SwiperSlide>
        <SwiperSlide><img className='img' src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1407670_4466722_Egypt_Budget_Store_EG_GW_BUB_Xsite_Baby_essentials_EN_200x200_1X._CB646559078_.jpg'/></SwiperSlide>
        <SwiperSlide><img className='img' src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1407670_4466705_Egypt_Budget_Store_EG_GW_BUB_Xsite_Sports_fitness_EN_200x200_1X._CB646559078_.jpg'/></SwiperSlide>
        <SwiperSlide><img className='img' src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1407670_4466711_Egypt_Budget_Store_EG_GW_BUB_Xsite_PC_EN_200x200_1X._CB646559079_.jpg'/></SwiperSlide>
      </Swiper>
        </div>
        <div className='home__row'>
        <Product
            id="12321341"
             title='Get it as soon as tomorrow, Oct 31
             Fulfilled by Amazon - FREE Shipping'
             price={300.99} 
             image="https://m.media-amazon.com/images/I/71E5zB1qbIL._AC_UL320_.jpg"
            rating={5}
            />
             <Product
            id="12321341"
             title='New Apple iPhone 13 (128 GB) - Green'
             price={2600.99} 
             image="https://m.media-amazon.com/images/I/61iXV8JYv-L._AC_UL320_.jpg"
            rating={5}
            />
        <Product
         id="12321341"
         title='New Apple iPhone 13 with FaceTime (128GB) - Blue'
         price={2500.99} 
         image="https://m.media-amazon.com/images/I/61jLiCovxVL._AC_UL320_.jpg"
        rating={5}/>
        </div>
        <div className='sec22'>
        <Swiper
       slidesPerView={5}
       spaceBetween={30}
       slidesPerGroup={3}
       loop={true}
       loopFillGroupWithBlank={true}
       pagination={{
         clickable: true,
       }}
       navigation={true}
       modules={[Pagination, Navigation]}
       className="mySwiper"
      >
        <SwiperSlide><img className='img' src='https://m.media-amazon.com/images/I/91aDSw-rfvL._AC_UL320_.jpg'/></SwiperSlide>
        <SwiperSlide><img className='img' src='https://m.media-amazon.com/images/I/31gVVe2GOhL._AC_UL320_.jpg'/></SwiperSlide>
        <SwiperSlide><img className='img' src='https://m.media-amazon.com/images/I/41QQ+O789aL._AC_UL320_.jpg'/></SwiperSlide>
        <SwiperSlide><img className='img' src='https://images-eu.ssl-images-amazon.com/images/I/51RnYrvt28L._AC_UL160_SR160,160_.jpg'/></SwiperSlide>
        <SwiperSlide><img className='img' src='https://images-eu.ssl-images-amazon.com/images/I/81u4AQtblWL._AC_UL160_SR160,160_.jpg'/></SwiperSlide>
        <SwiperSlide><img className='img' src='https://images-eu.ssl-images-amazon.com/images/I/81HZCq-92eL._AC_UL160_SR160,160_.jpg'/></SwiperSlide>
        <SwiperSlide><img className='img' src='https://m.media-amazon.com/images/I/91aDSw-rfvL._AC_UL320_.jpg'/></SwiperSlide>
        <SwiperSlide><img className='img' src='https://m.media-amazon.com/images/I/31gVVe2GOhL._AC_UL320_.jpg'/></SwiperSlide>
        <SwiperSlide><img className='img' src='https://m.media-amazon.com/images/I/41QQ+O789aL._AC_UL320_.jpg'/></SwiperSlide>
      </Swiper>
        </div>
        <div className='home__row'>
        <Product
            id="12321341"
             title='The Learn StartUp'
             price={29.99} 
             image="https://m.media-amazon.com/images/I/61jrUD7ixaL._AC_UL320_.jpg"
            rating={5}
            />
             <Product
            id="12321341"
             title='Echo Show 5 Smart Display with Alexa and 2 MP Camera (Charcoal)'
             price={240.99} 
             image="https://m.media-amazon.com/images/I/71txK3f8jbL._AC_UL320_.jpg"
            rating={5}
            />
        <Product
         id="12321341"
         title='Car compressors | Starting290 EGP'
         price={400.99} 
         image="https://images-eu.ssl-images-amazon.com/images/G/42/SL/DEC/GW/XCM_Manual_1396328_4379575_Egypt_EG_BAU_GW_DC_SL_Bags_Wallets_379x304_1X._SY304_CB650636675_.jpg"
        rating={5}/>
        </div>
        <div className='home__row'>
        <Product
            id="12321341"
             title='Enjoy free in-game offers and games with Amazon'
             price={29.99} 
             image="https://images-eu.ssl-images-amazon.com/images/G/42/prime/damisi/prime_eg_launch_/xcm_banners_primegaming_desktop_categorycard_379x304_758x608_eg-en._SY304_CB622128285_.jpg"
            rating={5}
            />
             <Product
            id="12321341"
             title='Dado Nylon Strap Compatible with Apple watch Series 8 | 7 | 6 | 5 | 4 | 3 | SE , breathable light weight bracelet strap'
             price={290.99} 
             image="https://m.media-amazon.com/images/I/41uVS+-Y9AL._AC_UL320_.jpg"
            rating={5}
            />
        <Product
         id="12321341"
         title='Godox LITEMONS LED6R RGB Video Light, Pocket Led Light Bicolor 3200K-6500K, CRI 95, 13 Fx Light Effects, HSI Mode,'
         price={4000.99} 
         image="https://m.media-amazon.com/images/I/71jJKdeTxmL._AC_UL320_.jpg"
        rating={5}/>
        </div>
        <div className='home__row'>
            <Product
            id="12321341"
             title='Truly Madly Guilty: From the bestselling author of Big Little Lies, now an award winning TV series'
             price={29.99} 
             image="https://m.media-amazon.com/images/I/91vUm09kg-L._AC_UL320_.jpg"
            rating={5}
            />
             <Product
            id="12321341"
             title='The Learn StartUp'
             price={170.99} 
             image="https://m.media-amazon.com/images/I/81wgcld4wxL._AC_UL320_.jpg"
            rating={5}
            />
           
            <Product
             id="12321341"
             title='Afternoon on the Amazon: 6'
             price={30.99} 
             image="https://m.media-amazon.com/images/I/918dGS-3mWL._AC_UL320_.jpg"
            rating={5}
            />
        </div>
        
    </div>
  )
}

export default Home