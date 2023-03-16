import { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";


const Promotions = (promotion) => {
    const [selectButton, setSelectButton] = useState("");

    const buttonSelect = (e) => {
        const id = e.target.id;
        setSelectButton(id);
    }

    const SinglePromotion = ({promotionName,products, button}) => {
        console.log(products)
        return (
        <>
           <div className="head">
                <h3>
                    promoção {promotionName}
                </h3>
            </div>
            <div className='swiper-container' >
                <Swiper slidesPerView={4} pagination={true} modules={[Pagination]} className="mySwiper promotionSwiper">
                  
                    {products.map((item, index)=>(
                        <SwiperSlide key={index} > 
                            <div href='#' className='card'>
                                <div className='head'>
                                    <a>
                                        <div className='AspectRatio'>
                                            <img  src={item.image} /> 
                                        </div>

                                    </a>
                                </div>
                                <div className='body' >
                                    <div>
                                        <h3>
                                            {item.name}
                                        </h3>
                                        <span>{item.price}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                ))}
                </Swiper>
                <div className='pagination container' ></div>
            </div>
            <div className='see-more-button-display'>
                <button className='button'>{button.name}</button>
            </div>
        </>)
    };

    const ArrPromotions = ({ products, button }) => {
        useEffect(()=>{
            if(selectButton == ''){
                let key = Object.keys(products)[0]
                setSelectButton(products[key].type);                                                                   
            }                                                                                                                                       
        },[])

        return (<>
            <div className="head">
                <h2>PROMOÇÕES</h2>
                <div className="buttons-container" >
                    {
                        Object.keys(products).map((key) => (
                            <a id={products[key].type} onClick={(e) => buttonSelect(e)} className={`${selectButton == products[key].type ? 'active' : null}`}  >
                                {products[key].name} {products[key].promotionText}
                            </a>
                        )

                        )
                    }
                </div>
            </div>
            <div className='swiper-container' >
                <Swiper slidesPerView={4} pagination={true} modules={[Pagination]} className="mySwiper promotionSwiper">
                    {
                        Object.keys(products).map(key => {

                            if (selectButton === products[key].type) {

                                return products[key].products.map((item, index) => (
                                    <SwiperSlide key={index} >
                                        <div href='#' className='card'>
                                            <div className='head'>
                                                <a>
                                                    <div className='AspectRatio'>
                                                        <img src={item.image} />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className='body' >
                                                <div>
                                                    <h3>
                                                        {item.name}
                                                    </h3>
                                                    <span>{item.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        })
                    }
                 
                </Swiper>
                <div className='pagination container' ></div>
            </div>
            <div className='see-more-button-display'>
                <button className='button'>{button.name}</button>
            </div>
        </>)
    }


    return (
        <section className="Promotion-display">
            {promotion.promotion.type === "array" && (<ArrPromotions products={promotion.promotion.products} button={promotion.promotion.SeeMoreButton} />)}
            {promotion.promotion.type === "object" && (<SinglePromotion promotionName={promotion.promotion.name}  products={promotion.promotion.products} button={promotion.promotion.SeeMoreButton} />)}
        </section>
    )
};


export default Promotions;