import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import BannerOne from '../assets/bannerOne.jpg';
import BannerTwo from '../assets/bannerTwo.jpg';
import BannerThree from '../assets/bannerThree.jpg';



const Hero = () => {
    return (
        <>
            <Swiper pagination={true} modules={[Pagination]} className="Myswiper swiperHero">
                {
                    [BannerOne, BannerTwo, BannerThree].map((image, index) => (
                        <SwiperSlide key={index} ><img className="hero-image" src={image} /></SwiperSlide>

                    ))
                }

            </Swiper>
        </>
    )
};

export default Hero;