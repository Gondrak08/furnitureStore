


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import {SlArrowDown} from 'react-icons/sl';

import BannerOne from '../assets/bannerOne.jpg';
import BannerTwo from '../assets/bannerTwo.jpg';
import BannerThree from '../assets/bannerThree.jpg';




const Hero = () => {
    return (
        <section className="hero-section" >
            <Swiper pagination={true} modules={[Pagination]} className="Myswiper swiper-hero">
                {
                    [BannerOne, BannerTwo, BannerThree].map((image, index) => (
                        <SwiperSlide key={index} ><img className="hero-image" src={image} /></SwiperSlide>

                    ))
                }

            </Swiper>
            {/* <div className="roll-button"> */}
                <button className="round-button" data-animate-bottom >
                    <SlArrowDown className="arrow-icon-down" />
                </button>
            {/* </div> */}
        </section>
    )
};

export default Hero;