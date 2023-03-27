import { useEffect, useState } from 'react'

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
                    // modules={[Navigation]}
                    // navigation={{
                    //     prevEl: ".prev",
                    //     nextEl: ".next",
                    // }}
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



const ArrPromotions = ({ products, button }) => {
    const [selectButton, setSelectButton] = useState("");

    useEffect(() => {
        if (selectButton == '') {
            let key = Object.keys(products)[0]
            setSelectButton(products[key].type);
        }
    }, [])



    const buttonSelect = (e) => {
        const id = e.target.id;
        setSelectButton(id);
    }

    return (
        <>
            <div className="head">
                <h2>PROMOÇÕES</h2>
                <div className="buttons-container" >
                    {
                        Object.keys(products).map((key) => (
                            <a id={products[key].type} role="tab" onClick={(e) => buttonSelect(e)} className={`tab-button ${selectButton == products[key].type ? 'active' : null}`}  >

                                {products[key].name} {products[key].promotionText}
                            </a>
                        )

                        )
                    }
                </div>
            </div>
            <div className='swiper-container' >
                <Swiper
                    slidesPerView={1}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".prev",
                        nextEl: ".next",
                    }}
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
                    {
                        Object.keys(products).map(key => {

                            if (selectButton === products[key].type) {

                                return products[key].products.map((item, index) => (
                                    <SwiperSlide key={index}
                                    >
                                        <div href='#' className='card'>
                                            <div className='head'>
                                                {
                                                    item.isPromotion ? (
                                                        <span className='product-label' >
                                                            Em Promoção
                                                        </span>
                                                    ) : null
                                                }
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
                                ))
                            }
                        })
                    }

                </Swiper>
                <div className='swiper-navigation-container' >
                    <button className='prev' data-animate-left>
                        <SlArrowLeft className='animate-icon' />
                    </button>
                    <button className='next' data-animate-right >
                        <SlArrowRight className='animate-icon' />
                    </button>
                </div>

            </div>
            <div className='see-more-button-display'>
                <button className='button'>{button.name}</button>
            </div>
        </>)
}

const Promotions = (promotion) => {
    return (
        <section className="Promotion-display">
            {promotion.promotion.type === "array" && (<ArrPromotions products={promotion.promotion.products} button={promotion.promotion.SeeMoreButton} />)}
            {promotion.promotion.type === "object" && (<SinglePromotion promotion={promotion.promotion} products={promotion.promotion.products} button={promotion.promotion.SeeMoreButton} />)}
        </section>
    )
};


export default Promotions;