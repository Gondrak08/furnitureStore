

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'


const SinglePromotion = ({ promotion, products, button }) => {
    const promotionName = promotion.name;

    return (
        <>
            <div className="head">
                <h3>
                    promoção {promotionName}
                </h3>
            </div>
            <div className='swiper-container' >
                <Swiper slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                     className="mySwiper promotionSwiper">

                    {products.map((item, index) => (
                        <SwiperSlide key={index} >
                            <div href='#' className='card'>
                                <div className='head'>
                                    {
                                        item.isPromotion ? (
                                            <span className='product-label' >
                                                Em Promoção
                                            </span>
                                        ) :
                                            null}
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
                                        {item.isPromotion ? (
                                            <div className='price-box' >
                                                <span className='discount' >${item.price * (100 - item.DiscountPercent) / 100}</span>
                                                <span className='full-price' >${item.price}</span>
                                            </div>
                                        ) : (
                                            <span>${item.price}</span>
                                        )
                                        }

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                

            </div>
            <div className='see-more-button-display'>
                <button className='button'>{button.name}</button>
            </div>
        </>)
};

export default SinglePromotion;