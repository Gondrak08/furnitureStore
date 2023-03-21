import { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const SinglePromotion = ({ promotion, products, button }) => {
    const promotionName = promotion.name;
    console.log(promotion)
    return (
        <>
            <div className="head">
                <h3>
                    promoção {promotionName}
                </h3>
            </div>
            <div className='swiper-container' >
                <Swiper slidesPerView={4} pagination={true} modules={[Pagination]} className="mySwiper promotionSwiper">

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
                <div className='pagination container' ></div>
            </div>
            <div className='see-more-button-display'>
                <button className='button'>{button.name}</button>
            </div>
        </>)
};

const ArrPromotions = ({ products, button }) => {
    useEffect(() => {
        if (selectButton == '') {
            let key = Object.keys(products)[0]
            setSelectButton(products[key].type);
        }
    }, [])
    const [selectButton, setSelectButton] = useState("");

    const buttonSelect = (e) => {
        const id = e.target.id;
        setSelectButton(id);
    }
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
            <Swiper
                slidesPerView={4}
                modules={[Navigation]}
                navigation={{
                    prevEl: ".prev",
                    nextEl: ".next",
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
                <button className='prev'>
                    {"<"}
                </button>
                <button className='next'>
                    {">"}
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